import {createContext, useState, useEffect} from 'react';
import UserService from '../services/UserService';
// Used to manage application-wide state

// Fetch the user info, and store it in the context
// This context will be wrapped around all the components
// Context will be accessed by - Login Page, LogedIn Page and New Expenses Page 

const UserInfoContext = createContext(
    {
        users: [],
        totalUsers: 0,
    }
);

export function UserInfoContextProvider(props){
    // We will use the use effect to show the loading Function during fetchinv teh details form the DB
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    useEffect( () =>{
        // fetch(
        //     'https://weath-management-app-by-misha-default-rtdb.firebaseio.com/registratons.json'
        // ).then(
        //     response=>{
        //         return response.json()
        //     }
        // ).then(
        //     data=>{
        //         const user_info_list = []
        //         for (const key in data){
        //             const user_info  ={
                    
        //                 ...data[key]
        //             };
        //             user_info_list.push(user_info)
        //         }
        //         setIsLoading(false);
        //         setLoadedData(user_info_list)
        //     }
            
        // );

        // Since we need to wait for the data --that
        const fetchData = async () => {
            try{
                const response = await UserService.getUserList();
                setLoadedData(response.data);
            }
            catch(error){
                console.log(error)
            }
            setIsLoading(false);
        };
        fetchData();
    }
    , []);

    const context = {
    users: loadedData,
    totalUsers: loadedData.length,
    }

    if(isLoading){
        return(
            <section>LOADING....</section>
        )
    }
    else{
        return <UserInfoContext.Provider value ={context}>
            {props.children}
        </UserInfoContext.Provider>
    }

}


export default UserInfoContext;
