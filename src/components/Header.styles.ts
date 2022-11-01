import styled, { css } from "styled-components";

interface RadioProps {
  isActive: boolean;
}

export const SidebarContainer = styled.header`
  background-color: rgba(206, 71, 13, 0.432);
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 96px;

  border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 1.56rem 7rem;
  margin-left: 6rem;

  

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  // width: 30rem;
  // margin-top: 1.7rem;
  margin-left: 24rem;
  // gap: 100px;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

`;


export const IconUser = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  margin-left: 6rem;
`;


export const ButtonType = styled.button`
  display: flex;

  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  width: 50px;
  height: 50px;
  
  margin: 0 12rem 0 -6rem ;
  
  background-color: rgba(192,69,20,0.984);
  color: black;
  
  border-radius: 100rem;
  border: none;
  
  font-size: 15px;
  font-weight: bold;

`