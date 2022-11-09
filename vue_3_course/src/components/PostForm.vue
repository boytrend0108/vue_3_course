<!--This component only create post and send it outside-->
<template>
    <form class="form" @submit.prevent.default>
        <h2>New post</h2>
        <!-- Add post.title instead of title -->
        <input v-model="post.title" type="text" class="input" placeholder="Title">
        <input v-model="post.body" type="text" class="input" placeholder="Discription">
        <my-button class="btn-pf" @click="createPost">Create post</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now(); // add post.id (current date)
            this.$emit('create', this.post)
            this.post = {
                title: '',// clear input
                body: '',
            }
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.btn-pf {
    align-self: flex-end;
}
</style>