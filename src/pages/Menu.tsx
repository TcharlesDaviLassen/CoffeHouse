import { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { Button } from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";

import { LoginBody, MenuBar, IconBack, MenuUl, MenuLi } from "./Menu.styles";

export function Menu() {
  const { user, logout } = useContext(AuthContext);


  console.log(user?.name)
  return (
    <>
      <LoginBody>
        <IconBack src="./src/imgs/goBack.png" alt="" onClick={logout}></IconBack>
        {/* <MenuBar> */}

        <MenuUl>

          <Link style={{ textDecoration: 'none',  listStyleType: "none"}} to="/Users">
            <MenuLi>
              <Link to="/Users">Users</Link>
            </MenuLi>
          </Link>


          <Link style={{ textDecoration: 'none',  listStyleType: "none"  }} to="/Providers">
            <MenuLi>
              <div>
                <Link to="/Providers">Providers</Link>
              </div>
            </MenuLi>
          </Link>
        </MenuUl>

        {/* </MenuBar> */}
      </LoginBody>
    </>
  );
}
