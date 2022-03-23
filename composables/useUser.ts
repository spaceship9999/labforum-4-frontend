import { useUserStore } from '~/stores/useUserStore'
import { useProfileStore } from "~/stores/useProfileStore";
import usePageData from "~/composables/usePageData";

export default function() {
    const user = useUserStore();
    const profile = useProfileStore();
    const page_data = usePageData();
    const user_details = ref({});

    async function getUserDetails() {
        useNuxtApp().$axios.setHeader('Authorization', `Bearer ${user.token}`)
        const request = await useNuxtApp().$axios.get('/api/user/details')
        const result =  await request.data

        profile.$patch(result)
    }

    async function login(email, password) {
        const request = await useNuxtApp().$axios.post('/api/auth/login', {email: email.value, password: password.value})
        const result = await request.data

        user.$patch({
            username: result.username,
            token: result.access_token,
            token_type: result.token_type,
            expires_at: result.expires_at,
            loggedIn: true,
        })

        page_data.updateCategories()
        useNuxtApp().$axios.setHeader('Authorization', `Bearer ${result.access_token}`)

        //
    }

    async function logout() {
        const request = await useNuxtApp().$axios.get('/api/auth/logout');
        user.$patch({
            username: '',
            token: '',
            token_type: '',
            expires_at: '',
            loggedIn: false,
        })
        useNuxtApp().$axios.setHeader('Authorization', null)
        page_data.updateCategories()
        useNuxtApp().$router.push('/')
    }

    onMounted(() => {
        useNuxtApp().$axios.setHeader('Authorization', `Bearer ${user.token}`)
        page_data.updateCategories()
        if (user.loggedIn) {
            getUserDetails()
        }
    })

    return {
        user,
        getUserDetails,
        login,
        logout
    }
}
