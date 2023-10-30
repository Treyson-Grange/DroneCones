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
            <form class = "choices">
                <button>Enable</button>
                <button>Disabled</button>
                <button>Delete</button>
            </form>
        </div>
    </div>
</template>