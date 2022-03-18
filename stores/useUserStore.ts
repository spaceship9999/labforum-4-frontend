import {useNuxtApp} from "nuxt3/app";
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
        state: () => ({
            username: '',
            token: '',
            token_type: 'Bearer',
            expires_at: '',
            loggedIn: false,
        }),
        persist: true,
    }
)