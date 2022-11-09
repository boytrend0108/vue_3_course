<template>
    <div class="app">
        <form class="form" @submit.prevent.default>
            <h2>New post</h2>
            <input v-model="title" type="text" class="input" placeholder="Title">
            <input v-model="body" type="text" class="input" placeholder="Discription">
            <button class="btn" @click="createPost">Create post</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Title:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: "JavaScript", body: "Discription of JavaScript" },
                { id: 2, title: "JavaScript 2", body: "Discription of JavaScript 2" },
                { id: 3, title: "JavaScript 3", body: "Discription of JavaScript 3" }
            ],
            title: '',
            body: '',
        }
    },

    methods: {
        createPost(event) {// without event don't work push
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = '';// clear input
            this.body = '';
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

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