import { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { AuthContext } from "../contexts/AuthContext";

import { LoginBody, MenuBar, IconBack, MenuUl, MenuLi, DesA, IconUser, H2User, ButtonType, UserContainer } from "./Menu.styles";

export function Menu() {
  const { user, logout } = useContext(AuthContext);


  console.log(user?.name)
  return (
    <>
      <LoginBody>
        {/* <IconBack src="./src/imgs/goBack.png" alt="" onClick={logout}></IconBack> */}
        <ButtonType onClick={logout}>Exit</ButtonType>
        <UserContainer>
          <IconUser src="./src/imgs/user.png" alt=""></IconUser>
          <H2User>{user?.name}</H2User>
        </UserContainer>
        {/* <MenuBar> */}
        <MenuUl>

          <Link style={{ textDecoration: 'none', listStyleType: "none" }} to="/Users">
            <MenuLi>
              <DesA>Users</DesA>
            </MenuLi>
          </Link>


          <Link style={{ textDecoration: 'none', listStyleType: "none" }} to="/Providers">
            <MenuLi>
              <div>
                <DesA>Providers</DesA>
              </div>
            </MenuLi>
          </Link>
        </MenuUl>
        {/* </MenuBar> */}
      </LoginBody>
    </>
  );
}
