import styled from "styled-components";

export const LoginBody = styled.body`

background-color: #000000;
// background-image: url("./src/imgs/coffeTable.jpg");
background-repeat: no-repeat;

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
  width: 35rem;
  flex-direction: row;
  text-decoration: none;
  margin-left: 15%;
  margin-top: -3rem;

  position: relative;
  flex-wrap: wrap;
  align-items: center;


}
`;

export const MenuLi = styled.li`
margin-left: 1rem
list-style: none;
margin-left: 2rem;
margin-top: 100%;
border-radius: 10px;
text-align: center;
padding-top: 35%;

// background-color: brown;
// background-color: rgba(165, 42, 42, 0.61);
background-color: rgba(192, 69, 20, 0.984);
// background-color: rgba(238, 231, 228, 0.884);

width: 10rem;
height: 10rem;


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

export const IconBack = styled.img`
display: flex;
width: 3rem;
margin-bottom: 1.5rem;
cursor: pointer;
padding-top: 1.5rem;
margin-left: 2rem;

}
`;



