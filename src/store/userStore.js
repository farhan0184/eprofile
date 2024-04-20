import { api } from "@/api";
import { axiosBase } from "@/hooks/axiosSecure";
import { apiUrl } from "@/lib/routes";
import axios from "axios";
import { Immer } from "immer";
import { toast } from "sonner";
import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

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

export const getUser = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('user') || null;
    } else {
        return null;
    }
};

export const useAuthStore = create(immer((set) => ({

    error: null,
    user: getUser(),

    setLogin: (data) => {
        // set(state=> {state.loading = true})
        localStorage.setItem('user', JSON.stringify(data))
        set((state) => {
            state.user = data;
        })
    },
    logout: () => {
        set((state) => {
            localStorage.removeItem('user');
            state.user = null;
        })
    }
})))

export const useProfileStore = create(immer(subscribeWithSelector((set) => ({
    error: null,
    loading: false,
    profileData: null,
    setUserProfile: async (formData) => {
        set((state) => { state.loading = true })
        try {
            const res = await axiosBase.post("/profile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.data.statusCode === 200) {
                toast.success(res.data.message, {
                    action: {
                        label: 'X',
                        onClick: () => console.log('Undo')
                    },
                })

            }
            set((state) => ({
                profileData: res.data.data,
                loading: false
            }))
            return res

        } catch (error) {
            set((state) => ({ error: state.error, loading: false }));
            console.log(error)
            // toast.error(error.message, {
            //     action: {
            //         label: 'X',
            //         onClick: () => console.log('Undo')
            //     },
            // })
            return
        }
    },
    updateProfile: async (formData, userId) => {
        // console.log(formData, userId)
        set((state) => { state.loading = true })
        try {
            const res = await axiosBase.put(`/profile/${userId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            // console.log(res)
            if (res.data.statusCode === 200) {
                toast.success(res.data.message, {
                    action: {
                        label: 'X',
                        onClick: () => console.log('Undo')
                    },
                })

            }
            set((state) => ({
                profileData: res.data.data,
                loading: false
            }))
            return res
        } catch (error) {
            set((state) => ({ error: state.error, loading: false }));
            console.log(error)
            // toast.error(error.message, {
            //     action: {
            //         label: 'X',
            //         onClick: () => console.log('Undo')
            //     },
            // })
            return
        }
    },
    getProfile: async (userId) => {
        set((state) => { state.loading = true })
        try {
            const res = await axiosBase.get(`/profile/${userId}`)
            if (res.data.statusCode === 200) {
                set((state) => {
                    state.profileData = res.data.data,
                        state.loading = false
                })

            }

        } catch (error) {
            set((state) => ({ error: error, loading: false }));
        }
    }

}))))


export const useCompanyStore = create(immer((set) => ({
    error: null,
    loading: false,
    companyData: null,
    getCompanies: async () => {
        set((state) => { state.loading = true })
        try {
            const res = await axiosBase.get("/companies/my-companies")
            set((state) => {
                state.companyData = res?.data?.data,
                state.loading = false
            })
            return res

        } catch (error) {
            set((state) => ({ error: error, loading: false }));
            return
        }
    }
})))




