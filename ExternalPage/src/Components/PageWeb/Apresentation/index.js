import React from "react";

import { Container, ContainerTexto, ContainerRobot } from  './styles';
import imgRobo from '../../../assets/bot-pana.svg';

// Tela que vai trazer a apresentação
const Apresentation = () => {

    return(
        // Container principal
        <Container>
            {/* Section que vai armazenar a apresentação */}
            <section>
                {/* Lado esquerdo da apresentação */}
                <ContainerTexto>
                    <strong>Projeto de avaliação</strong>
                    <h1>Olá! Seja <span>bem-vindo</span> ao chat-<span>bot</span>.</h1>
                    <p>Primeiramente, gostaria de agradecer a <span>oportunidade</span>.</p>
                    <p>
                        O <span>desafio</span> proposto para este <span>projeto</span>, 
                        era a criação de uma página web. Nesta página, teríamos uma tela de boas vindas e um
                        <span> chat-bot</span>.
                    </p>
                    <div>
                        <button>
                            Continuar
                        </button>
                    </div>
                </ContainerTexto>
                {/* Lado direito da apresentação */}
                <ContainerRobot>
                    <section>
                        <img src={imgRobo} alt="Robô"/>
                    </section>
                </ContainerRobot>
            </section>
        </Container>
    );
}

export default Apresentation;
