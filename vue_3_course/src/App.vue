<template>
    <div class="app">
        <!--Add component to html-->
        <h1>Post page</h1>
        <!-- <my-button @click="fetchPosts" style="margin-right: 10px;">Get posts</my-button> -->
        <my-button style="margin: 15px 0" @click="showDialog">Create post</my-button>
        <!--v-model connect show in MyDialog with dialogVisible in this page-->
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list :posts="posts" @remove='removePost' v-if="!isPostLoading" />
        <!--Preloader-->
        <div class="loader">loading</div>
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

.loader {
    margin: 100px auto;
    font-size: 25px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load5 1.1s infinite ease;
    animation: load5 1.1s infinite ease;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

@-webkit-keyframes load5 {

    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #65abf8, 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.5), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.7);
    }

    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.7), 1.8em -1.8em 0 0em #65abf8, 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.5);
    }

    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.5), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.7), 2.5em 0em 0 0em #65abf8, 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.5), 2.5em 0em 0 0em rgba(101, 171, 248, 0.7), 1.75em 1.75em 0 0em #65abf8, 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.5), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.7), 0em 2.5em 0 0em #65abf8, -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.5), 0em 2.5em 0 0em rgba(101, 171, 248, 0.7), -1.8em 1.8em 0 0em #65abf8, -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.5), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.7), -2.6em 0em 0 0em #65abf8, -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.5), -2.6em 0em 0 0em rgba(101, 171, 248, 0.7), -1.8em -1.8em 0 0em #65abf8;
    }
}

@keyframes load5 {

    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #65abf8, 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.5), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.7);
    }

    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.7), 1.8em -1.8em 0 0em #65abf8, 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.5);
    }

    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.5), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.7), 2.5em 0em 0 0em #65abf8, 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.5), 2.5em 0em 0 0em rgba(101, 171, 248, 0.7), 1.75em 1.75em 0 0em #65abf8, 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.5), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.7), 0em 2.5em 0 0em #65abf8, -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.2), -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.5), 0em 2.5em 0 0em rgba(101, 171, 248, 0.7), -1.8em 1.8em 0 0em #65abf8, -2.6em 0em 0 0em rgba(101, 171, 248, 0.2), -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.5), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.7), -2.6em 0em 0 0em #65abf8, -1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2);
    }

    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(101, 171, 248, 0.2), 1.8em -1.8em 0 0em rgba(101, 171, 248, 0.2), 2.5em 0em 0 0em rgba(101, 171, 248, 0.2), 1.75em 1.75em 0 0em rgba(101, 171, 248, 0.2), 0em 2.5em 0 0em rgba(101, 171, 248, 0.2), -1.8em 1.8em 0 0em rgba(101, 171, 248, 0.5), -2.6em 0em 0 0em rgba(101, 171, 248, 0.7), -1.8em -1.8em 0 0em #65abf8;
    }
}
</style>