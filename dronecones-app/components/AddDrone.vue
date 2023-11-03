<script setup>
    import { supabase } from './lib/supabaseClient'
    import {addDrone} from '../database/droneDatabase'

    const formData = {
        name: '',
        size: ''
    }

    async function createDrone(){
        const sizeValue = Number(formData.size);
        if(formData.name !== '' && formData.size !== ''){
            const error = await addDrone(localStorage.getItem("userID"), formData.name.toString(), sizeValue);
            if(error){
                console.log("Creating Drone Error: ", error.message);
            }
            else{
                console.log(formData);
            } 
        }
    }
</script>


<template>
    <div class = "page2">
        <h1>Add New Drone</h1>
        <div class = "form-list">
            <form @submit.prevent="createDrone">
                <div class = "form-group">
                    <label for ="name">Name:</label>
                    <input type = "text" id = "name" v-model="formData.name"/>
                </div>
                <div class="radio-button-container">
                    <input name = "size" class = "radio" type="radio" id="small" value = '0' v-model="formData.size">
                    <label class = "radio-button" for="small">Small</label>

                    <input name = "size" class = "radio" type="radio" id="medium" value = '1' v-model="formData.size">
                    <label class = "radio-button" for="medium">Medium</label>

                    <input name = "size" class = "radio" type="radio" id="large" value = '2' v-model="formData.size">
                    <label class = "radio-button" for="large">Large</label>
                </div>
                <div class = "spacer">
                    <button type = "submit" style = "background-color: var(--accent-color); color: var(--font-accent);">Add</button>
                    <slot/>
                </div>
            </form>
        </div>
    </div>
</template>