<template>
    <div>
        <!--Add component to html-->
        <h1>Post page</h1>
        <my-input v-focus v-model="searchQuery" placeholder="Seach..." />
        <div class="app__bnts">
            <my-button style="margin: 15px 0">Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
        <!-- v-model connect show in MyDialog with dialogVisible in this page -->
        <my-dialog v-model:show="dialogVisible">
            <!--This use slot-->
            <post-form />
        </my-dialog>
        <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
        <!--Preloader-->
        <my-preloader class="loader" v-show="isPostLoading">loading</my-preloader>
    </div>
    <!--(000)ref we use to get access to DOM element-->

</template>

<script>
// @- allias thet refers tu src
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import usePosts from '@/hooks/usePosts'
import useSortedPost from '@/hooks/useSortedPosts'
import useSortedAndSearchedPost from '@/hooks/useSortedAndSeachedPosts'

export default {// data and methods stay here couse they'll be used in diferent components
    components: {
        PostForm, PostList // add components to script
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [// array for dropdown list(MySelect)
                { value: 'title', name: '- by name' },
                { value: 'body', name: '- by description' },
            ],
        }
    },

    setup(props) {
        const { posts, totalPage, isPostLoading } = usePosts(5);// 5- it is 'limit'
        const { selectedSort, sortedPosts } = useSortedPost(posts)
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPost(sortedPosts)

        return {// to make the function available in the template
            posts,
            totalPage,
            isPostLoading,
            selectedSort,
            sortedPosts,
            searchQuery,
            sortedAndSearchedPosts
        }
    }
}
</script>

<style scoped>
.app__bnts {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    align-items: center;
}

.observer {
    height: 60px;
    background-color: aqua;
}
</style>