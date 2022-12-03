import React, { useState } from "react";
import Bot from "../Chat";
import { Button, ContainerMessage, Input, P } from "./style";
import { Container, ChatHeader, ChatBody, ButtonChat, TextVerification} from './style';

// Página principal do chat
const WelcomeWidget = () => {

    // Guardar o nome informado no input
    const [inputName, setInputName] = useState('');

    const [time, setTime] = useState(false);

    const [verification, setVerification] = useState('');

    // ----------------------- Controle do Display -----------------------
        
        // Vai armazenar o display do container principal
        const [displayContainer, setDisplayContainer] = useState('none');

        const [displayHeader, setDisplayHeader] = useState(''); 

        const [displayHeaderBot, setDisplayHeaderBot] = useState('none'); 

        // Vai armazenar o display do conteúdo de boas vindas
        const [displayBoasVindas, setDisplayBoasVindas] = useState('');

        // Vai armazer o display do botão que inicia o chat 
        const [displayButton, setDisplayButton] = useState('');
        
        // Vai armazer o display do botão que inicia o chat 
        const [displayBot, setDisplayBot] = useState('none');
    
    // ----------------------- Fim Controle do Display -----------------------

    // ----------------------- Funções ----------------------- 

        // Função para abrir o chat
        const openChat = () => {
            setDisplayContainer('');
            setDisplayBoasVindas('');

            setDisplayButton('none');
            setDisplayBot('none');
        };
        
        // Função para fechar o chat
        const closeChat = () => {
            document.location.reload(true);
        };

        // Função para entrar no chat
        const buttonContinue = () => {
            if(inputName === ""){
                setVerification('Informe seu nome!');
            }
            else{
                setDisplayButton('none');
                setDisplayBoasVindas('none');

                setDisplayHeader('none');
                setDisplayHeaderBot('');

                setTime(true);
                setDisplayBot('');
            };
        };

    // ----------------------- Fim Funções ----------------------- 

    return(
        <>
            {/* Container principal */}
            <Container displa={displayContainer}>
                {/* Header do Chat */}
                <ChatHeader displayHeader={displayHeader}>
                    <p>Chat Online</p>
                    <p onClick={() => closeChat()}>x</p>
                </ChatHeader>
                <ChatBody displayChat={displayBoasVindas}>
                    <ContainerMessage>
                        <h2>Bom dia! Você está falando com o atendimento eletrônico da Digitalk</h2>
                        <P>Nome:</P>
                        <Input 
                            type='text' 
                            name="nome" 
                            id="nome" 
                            placeholder=" Seu Nome" 
                            value={inputName} 
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <TextVerification>{verification}</TextVerification>
                        <Button onClick={() => buttonContinue()}>Continuar</Button>
                    </ContainerMessage>
                </ChatBody>
                <Bot display={displayBot} nome={inputName}  displayHeader={displayHeaderBot} time={time}/>
            </Container>
            {/* Botão para abrir o chat */}
            <ButtonChat onClick={() => openChat()} display={displayButton}>Chat Online</ButtonChat>
        </>
    );
};

export default WelcomeWidget;