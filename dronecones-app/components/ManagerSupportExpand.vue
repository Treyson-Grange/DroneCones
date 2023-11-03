<template>
    <div class="expandedView" v-if="showForm">
        <div class="container">
            <div class="row">
                <h2>{{ this.getName() }}</h2>
                <p>{{ this.form.users.email }}</p>
            </div>
            <hr>
            <p>{{ this.form.form_field }}</p>
            <br>
            <p>Submitted {{ this.getDate() }}</p>


            <div class="button-container">
                <button class="close-button" @click="close">Close</button>
                <button type="submit" class="resolve-button" @click="toggleResolve">{{ form.resolved ? 'Unresolve' : 'Resolve' }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import * as supportdb from './../database/supportDatabase'
export default {
    data() {
        return {
            form: null,
            showForm: false,
        }
    },
    methods: {
        open(form) {
            this.showForm = true;
            this.form = form;
        },
        close() {
            this.showForm = false;
            this.form = null;
        },
        getName() {
            const user = this.form.users
            let name = ''
            if (user.firstname != null) {
                name += user.firstname + " "
            }
            if (user.lastname != null) {
                name += user.lastname
            }
            return name === '' ? 'N/A' : name
        },
        getDate() {
            const date = this.form.created_at
            const day = date.slice(8,10)
            const month = date.slice(5,7)
            const year = date.slice(2,4)
            const time = date.slice(11,19)
            return `${month}/${day}/${year}  ${time}`
        },
        async toggleResolve() {
            supportdb.toggleFormResolved(this.form.id)
            await new Promise(r => setTimeout(r, 300));
            this.$parent.updateForms()
            this.close()
        },
    }
}
</script>

<style>
.expandedView {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.container {
    background: var(--secondary-color);
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
}

.row {
    display: flex;
    justify-content: space-between;
}

h2 {
    color: white;
}
p {
    color: white;
}



.button-container {
    text-align: right;
    display: flex;
}
.close-button {
    background: #bbb;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
}
.resolve-button {
    background: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>