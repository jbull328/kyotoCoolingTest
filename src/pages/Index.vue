<script setup>
    import { reactive } from 'vue';
    import axios from 'axios';

    const users = reactive('')
    const comments = reactive('')
        
    const getData = async function() {
        await axios.get('assets/users.json').then(response => (
            users.value = response
        ));
        await axios.get('assets/comments.json').then(response => (
            comments.value = response
        )); 
    };

    getData();

</script>

<template>
    <div class="container">
        <b-tabs content-class="mt-3">
            <b-tab title="Users" active><UsersList :users="users"/></b-tab>
            <b-tab title="Comments" ><p>This will be Comments</p></b-tab>
        </b-tabs>
        Why {{users}}
    </div>
</template>

<style>

</style>