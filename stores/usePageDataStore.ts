import { defineStore } from 'pinia'

export const usePageDataStore = defineStore('pageDataStore', {
    state: () => {
        return {
            categories: [],
            posts: []
        }
    },
    actions: {
        setCategories(categories: Array<object>) {
            this.categories = categories
        },
        setPosts(cat_id: number, page: number, posts:Array<object>) {
            this.posts['cat_' + cat_id][page] = posts
        }
    }
})