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
        <form>
            <p style="padding-left: 10pt; padding-right: 10pt; text-align: center;">Current bank account: Dr. Blue's Savings Account</p>
                <label for="routingNumber">Routing Number:</label>
                <input type="text" id="routingNumber" name="routingNumber" required><br><br>

                <label for="accountNumber">Account Number:</label>
                <input type="text" id="accountNumber" name="accountNumber" required><br><br>
            </form>
            <button>Save Changes</button>
    </div>
</template>