import React from "react";
import { Container } from './styles'
import logo from '../../../assets/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai';

// Header da página
const Header = ({visible}) => {
    return(
        // Container Principal
        <Container>
            {/* itens da Navegação */}
            <section>
                <img src={logo} alt="Logo Digitalk"/>
                <nav>
                    <a href="/teste">Home</a>
                    <a href="/teste">Produtos</a>
                    <a href="/teste">Sobre nós</a>
                    <a href="/teste">Contato</a>
                </nav>
            </section>

            {/* Menu mobile */}
            <section>
                <AiOutlineMenu onClick={() => visible(true)} className="mobile"/>
            </section>
        </Container>
    );
}

export default Header;