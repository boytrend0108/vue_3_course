
import { ref } from 'vue'
export default function useDialogVisible() {
    const dialogVisible = ref(false)
    const showDialogVisible = () => {
        return dialogVisible.value = true
    }
    return { dialogVisible, showDialogVisible }
}