import { defineStore } from 'pinia'
import { useNuxtApp } from "nuxt3/app";
import {useUserStore} from "~/stores/useUserStore";

export const usePageDataStore = defineStore('pageDataStore', {
    state: () => {
        return {
            categories: [],
            posts: []
        }
    },
    actions: {
        async loadCategories() {
            var cat = await this.$nuxt.$axios.get('/api/category')
            this.categories = await cat.data
        },
        setCategories(categories: Array<object>) {
            this.categories = categories
        },
        setPosts(cat_id: number, page: number, posts:Array<object>) {
            this.posts['cat_' + cat_id][page] = posts
        }
    },
    getters: {
        getCategories(state) {
            return state.categories
        }
    }
})