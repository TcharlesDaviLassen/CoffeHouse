import styled, { css } from "styled-components";

interface RadioProps {
  isActive: boolean;
}

export const SidebarContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;

  border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.56rem 7rem;
  margin-right: 6rem;

  

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  margin-top: 1.6875rem;

  gap: 100px;
 

  a {
    text-decoration: none;
    background-color: green;
    font-size: 30px;
    border-radius: 10px;
    color: #fff;
    width: 6rem;
    text-align: center;

  }
  
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
  gap: 10px;
  width: 3rem;
  
`;