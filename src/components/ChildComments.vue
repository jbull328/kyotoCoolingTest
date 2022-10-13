<script setup>
import { defineProps } from 'vue';
//eslint-disable-next-line no-unused-vars
import Comment from './Comment.vue';

//eslint-disable-next-line no-unused-vars
const  props = defineProps({
    comments: Array,
    commentsAll: Array,
    usersAll: Array
});

//eslint-disable-next-line no-unused-vars
function findUser(comment)  {
    return props.usersAll.find((user) => user.id === comment.userId)
}

// eslint-disable-next-line no-unused-vars
function filterChildComments(parentComment) {
    const commentFilter = props.commentsAll.filter(childComment => childComment.parentId === parentComment.id ) 
    return commentFilter
}

</script>

<template>
      <b-card v-for="comment in comments" class="h-100" :key="comment" >
        <b-card-text class="vert-line mt-3 mb-4 h-100">
            <b-row>
                <b-col class="float-left">
                    <div >Comment: {{comment.message}}</div>
                    <div >By: {{findUser(comment).name}}</div>
            
                    <b-button v-b-toggle="`replies-${comment.id}`">Show Replies</b-button>
                </b-col>
            </b-row>
        </b-card-text>
        
        <b-collapse :id="`replies-${comment.id}`" >
            <b-card class="mt-2">
                <Comment 
                    v-for="commentInner in filterChildComments(comment)"
                    :key="commentInner"
                    :comment="commentInner" 
                    :comments-all="comments"
                    :users-all="users"   
                    :user="usersAll.find((user) => user.id === commentInner.userId)"
                />
            </b-card>
        </b-collapse>
    </b-card>
</template>
