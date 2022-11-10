<!--This component  post posts -->
<template>
    <div>
        <h2>Users List</h2>
        <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)">
        </post-item>
    </div>
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