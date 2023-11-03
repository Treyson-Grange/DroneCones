<template>
        <Navbar> 
            <a href="/droneHome">Drones</a>
            <a>Support</a>
        </Navbar>
    <div>
        <Drones class = "animated-element1" :class="{ 'active1': isActive }">
            <button @click="toggleElement">Add Drone</button>
        </Drones>
        <AddDrone class = "animated-element2" :class="{ 'active2': !isActive}">
            <button @click="toggleElement">Cancel</button>
        </AddDrone>
    </div>
</template>


<script>
    export default {
    data() {
        return {
        isActive: false,
        };
    },
    methods: {
        toggleElement() {
        this.isActive = !this.isActive;
        },
    },
    };
</script>


<style>
.active1 {
    display: none;
}

.active2 {
    display: none;
}


</style>