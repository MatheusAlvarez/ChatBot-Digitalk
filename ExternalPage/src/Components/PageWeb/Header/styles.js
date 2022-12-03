import styled from "styled-components";

// CSS do container principal
export const Container = styled.header`
    width: 100%;
    background: #fff;
    padding-top: 15px;                  
    display: flex;
    align-items: center;                  
    justify-content: center;

    > section {
        display: flex;
        gap: 10rem;

        > img {
            width: 120px;
        }

        > nav {
            display: flex;
            gap: 1rem;
            padding-top: 5px;

            > a {
                font-size: 20px;
                position: relative;
                text-decoration: none;
                color: #000;

                &:before {
                    content: '';
                    width: 0%;
                    height: 2px;
                    border-radius: 50px;
                    bottom: 0px;
                    position: absolute;
                    background-color: #7D3CE8;
                    transition: .3s;
                }

                &:hover {
                    &:before {
                        width: 100%;
                    }
                }
            }
        }

        .mobile {
            display: none;
            padding-left: 20px;
        }

        @media(max-width: 900px) {
            .mobile {
              display: initial;
            }
            > nav {
              display: none;
            }
          }

    }

    @media(max-width: 700px) {
        padding-top: 15px;
      }

`;