import React, { useEffect, useState } from "react";
import MainPageContainer from "./MainPageContainer";


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
        Welcome to Drimiral!
        <MainPageContainer/>
    </div> );
}
 
export default MainPage;