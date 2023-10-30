<script setup>
    import { supabase } from './lib/supabaseClient'
</script>

<template>
    <div class = "page2">
        <div class = "drone-header">
            <h1>Drones</h1>
            <button>Add Drone</button>
        </div>
        <div class = 'drone-item'>
            <h2>Example Name</h2>
            <div class = 'drone-info'>
                <div>Size: medium</div>
                <div>Status: disabled</div>
            </div>
            <form>
                <label for="status">Choose a Status:</label>
                <select id="drone-status" name="status">
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                    <option value="delete">Delete</option>
                </select>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>