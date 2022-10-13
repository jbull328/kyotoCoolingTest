<script setup>
    import defineProps from 'vue'

    defineProps({
        users: Array
    });
    
</script>

<template>
    <b-card v-for="user in users" :key="user"
        :title="user.name"
        img-alt="Avatar"
        tag="user"
        style="max-width: 20rem;"
        class="mb-2"
    >
    <b-avatar variant="info" :src="user.avatar"></b-avatar>
    <b-card-text>email: {{user.email}}</b-card-text>

    </b-card>
</template>