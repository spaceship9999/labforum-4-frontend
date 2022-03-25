import { defineStore } from 'pinia'
import {Cookie} from "tough-cookie";

export const useUserStore = defineStore('userStore', {
        state: () => ({
            username: '',
            token: '',
            token_type: 'Bearer',
            expires_at: '',
            loggedIn: false,
        }),
        persist: true,
        actions: {
            async login(email, password) {
                const page_data = usePageData()
                const request = await this.$nuxt.$axios.post('/api/auth/login', {email: email.value, password: password.value})
                const result = await request.data

                this.$patch({
                    username: result.username,
                    token: result.access_token,
                    token_type: result.token_type,
                    expires_at: result.expires_at,
                    loggedIn: true,
                })
                this.setAuthHeader()
                page_data.updateCategories()
                //
            },

            async logout() {
                const page_data = usePageData()
                await this.$nuxt.$axios.get('/api/auth/logout');
                this.$patch({
                    username: '',
                    token: '',
                    token_type: '',
                    expires_at: '',
                    loggedIn: false,
                })
                this.setAuthHeader()
                page_data.updateCategories()
                useNuxtApp().$router.push('/')
            },
            setAuthHeader() {
                if (this.token !== '') {
                    this.$nuxt.$axios.setHeader('Authorization', `Bearer ${this.token}`)
                }else {
                    this.$nuxt.$axios.setHeader('Authorization', null)
                }
            },
        },
        getters: {
            isLoggedIn(state) {
                return state.loggedIn
            }
        }
    }
)