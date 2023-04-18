import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context";
import MyButton from "../components/UI/button/MyButton";
import UserService from "../API/user/UserService"
import '../styles/App.css';

function UserProfile() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const router = useHistory()
    const [userInfo, setUserInfo] = useState([])

    async function getInformationAboutUserById () {
        const response = await UserService.getAllInformationAboutUserByIDUser(isAuth);
        setUserInfo(response.data)
    }
    useEffect(() => {
        getInformationAboutUserById()
    }, [])

    return (
        
        <div className='block1'>
        <div className="App">
       
            <p class ="exserif">Личный кабинет</p>
            {userInfo.map((userInfo, index) =>
                <div className="Profile" key={index}>
                    <div><p class ="sma"><span>Логин: </span>{userInfo.user_login}</p></div>
                    <div><p class ="sma"><span>Email: </span>{userInfo.user_email}</p></div>
                    <div><p class ="sma"><span>Фамилия: </span>{userInfo.user_surname}</p></div>
                    <div><p class ="sma"><span>Имя: </span>{userInfo.user_name}</p></div>
                    <div><p class ="sma"><span>Отчество: </span>{userInfo.user_patronymic}</p></div>
                     <div><p class ="sma"><span>Станция метро: </span>{userInfo.metro_station_title }</p></div>  
                </div>
                
            )}
            
            <MyButton onClick={() => router.push("/my_bookshelf")}> Мои книги </MyButton>
            <MyButton onClick={() => router.push("/borrowed_books")}> Список одолженных книг </MyButton>
        </div> 
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default UserProfile;