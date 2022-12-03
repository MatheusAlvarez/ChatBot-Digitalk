import React, { useEffect } from "react";

import { Container } from "./styles";
import { IoClose } from 'react-icons/io5';

// Menu responsivo
const MenuResponsive = ({menuVisible, setMenuVisible}) => {

    useEffect(() => {
        document.body.style.overflow = menuVisible ? 'hidden' : 'auto'; 
    }, [menuVisible]);
    
    return(
        // Container principal
        <Container visible={menuVisible}>
            {/* Ícone para fechar o menu */}
            <IoClose size={43} onClick={() => setMenuVisible(false)} />
            {/* Itens da navegação */}
            <nav>
                <a href="/teste">Home</a>
                <a href="/teste">Produtos</a>
                <a href="/teste">Sobre nós</a>
                <a href="/teste">Contato</a>
            </nav>
        </Container>
    );
};

export default MenuResponsive;
