import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../features/authSlice";

export const useAuth = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        mode: 'onChange'
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('registerUsers')) || [])
    const dispatch = useDispatch()


    const handelRegister = (data) => {
        console.log('in register');

        const update = [...users, data];
        localStorage.setItem('registerUsers', JSON.stringify(update));
        setUsers(update)
    }

    const handelLogin = (data) => {
        localStorage.setItem('currentUser',JSON.stringify(data));
        dispatch(addUser(data))
    }

    const logout = ()=>{
        dispatch(removeUser())
    }

    return {
        register,
        reset,
        errors,
        handelLogin,
        handelRegister,
        handleSubmit,
        navigate,
        showPassword,
        setShowPassword,
        logout
    }
}