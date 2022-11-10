<!--This component  post posts -->
<template>
    <div v-show="posts.length > 0">
        <h2>Posts List</h2>
        <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)">
        </post-item>
    </div>
    <h2 v-show="posts.length === 0" style="color: red">Posts list is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default { // export props
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            requierd: true
        }
    }
}

</script>

<!-- scoped - css apply in this component only -->
<style scoped>

</style>