import React, { useEffect, useState } from "react";
import dialog from "./dialog";
import {ChatBody, ChatInput, InputSec, MsgUser, MsgBot, ContainerUser, ChatHeader} from './style'

const Chat = (props) => {
    
    // ----------------------- Array Chat -----------------------
    
    const [arrayUser, setArrayUser] = useState([]); // Armazenar as mensagens do Usuário
    const [arrayBot, setArrayBot] = useState([]); // Armazenar as mensagens do Bot

    // ----------------------- Fim Array Chat -----------------------
    
    const [displayMsg, setDisplayMsg] = useState('none'); // Controle do display da mensagem

    const [seconds, setSeconds] = useState(0); // Controle do tempo

    const [qtdMsg, setQtdMsg] = useState(); // Quantidade de mensagem enviada

    useEffect(() => {
       if(props.time === true){
        // Primeiro Minuto
        if(seconds === 60){
            setQtdMsg(`${props.nome}, você enviou ${arrayUser.length} mensagens.`);
            setDisplayMsg('');
        };
        
        // Terceiro minuto
        if(seconds === 180){
            closeChat();
        };
        
        // Contagem dos segundos
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
       };
    });

    // Função para enviar a mensagem
    const send = () =>{
        let msgUser = document.getElementById("txtInput"); // Armazena o valor do input
        
        let msgBot = arrayBot; // Cria a conexão com o "arrayBot"

        let verification = 0; // Verificação na linha 61 

        for(var i = 0; i < dialog.length; i++){
            if(msgUser.value === dialog[i].user){
                verification = verification + 1;
                msgBot.push(dialog[i].bot);
            };
        };

        if(verification === 0){
            msgBot.push('Não entendi, tente usar outra coisa');
        };

        setArrayBot(msgBot);

        let pushValue = arrayUser;
        pushValue.push(msgUser.value);
        setArrayUser(pushValue);

        setSeconds(0); // Zerar a contagem

        setQtdMsg('');
        
        msgUser.value = ""; // limpar o input

        setDisplayMsg('none')
    }

    // Função para fechar o chat
    const closeChat = () => {
        document.location.reload(true);
    };

    return(
        <>
            {/* Header do chat  */}
            <ChatHeader displayHeader={props.displayHeader}>
                <p>Chat Online</p>
                <p onClick={() => closeChat()}>x</p>
            </ChatHeader>
            {/* Corpo do Chat (comunicação com o bot) */}
            <ChatBody displayChat={props.display}>
                <MsgBot>
                    Comandos: <br/>
                    - Olá   <br/>
                    - Hoje  <br/>
                    - Hora  <br/>
                </MsgBot>
                {arrayUser.map((array, idx) => {
                    return(
                        <>                        
                            <ContainerUser>
                                <MsgUser>{arrayUser[idx]}</MsgUser>
                            </ContainerUser>
                            <div>
                                <MsgBot>{arrayBot[idx]}</MsgBot>
                            </div>
                        </>
                    );
                })}
                {/* Informa a quantidade de mensagem */}
                <MsgBot displ={displayMsg}>{qtdMsg}</MsgBot>
                <p></p>
            </ChatBody> 
            {/* Input do chat */}
            <ChatInput displayInput={props.display}>
                <InputSec>
                    <input type="text" id="txtInput" placeholder="Digite aqui"/>
                </InputSec>
                <button onClick={() => send()}>Enviar</button>
            </ChatInput>
        </>
    );  
};

export default Chat;