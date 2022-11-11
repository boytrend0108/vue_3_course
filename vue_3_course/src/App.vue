<template>
    <div class="app">
        <!--Add component to html-->
        <h1>Post page</h1>
        <div class="app__bnts">
            <!-- <my-button @click="fetchPosts" style="margin-right: 10px;">Get posts</my-button> -->
            <my-button style="margin: 15px 0" @click="showDialog">Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        </div>

        <!--v-model connect show in MyDialog with dialogVisible in this page-->
        <my-dialog v-model:show="dialogVisible">
            <!--This use slot-->
            <post-form @create="createPost" />
        </my-dialog>
        <post-list :posts="sortedPosts" @remove='removePost' v-if="!isPostLoading" />
        <!--Preloader-->
        <my-preloader class="loader" v-show="isPostLoading">loading</my-preloader>
    </div>
</template>

<script>
// @- allias thet refers tu src
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'// for API
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
            isPostLoading: false,
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: '- by name' },
                { value: 'body', name: '- by description' },
            ]
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
    },
    computed: {
        sortedPosts() {// sort posts
            // we deploy new array
            return [...this.posts]
                .sort((post1, post2) => post1[this.selectedSort]
                    ?.localeCompare(post2[this.selectedSort]))
        },
    },
    // // watch is an object
    // watch: {// functions in watch must have the same name as model, that anounced in component
    //     selectedSort(newValue) {// this func sort post by name or decription
    //         this.posts.sort((post1, post2) => {
    //             // this selectedSort is 'title ' or 'body'. We compare title1 and title2 or body
    //             //!!!! localeCompere don't work for id
    //             return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //         })
    //     },
    // }
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

.app__bnts {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    align-items: center;
}
</style>