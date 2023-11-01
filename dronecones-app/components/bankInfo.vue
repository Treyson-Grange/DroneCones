<script>
    // import { bankInfo } from '../database/transactionDatabase'
    // export default {
    //     data() {
    //         return {
    //             routingNumber: "", 
    //             accountNumber: "", 
    //         };
    //     },
    //     async created() {
    //         console.log(routingNumber);
    //         try {
        //         const data = await bankInfo(localStorage.getItem('userID'));
                //data.routingNumber;
                //data.accountNumber;
    //         } catch (error) {
    //             console.error('An error occurred:', error);
    //         }
    //     },
    // };
</script>

<template>
    <div>
        <h2>Bank Information</h2>
        <ul>
            <li>
                routingNumber:
            </li>
            <li v>
                accountNumber:
            </li>
        </ul>
    </div>
</template>