import { useUserStore } from '~/stores/useUserStore'
import { useProfileStore } from "~/stores/useProfileStore";
import usePageData from "~/composables/usePageData";

export default function() {
    const user = useUserStore();
    const profile = useProfileStore();
    const page_data = usePageData();
    const user_details = ref({});

    user.setAuthHeader()


    if (user.isLoggedIn) {
        profile.loadProfile()
    }

    return {
        user,
    }
}
