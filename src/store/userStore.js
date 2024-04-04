import { api } from "@/api";
import { apiUrl } from "@/lib/routes";
import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initial = {
    error: null,
    loading: false
}

export const useUserStore = create((set) => ({
    ...initial,
    user: null,
    setUser: async (value) => {
        set(() => ({ loading: true }))
        try {
            axios.post(apiUrl, value)
            set((state) => ({
                user: value,
                loading: false,
            }));
        } catch (error) {
            set((state) => ({ error: error, loading: false }));
        }
    }
}))


const KEY = "isLogin";

export const getInitialLoggedIn = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(KEY) || false;
    } else {
        return null;
    }
};
export const useLoginStore = create((set) => ({
    ...initial,
    isLogin: getInitialLoggedIn(),
    user: null,
    setLoging: (values) => {
        set(() => ({ loading: true }))
        try {
            api.post('/auth/login', values)
                .then(res => {

                    localStorage.setItem(KEY, true);
                    set((state) => {
                        state.isLogin = true;
                        state.loading = false
                    });
                    toast.success(res.data.message, {
                        action: {
                            label: 'X',
                            onClick: () => console.log('X')
                        },
                    })
                    window.location.href = '/dashboard/profile'
                }

                ).catch(error => console.log(error))


        } catch (error) {
            set((state) => ({ error: error, loading: false }));
            toast.success(error, {
                action: {
                    label: 'X',
                    onClick: () => console.log('X')
                },
            })
        }
    },
    logout: async () => {
        set((state) => {
            localStorage.removeItem(KEY);
            state.isAdminLogin = false;
        })
    }

}))

export const useProfileStore = create(devtools((set) => ({
    ...initial,
    profile: {},
    setProfile: (values) => {
        set((state) => { state.loading = true })
        try {
            set((state) => ({
                profile: { ...state.profile, ...values },
                loading: false
            }))
        } catch (error) {
            set((state) => ({ error: error, loading: false }));
        }
    }

})))