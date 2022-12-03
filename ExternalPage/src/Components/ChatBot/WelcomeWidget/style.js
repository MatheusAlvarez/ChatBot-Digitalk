import styled from "styled-components";

// CSS do Container
export const Container = styled.div`
  height: 450px;
  width: 330px;
  display: ${props => props.displa ? props.displa : ""};
  background: #fff;
  position: fixed;
  bottom: 50px;
  right: 10px;
  box-shadow: 0px 0px 15px 0px #000;

  @media (max-width: 699px) {
    width: 300px;
  }

  @media (max-width: 415px) {
    height: 100%;
    width: 100%;
    bottom: 1px;
    right: 0px;
  }

  > div{
    color: #000;
  }

  > button {
    width: 50%;
    display: inline;
    height: 50px;
    background-color: #7D3CE8;
    border: none;
    cursor: pointer;


    &:last-child{
      background-color:#fff;
    }
  }
`;

// CSS do Botão para abrir o chat
export const ButtonChat = styled.button`
  height: 8%;
  width: 10%;
  display: ${props => props.display ? props.display : ""};
  background: #7D3CE8;
  position: fixed;
  bottom: 50px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  border: none;
  color: #fff;
  box-shadow: 0px 0px 5px 0px #000;
  transition: 1s;

  @media (max-width: 1200px) {
    width: 16%;
    font-size: 16px;
    height: 10%;
  }

  @media (max-width: 699px) {
    width: 30%;
    font-size: 16px;
  }

  &:hover{
    background: #5b1ebe;
  }
`;

// CSS do ChatBody
export const ChatBody = styled.div`
  height: 330px;
  display: ${props => props.displayChat ? props.displayChat : "flex"};
  flex-direction: column;
  padding: 0px 10px;
  align-items: flex-start;
  overflow-y: auto;

  @media (max-width: 415px) {
    height: 400px;
    width: 100%;
  }

`;

// CSS do Header do chat
export const ChatHeader = styled.div`
  height: 60px;
  display: ${props => props.displayHeader ? props.displayHeader : "flex"};
  align-itens: center;
  padding: 0px 2px;
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

// CSS do ContainerMessage
export const ContainerMessage = styled.div`
  > h2{
    font-size: 18px;
    display: ${props => props.display ? props.display : ""};
  }
`;

// CSS do P
export const P = styled.p`
  margin: 0;
  font-size: 14px;
  color: #474646;
  display: ${props => props.displayP ? props.displayP : ""};
`;

// CSS do Input
export const Input = styled.input`
  margin-top: 5px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #474646;
  outiline: none;
  padding-left: 5px;
  width: 90%;
  font-size: 15px
  display: ${props => props.displayInp ? props.displayInp : ""};
`;

// CSS do Button
export const Button = styled.button`
  margin-top: 20%;
  margin-left: 7px;
  height: 50px;
  width: 95%;
  align-itens: center;
  justify-content: center;
  text-align: center;
  border: none;
  background-color: #7D3CE8;
  color: #fff;
  cursor: pointer;
  display: ${props => props.displayB ? props.displayB : ""};
  &:hover{
    background: #5b1ebe;
  }

  @media (max-width: 415px) {
    margin-letf: 0px;
    width: 90%;
  }

  `;
  
  // CSS do ContainerMessage
  export const TextVerification = styled.p`
    color: red;
    text-align: center;
  `;