<template>
    <div class="app">
        <!--Add component to html-->
        <h1>Post page</h1>
        <!-- <my-button @click="fetchPosts" style="margin-right: 10px;">Get posts</my-button> -->
        <my-button style="margin: 15px 0" @click="showDialog">Create post</my-button>
        <!--v-model connect show in MyDialog with dialogVisible in this page-->
        <my-dialog v-model:show="dialogVisible">
            <!--This use slot-->
            <post-form @create="createPost" />
        </my-dialog>
        <post-list :posts="posts" @remove='removePost' v-if="!isPostLoading" />
        <!--Preloader-->
        <my-preloader class="loader" v-show="isPostLoading">loading</my-preloader>
    </div>
</template>

<script>
// @- allias thet refers tu src
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {// data and methods stay here couse they'll be used in diferent components

    components: {
        PostForm, PostList // add components to script
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false
        }
    },

    methods: {
        createPost(post) {// without post don't work push
            this.posts.push(post);
            this.dialogVisible = false; //hide dialog window 
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;//appeare inscription 'Downloading...'
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (err) {
                alert(err)
            } finally {
                this.isPostLoading = false;//disappeare inscription 'Downloading...'    
            }
        }
    },
    mounted() {
        this.fetchPosts();//download post from server
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