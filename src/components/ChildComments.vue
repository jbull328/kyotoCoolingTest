<script setup>
import { defineProps } from 'vue';

//eslint-disable-next-line no-unused-vars
const  props = defineProps({
    comments: Object,
    usersAll: Array
});

//eslint-disable-next-line no-unused-vars
function findUser(comment)  {
    return props.usersAll.find((user) => user.id === comment.userId)
}

</script>

<template>
    <div 
        v-for="comment in comments" 
        :key="comment"
        class="d-flex flex-column"
    >   
        <div>{{comment.message}}</div>
        <div>{{findUser(comment).name}}</div>
        
    </div>
</template>
