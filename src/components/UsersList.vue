<script setup>
    import defineProps from 'vue'

    const props = defineProps({
        users: Object
    });
    
</script>

<template>
    <b-card v-for="user in users" :key="user"
        :title="user.name"
        :img-src="user.avatar"
        img-alt="Image"
        img-top
        tag="user"
        style="max-width: 20rem;"
        class="mb-2"
    >


    </b-card>
    {{users}}
</template>