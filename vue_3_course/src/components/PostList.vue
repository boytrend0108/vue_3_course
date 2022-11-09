<!--This component  post posts -->
<template>
    <div>
        <h2>Users List</h2>
        <post-item v-for="post in posts" :post="post" />
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
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>