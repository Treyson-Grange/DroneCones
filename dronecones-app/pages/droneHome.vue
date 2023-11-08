<template>
        <Navbar> 
            <a href="/droneHome">Drones</a>
            <a href="/support">Support</a>
        </Navbar>
        <Drones ref = "droneView" class = "animated-element1" :class="{ 'active1': isActive }">
            <button @click="toggleElement">Add Drone</button>
        </Drones>
        <AddDrone class = "animated-element2" :class="{ 'active2': !isActive}">
            <button type = "button" @click="toggleElement">Cancel</button>
        </AddDrone>
        <EditDrone ref = "editDroneView"/>
</template>


<script>
    export default {
    data() {
        return {
        isActive: false,
        drone: null,
        userId: localStorage.getItem('userId')
        };
    },
    methods: {
        toggleElement() {
            this.isActive = !this.isActive;
        },
        editDrone(drone){
            this.$refs.editDroneView.openForm(drone);
        },
        updateDrones() {
            this.$refs.refreshDrones();
        },
        setDrone(drone){
            this.drone = drone
        }
    },
    };
</script>


<style>
.animated-element1{
    z-index: 1;
    opacity: 1;
    background-color: var(--primary-color);
    left: 0px;
}
.active1 {
    z-index: 0;
    position: absolute;
    left: -100%;
    transition: all 0.8s ease-in-out;
}
.animated-element2{
    z-index: 1;
    opacity: 1;
    background-color: var(--primary-color);
    height: calc(100vh - 64px);
    top: 0px;
}
.active2 {
    z-index: 0;
    opacity: 0;
    position: absolute;
    top: -100%;
    transition: all 0.8s ease-in-out;
}


</style>