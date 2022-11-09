<!--This component  post posts -->
<template>
    <div class="post" v-for="post in posts">
        <div><strong>Title:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
</template>

<script>
export default { // export props
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