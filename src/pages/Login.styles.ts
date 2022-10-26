import styled from "styled-components";


export const LoginBody = styled.body`

  background-color: #000000;
  background-image: url("./src/imgs/coffeTable.jpg");
  background-repeat: no-repeat;

  background-size: 1900px;
  background-position: -1rem -35rem;

  width: 100vw;
  height: 100vh;
}
`;

export const LoginCenter = styled.div`

top: 50%;
left: 50%;
position: fixed;
// transform: translate(-50%, -50%);
}
`;

export const Loginbackground = styled.div`

position: absolute;
transform: translate(-50%, -50%);

background-color: rgba(85, 30, 4, 0.582);
color: rgb(255, 255, 255);

text-align: center;

border-radius: 16px;
margin-top: -1px ;
}
`;


export const LoginContainer = styled.main`
  height: 100vh;
  // width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img{
    width: 6rem;
    margin-left: 8.5rem;
  }

  form {
    display: flex;
    flex-direction: column;

    // max-width: 26rem;
    gap: 32px;
    // margin-left: 70%;
    // margin-right: 30%;
  }

  input{
  width: 90%;
  height: 72px;
  border-radius: 10px;
  border: 1px solid #A0ACB3;
  padding: 24px;
  margin-left: 5%;

  }

  input:hover{
    width: 90%;
    height: 72px;
    border-radius: 10px;
    border: 1px solid #A0ACB3;
    padding: 24px;
    margin-left: 5%;

    background-color: rgb(198, 245, 228);
    
    }

  label {
    color: white;
    text-align: initial;
    margin-left: 5%;
  }

  button{
  width: 90%;
  height: 72px;
  font-size: 18px;
  border-radius: 10px;
  color: #fff;
  background-color:#db630c;;
  margin-left: 5%;
  border: none;
  }

  button:hover{
    width: 90%;
    height: 72px;
    font-size: 18px;
    
    border-radius: 10px;
    margin-left: 5%;
    
    // background-color: #430cdb;
    // background-color: orange;

    background-color: rgb(250, 97, 8);
    box-shadow: 0 0 1em rgb(250, 97, 8);

    
    color: #fff;
    border: none;

    cursor:pointer;
    }

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 32px;
  }

  span {
    color: red;
    
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CoffeHouse = styled.h1`
  font-size: 3rem;
  margin: 3px 6rem;

  color: #dfb29b;
`;

