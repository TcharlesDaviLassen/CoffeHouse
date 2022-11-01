import styled from "styled-components";

export const LoginBody = styled.body`

  background-color: #000000;
  // background-color: rgba(238, 231, 228, 0.884);
  // background-color: rgba(133, 92, 75, 0.884);
  // background-image: linear-gradient( to bottom right, rgb(87, 13, 172), rgb(0, 0, 0), rgb(0, 0, 0), rgb(98, 0, 255) );
  background-image: url("./src/imgs/coffeTable.jpg");

  background-size: 1900px;
  background-position: -1rem -35rem;
  width: 100vw;
  height: 100vh;
}
`;


export const MenuBar = styled.div`
background-color: rgba(20, 24, 22, 0.841);
}
`;


export const MenuUl = styled.ul`
  display: flex;
  margin-top: 10rem;
  margin-left: 15%;
}
`;

export const MenuLi = styled.li`
margin-left: 1rem
list-style: none;
margin-left: 2rem;
border-radius: 10px;
text-align: center;
padding-top: 35%;

// background-color: brown;
// background-color: rgba(165, 42, 42, 0.61);
background-color: rgba(192, 69, 20, 0.984);
// background-color: rgba(238, 231, 228, 0.884);

width: 10rem;
height: 10rem;

}
`;

export const IconBack = styled.h2`
display: flex;
width: 3rem;
margin-bottom: 1.5rem;
cursor: pointer;
padding-top: 1.5rem;
margin-left: 2rem;

a:hover{
  color: orange;
  }
  
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;

  }

}
`;

export const DesA = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: black;

}
`;

export const ButtonType = styled.button`
  display: inline;

  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  width: 3rem;
  height: 3rem;
  
  margin 3rem;
  
  background-color: rgba(192,69,20,0.984);
  color: black;
  
  border-radius: 100px;
  border: none;
  
  font-size: 15px;
  font-weight: bold;

`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -6rem;

`;


export const IconUser = styled.img`
  display: flex;
  width: 3rem;
  margin-left: 80%;
`;

export const H2User = styled.h2`
  display: flex;
  margin-left: 1%;
  
`;





