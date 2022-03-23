import {useUserStore} from "~/stores/useUserStore";

export default async function ({ $pinia }) {
    if (process.server) {
        const userStore = useUserStore($pinia)
        console.log(userStore.token + "1")
    }
}