import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

// import { NameUser, UserIcon, LoginBody } from "./.styles";


export function Providers() {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            {/* <LoginBody>
                <NameUser>{user?.name}</NameUser> 
                <UserIcon src="./src/imgs/user.png" alt=""></UserIcon>
                
            </LoginBody> */}
        </>
    )
}