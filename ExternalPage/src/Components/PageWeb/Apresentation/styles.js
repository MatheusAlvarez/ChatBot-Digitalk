import styled from 'styled-components';

// Container principal
export const Container = styled.div`
    background-color: #fff;
    height: 640px;
    width: 100%;
    position: relative;

    > section {
        width: 90%;
        padding: 64px;
        display: flex;
        justify-content: space-between;
        gap: 16px;
    }

    @media(max-width: 1300px){
        height: auto;

        > section {
            width: 100%;
        }
    }

    @media(max-width: 1000px){
        height: auto;

        > section {
            width: 100%;
            gap: 60px;
            flex-direction: column;
        }
    }

    @media(max-width: 700px) {
        > section {
            width: 95%;
            padding: 64px 0px 64px 16px;
            margin: 0;
            border: 0;
            padding-bottom: 40px;
            gap: 40px;
        }
    }
`;

// Container do Texto
export const ContainerTexto = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;

    @media(min-width: 1400px){
        margin-left: 5%;
    }

    > strong {
        font-size: 28px;
        font-family: 'Chivo', sans-serif;
        color: #7D3CE8;
        margin-top: 10%;
        display: block;
    }

    > h1 {
        font-size: 48px;
        font-family: 'Chivo', sans-serif;
        display: block;
        margin-bottom: 10px;
    }

    > p {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    span {
        color: #7D3CE8;
    }

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-right: 100px;
        gap: 24px;

        button {
            background: #7D3CE8;
            border-radius: 16px;
            color: #fff;
            padding: 13px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-weight: 600;
            font-size: 20px;
            height: 56px;
            width: 80%;
            margin-top: 20px;
            cursor: pointer;
            transition: 2s;

            &:hover{
                transition: 2s;
                background: #2e0470;
            }

        }
    }

    @media(max-width: 1360px) {
        max-width: 500px;
    }

    @media(max-width: 1000px) {
        max-width: 90%;

        > div {
            margin-right: 0px;
        }
    }

    @media(max-width: 700px) {
        > strong {
            font-size: 20px;
        }

        > h1 {
            font-size: 32px;
        }

        > p {
            font-size: 14px;
        }

        > div {
            grid-template-columns: 1fr;
        }
    }
`;

// Container da imagem do Robo
export const ContainerRobot = styled.div`
    display: flex;
    gap: 130px;
    height: 520px;
    align-items: center;
    justify-content: center;


    > section {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: space-between;

        > img {
            width: 500px;
        }

        > div {
            display: flex;
            gap: 16px;
            margin-top: 60px;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }

    @media(max-width: 700px) {
        height: 340px;
        gap: 0px;
        justify-content: space-around;

        > section {
            > img {
            width: 90%;
            margin-top: 0;
            }
        }
    }
`;