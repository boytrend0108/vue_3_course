// хук это переиспользуемая часть функционала которые мы будем выносить в отдельные файлы
import axios from 'axios';
import { ref, onMounted } from 'vue'
//this hook for downloading post from API
export default function usePosts(limit) {
    // create reactive variable
    const posts = ref([])
    const totalPage = ref(0)
    const isPostLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: { //-----for page rendering ...typicode.com/posts&_page=10&_limit= 5
                    _limit: limit, // show "this.limit" posts per page and ...
                    _page: 1,// download page number "this.page"
                }
            });
            // headers['x-total-count']  we lock in devtools -> Network -> headers
            totalPage.value = Math.ceil(response.headers['x-total-count'] / limit) //-----for page rendering
            posts.value = response.data;
        } catch (err) {
            alert(err)
        } finally {
            isPostLoading.value = false;//disappeare inscription 'Downloading...'    
        }
    }
    // when component we'll be mounted- run func 'fetching'...
    onMounted(fetching)

    return { //.. and return reactive variables
        posts, totalPage, isPostLoading
    }
};