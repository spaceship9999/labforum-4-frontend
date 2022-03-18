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
    }
})
