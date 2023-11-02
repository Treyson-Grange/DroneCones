<script setup>
    import { supabase } from './lib/supabaseClient'
    function navigateToDrones(){
        window.location.href = '/droneHome'
    }
</script>


<template>
    <div class = "page2">
        <h1>Add New Drone</h1>
        <div class = "form-list">
            <form>
                <div class = "form-group">
                    <label for ="name">Name:</label>
                    <input type = "text" id = "name"/>
                </div>
                <div class="radio-button-container">
                    <input class = "radio" type="radio" name="name1" id="small">
                    <label class = "radio-button" for="small">Small</label>

                    <input class = "radio" type="radio" name="name1" id="medium">
                    <label class = "radio-button" for="medium">Medium</label>

                    <input class = "radio" type="radio" name="name1" id="large">
                    <label class = "radio-button" for="large">Large</label>
                </div>
                <div class = "spacer">
                    <button style = "background-color: var(--accent-color); color: var(--font-accent);">Add</button>
                    <button @click = "navigateToDrones">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>