import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
    state() {
        return {
            id: 0,
            username: '',
            role: [],
            email: '',
            register_date: '',
        }
    },
    actions: {
        async loadProfile() {
            const request = await useNuxtApp().$axios.get('/api/user/details')
            const result =  await request.data
            this.$patch(result)
        },
    }
})
