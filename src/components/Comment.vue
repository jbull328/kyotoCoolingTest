<script setup>
import { defineProps, ref, props } from 'vue';
// eslint-disable-next-line no-unused-vars
import ChildComments from './ChildComments.vue';
// eslint-disable-next-line no-unused-vars
import Comment from './Comment.vue';

 defineProps({
    comment: Object,
    childComments: Array,
    commentsAll: Array,
    usersAll: Array,
    user: Object
});


// eslint-disable-next-line no-unused-vars
const showReplies = ref(false)

// eslint-disable-next-line no-unused-vars
function filterChildComments(parentComment) {
    const commentFilter = props.commentsAll.filter(childComment => childComment.parentId === parentComment.id ) 
    return commentFilter
}



</script>

<template>
    <div class="vert-line mt-3 mb-4 ">
        <div class="">
            <div >Comment: {{comment.message}}</div>
            <div >By: {{user.name}}</div>
           
            <b-button @click="showReplies = !showReplies">Show Replies</b-button>
                
            
        </div>
        
        <ChildComments v-if="showReplies" class="flex-grow-1" :comments="childComments" :users-all="usersAll" />
    </div>
</template>

<style>
    .vert-line {
        border-left: 2px solid tan;
        height: 80px;
    }
</style>