import { api } from "../../../config/axiosInstance"
import { addUser } from "../state/authSlice"

export const LoginApi = async (credentials) => {
    try {
        const response = await api.post(`/auth/login`, credentials)
        return response.data
    } catch (error) {
        console.log('login api error', error);

    }
}

export const hydrateApi = async (dispath) => {

    const accessToken = JSON.parse(localStorage.getItem('accessToken'))

    try {
        if (accessToken) {
            //yaha pe access token se info nikalni haihumko
            const user = await api.get('/auth/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            dispath(addUser(user.data))
        }
    } catch (error) {
        console.log('error in hydration api', error);

    }


}