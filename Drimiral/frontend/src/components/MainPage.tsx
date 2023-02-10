import React, { useEffect, useState } from "react";
import { text } from "../lorem_ipsum"

export interface User {
    name: string;
    streak: number;
}

export interface MainPageProps {
    isLogged: boolean;
    user?: User;
}

const MainPage: React.FC<MainPageProps> = ({ isLogged }) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
      if (isLogged) setUser(user);
    
      return () => {
        
      }
    }, []);
    
    return ( 
    <div>
        Welcome to Main Page {user?.name}!
        {text}
    </div> );
}
 
export default MainPage;