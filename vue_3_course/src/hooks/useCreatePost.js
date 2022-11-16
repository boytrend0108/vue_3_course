
import { ref } from 'vue'
export default function useCreatePost(event) {
    const dialogVisible = ref(false)
    const showDialogVisible = () => {
        return dialogVisible.value = true
    }
    return { dialogVisible, showDialogVisible }
}