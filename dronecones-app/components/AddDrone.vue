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
                    <div class = "choices">
                        <button>Small</button>
                        <button>Medium</button>
                        <button>Large</button>
                    </div>
                    <label for = "radius">Drone Radius:</label>
                    <input type = "number" id = "radius"/>
                </div>
                <div class = "spacer">
                    <button style = "background-color: var(--accent-color); color: var(--font-accent);">Add</button>
                    <button @click = "navigateToDrones">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>