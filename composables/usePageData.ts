import { usePageDataStore } from '~/stores/usePageDataStore'
import { useUserStore } from '~/stores/useUserStore'

export default function() {
    const page_data_store = usePageDataStore()

    async function updateCategories() : Promise<void> {
        page_data_store.loadCategories()
    }

    async function loadCategories(): Promise<void> {
        page_data_store.loadCategories()
    }


    return {
        updateCategories,
        loadCategories,
    }
}