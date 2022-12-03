import React, { useState } from "react";

import Apresentation from "../../Components/PageWeb/Apresentation";
import Header from "../../Components/PageWeb/Header";
import MenuResponsive from "../../Components/PageWeb/MenuResponsive";

import WelcomeWidget from "../../Components/ChatBot/WelcomeWidget";

// 
const Home = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return(
        <>
        {/* Menu responsivo */}
        <MenuResponsive
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
        /> 
        {/* Componente Header (Não responsivo) */}
        <Header visible={setMenuVisible} />
        {/* Componente boas vindas */}
         <Apresentation />
        {/* Componente Chat */}
        <WelcomeWidget />
    </>
    );
}

export default Home;