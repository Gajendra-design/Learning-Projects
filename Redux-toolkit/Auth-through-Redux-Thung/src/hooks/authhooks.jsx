import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { loginAction } from "../features/auth/authActions"

export const useAuth = () => {
    const { register, handleSubmit } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()


    const handelLogin = (data) => {
        dispatch(loginAction(data))
    }

    return {
        register,
        handleSubmit,
        handelLogin,
        showPassword,
        setShowPassword
    }
}