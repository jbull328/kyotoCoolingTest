<script setup>
    import { defineProps, computed } from 'vue';
    // eslint-disable-next-line no-unused-vars
    import Comment from './Comment.vue';
    
    const  props = defineProps({
        comments: Array,
        users: Array
    });


    // eslint-disable-next-line no-unused-vars
    const onlyParentComments = computed(() => {
        let parentComments = [];
        
        if (props.comments) {
        props.comments.forEach((comment) => {
            if (comment.parentId === null) {          
                parentComments.push(comment)
            }
        }) 
       
        return parentComments
        }
        return []
    });

    // eslint-disable-next-line no-unused-vars
    function filterChildComments(parentComment) {
        const commentFilter = props.comments.filter(childComment => childComment.parentId === parentComment.id ) 
        return commentFilter
    }
    

</script>

<template>
    <div v-for="comment in onlyParentComments" :key="comment"> 
        <Comment 
            style="max-width: 70rem;"
            class="mb-2"
            :comment="comment" 
            :comments-all="comments"
            :users-all="users"
            :child-comments="filterChildComments(comment)"  
            :user="users.find((user) => user.id === comment.userId)"
        />
    </div>
</template>