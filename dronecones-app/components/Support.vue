<script setup>
    import {addForm} from '../database/supportDatabase'

    const formData = {
        message: ''
    }

    async function sendForm(){
        const sizeValue = Number(formData.size);
        if(formData.message !== ''){
            const error = await addForm(localStorage.getItem("userID"), formData.message.toString());
            location.reload();
            if(error){
                console.log("Creating Message Error: ", error.message);
            }
            else{
                console.log(formData);
            } 
        }
    }
</script>


<template>
    <div class = "page2">
        <h1>Support</h1>
        <div class = "form-list">
            <form @submit.prevent="sendForm">
                <div class = "form-group">
                    <label for ="message">Message:</label>
                    <textarea
                        rows = "10" 
                        id = "message"
                        v-model="formData.message"
                    ></textarea>
                </div>
                <div class = "end">
                    <button type = "submit" style = "background-color: var(--accent-color); color: var(--font-accent);">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>