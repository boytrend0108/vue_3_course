<template>
    <div class="app">
        <!--Add component to html-->
        <post-form @create="createPost" />
        <post-list :posts="posts" @remove='removePost' />
    </div>
</template>

<script>
// @- allias thet refers tu src
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {// data and methods stay here couse they'll be used in diferent components

    components: {
        PostForm, PostList // add components to script
    },
    data() {
        return {
            posts: [
                { id: 1, title: "JavaScript", body: "Discription of JavaScript" },
                { id: 2, title: "JavaScript 2", body: "Discription of JavaScript 2" },
                { id: 3, title: "JavaScript 3", body: "Discription of JavaScript 3" }
            ],
        }
    },

    methods: {
        createPost(post) {// without post don't work push
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
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
</style>