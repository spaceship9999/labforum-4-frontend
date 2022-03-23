import { usePageDataStore } from '~/stores/usePageDataStore'

export default function() {
    const page_data_store = usePageDataStore()

    async function updateCategories() : Promise<void> {
        const category_api = await useNuxtApp().$axios.get('/api/category')
        page_data_store.setCategories(await category_api.data)
    }

    async function loadCategories(): Promise<void> {
        if (!page_data_store.categories.length) {
            await updateCategories()
        }
    }

    return {
        updateCategories,
        loadCategories,
    }
}