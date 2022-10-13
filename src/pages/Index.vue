<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    // eslint-disable-next-line no-unused-vars
    import UsersList from '../components/UsersList.vue'
    // eslint-disable-next-line no-unused-vars
    import CommentsList from '../components/CommentsList.vue'

    const users = ref('')
    const comments = ref('')
        
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
            <b-tab title="Users" active><UsersList :users="users.data"/></b-tab>
            <b-tab title="Comments" ><CommentsList :comments="comments.data" :users="users.data"/></b-tab>
        </b-tabs>
    </div>
</template>

<style>

</style>