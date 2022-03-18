import { useUserStore } from '~/stores/useUserStore'

export default function ({ $axios }) {
    const user = useUserStore()
    if (process.client && user.loggedIn) {
        $axios.setToken(user.access_token)
        console.log(133214)
    }
}