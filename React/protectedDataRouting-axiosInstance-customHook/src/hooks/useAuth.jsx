import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { MyStore } from "../Context/MyStore"

export const useAuth = () => {

    const navigate = useNavigate()

    const {
        register,
        reset,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onChange',
    })

    const { handelRegister,handelLogin } = useContext(MyStore)
    const password = watch('password')

    const onRegister = (data) => {
        const status = handelRegister(data)

        if (status) {
            navigate('/home')
            return
        }

        reset()
        return
    }

    const onLogin = (data)=>{
    const status =  handelLogin(data);

    if(status){
      navigate('/home');
      return 
    }

    reset();
    return 
  }


    return {
        navigate,
        register,
        password,
        onRegister,
        onLogin,
        handleSubmit,
        errors
    };
}