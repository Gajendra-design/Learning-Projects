import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../state/authSlice";
import { useNavigate } from "react-router";

export const useAuth = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors },reset } = useForm({
        mode: 'onChange'
    })

    const [showPassword, setShowPassword] = useState(false)

    const dispath = useDispatch()

    const handelLogin = async (credentials) => {
       const data = await LoginApi(credentials)
       localStorage.setItem('accessToken',JSON.stringify(data.accessToken));
       dispath(addUser(data))
        reset();
        navigate('/main')
    }

    const handelLogout = ()=>{
        dispath(removeUser())
    }

    return {
        register,
        handleSubmit,
        errors,
        handelLogin,
        showPassword,
        setShowPassword,
        handelLogout
    }
}