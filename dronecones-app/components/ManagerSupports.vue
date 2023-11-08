<template>
    <h1>Support</h1>
    <div>
        <table class="support-table">
            <thead>
                <tr class="header">
                    <th>Submitted</th>
                    <th>Name</th>
                    <th>Message</th>
                    <th>Resolved</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(form, index) in shownForms" :key="form.id" @click="expandRow(form)">
                    <td> {{ form.created_at === null ? 'N/A' : this.formatDate(form.created_at) }}</td>
                    <td> {{ this.getUsersName(form.users) }}</td>
                    <td> {{ form.form_field === null ? 'N/A' : this.formatComment(form.form_field) }}</td>
                    <td> {{ form.resolved === null ? 'N/A' : (form.resolved ? 'Yes' : 'No') }}</td>
                </tr>
            </tbody>
        </table>
        <div class="show-resolved">
            <p>Show Resolved Forms? </p>
            <div class="toggle-button">
                <input type="checkbox" id="toggle" v-model="showResolved" @click="toggleResolved()" class="hidden-input" />
                <label for="toggle" class="toggle"></label>
            </div>
        </div>
        <div>
            <ManagerSupportExpand ref="expandView"/>
        </div>

    </div>

</template>

<script>
import * as supportdb from './../database/supportDatabase'
export default {
    data() {
        return {
            usertype: localStorage.getItem('usertype'),
            showResolved: true,
            forms: [],
            shownForms: [],
        }
    },
    created() {
        supportdb.getForms()
            .then(forms => {
                this.forms = forms;
                this.shownForms = forms;
            })
    },
    methods: {
        getUsersName(user) {
            let name = ''
            if (user.firstname != null) {
                name += user.firstname + " "
            }
            if (user.lastname != null) {
                name += user.lastname
            }
            return name === '' ? 'N/A' : name
        },
        expandRow(form) {
            this.$refs.expandView.open(form)
        },
        formatDate(date) {
            const day = date.slice(8,10)
            const month = date.slice(5,7)
            const year = date.slice(2,4)
            return `${month}/${day}/${year}`
        },
        formatComment(comment) {
            return comment.length > 40 ? comment.slice(0,30) + '...' : comment
        },
        updateForms() {
            supportdb.getForms()
                .then(forms => {
                    this.forms = forms
                })
        },
        async toggleResolved() {
            await new Promise(r => setTimeout(r, 10));
            let tempForms = []
            if (this.showResolved) {
                this.shownForms = this.forms
            }
            else {
                for (const form of this.forms) {
                    if (!form.resolved) {
                        tempForms.push(form)
                    }
                }
                this.shownForms = tempForms
            }
        },
    },
}

</script>

<style>
.support-table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 800px;
    left:0;
}

.header {
  background-color: #333;
  color: #fff;
}

tr {
  border-bottom: 1px solid #ccc;
  background-color: var(--secondary-color);
}

/* Cell styling */
td, th {
  padding: 10px;
  text-align: center;
  color: white;
}

/* Add more space between items in the rows */
td {
  padding: 15px;
}

.show-resolved {
    display: flex;
}

p {
    color: white;
    padding-right: 10px;
}
</style>