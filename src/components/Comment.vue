<script setup>
import { defineProps } from 'vue';
// eslint-disable-next-line no-unused-vars
import ChildComments from './ChildComments.vue';


 defineProps({
    comment: Object,
    childComments: Array,
    commentsAll: Array,
    usersAll: Array,
    user: Object
});


</script>

<template>
    <b-card class="h-100 text-left" >
        <b-card-text class="vert-line mt-3 pl-3 mb-4 h-100">
        
            <div class="pl-2">Comment: {{comment.message}}</div>
            <div class="pl-2" >By: {{user.name}}</div>
    
            <b-button v-if="childComments" class="mt-2 pl-2" v-b-toggle="`replies-${comment.id}`">Show Replies</b-button>    
                        
            <b-collapse :id="`replies-${comment.id}`" >
                <b-card class="mt-2">
                    <ChildComments :comments="childComments" :comments-all="commentsAll" :users-all="usersAll" />
                 </b-card>
             </b-collapse>
        
        </b-card-text>
    </b-card>
    
</template>

<style>
    .vert-line {
        border-left: 2px solid tan;
        height: 80px;
    }
</style>