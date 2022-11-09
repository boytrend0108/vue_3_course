<!--This component only create post and send it outside-->
<template>
    <form class="form" @submit.prevent.default>
        <h2>New post</h2>
        <!-- Add post.title instead of title -->
        <input v-model="post.title" type="text" class="input" placeholder="Title">
        <input v-model="post.body" type="text" class="input" placeholder="Discription">
        <button class="btn" @click="createPost">Create post</button>
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

.btn {
    align-self: flex-end;
    margin-top: 10px;
    padding: 10px 15px;
    background: teal;
    color: white;
    border: 1px solid teal;
    cursor: pointer;
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
}
</style>