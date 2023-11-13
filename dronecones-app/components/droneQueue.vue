<script>
    import { getDronesForDelivery } from '../database/droneDatabase'
    export default {
        data() {
            return {
                availableDrones: [],
            };
        },
        async created() {
            try {
                const data = await getDronesForDelivery(localStorage.getItem('userID'), 3);
                this.availableDrones = data;
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
    };
</script>

<template>
    <div v-if="availableDrones == null">
        <h2 style="text-align: center">No Drones Currently Available</h2>
        
    </div>
</template>
