import styled from "styled-components";


// CSS do ChatBody
export const ChatBody = styled.div`
  height: 330px;
  display: ${props => props.displayChat ? props.displayChat : ""};
  flex-direction: column;
  padding: 0px 10px;
  align-items: flex-start;
  overflow-y: auto;
`;

export const ChatInput = styled.div`
  height: 60px;
  display: ${props => props.displayInput ? props.displayInput : "flex"};
  align-items: center;
  border-top: 1px solid #ccc;

  > button{
    border-radius: 20px;
    margin-right: 5px;
    height: 25px;
    background-color: #7D3CE8;
    border: none;
    color: #fff;
    padding: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    cursor: pointer;
  
    &:hover{
      background-color: #5b1ebe;
    }
  
  }
`;

export const InputSec = styled.div`
  flex: 9;

  > input{
    line-height: 30px;
    padding: 8px 10px;
    border: none;
    outline: none;
    caret-color: black;
    font-size: 1rem;
    width: 100%;
  }
`;

export const Send = styled.div`
  flex: 1;
  padding-right: 4px;
`;


// CSS do Header do chat
export const ChatHeader = styled.div`
  height: 60px;
  align-itens: center;
  padding: 0px 2px;
  display: ${props => props.displayHeader ? props.displayHeader : "flex"};
  background-color: #7D3CE8;
  font-size: 1.5rem;
  justify-content: space-between;

  > h2{
    padding-left: 10px;
  }

  > p{
    color: #fff;
    margin: 3%;
    cursor: pointer;

    :hover{
      color: #f8f8f8;
    }
  }
`;

export const MsgUser = styled.div`
  background-color: #7D3CE8;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  text-align: right;
  width: 70%;
  margin-top: 8px;
  justify-content: rigth;
`;

export const MsgBot = styled.div`
  background-color: #8a8a8a;
  color: #fff;
  margin-top: 8px;
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  width: 70%;
  justify-content: rigth;
  display: ${props => props.displ ? props.displ : "flex"};
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: flex-end
`;