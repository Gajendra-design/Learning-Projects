import { useEffect, useState } from "react";
import RegeisterForm from "./components/RegeisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  
  console.log(users);
  
  
  return(
    <div className="bg-black h-screen text-white flex justify-center items-center">
     {
        isLoggedIn?<LoginForm setIsLoggedIn = {setIsLoggedIn} users = {users} />:<RegeisterForm setIsLoggedIn = {setIsLoggedIn} setUsers = {setUsers} />
     }
    </div>
  )
}
export default App
