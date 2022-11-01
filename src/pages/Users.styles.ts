import styled from "styled-components";

export const UserBody = styled.body`

  // background-color: #000000;
  // background-image: url("./src/imgs/coffeTable.jpg");
  // background-size: 1900px;
  // background-position: -1rem -35rem;
  
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  // width: 100%;
  // height: 100%;

  

}
`;

export const DivBody = styled.div`
  width: 80%;
  height: 100%;
}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem 3rem 3rem;
`;


export const TagA = styled.a`
  flex-direction: row;
  text-decoration: none;

`;


export const ButtonType = styled.button`
  display: inline;

  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  width: 10rem;
  height: 3rem;
  
  margin 3rem;

  background-color: rgba(192,69,20,0.984);
  color: black;
  
  border-radius: 10px;
  border: none;
  
  font-size: 15px;
  font-weight: bold;

`;