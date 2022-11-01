import { FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { User } from "phosphor-react";

import {
  ContentContainer,
  SidebarContainer,
  UserContainer,
  UserData,
  IconUser,
} from "./Header.styles";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import { ButtonType } from "./Header.styles";

interface SidebarProps {
  label: string;
}

export function Header({ label }: SidebarProps) {
  const { user, logout } = useContext(AuthContext);

  return (
    <SidebarContainer>
      <ContentContainer>
        <ButtonType onClick={logout}>Exit</ButtonType>
        {/* <Button width={50} height={50} label="Exit" onClick={logout} /> */}
        <h1>{label}</h1>
        <IconUser src="./src/imgs/user.png" alt=""></IconUser>
        <h2>{user?.name}</h2>
        <UserContainer>
          {/* <UserData> */}
          {/* <User size={32} /> */}
          {/* </UserData> */}
          <Link to={"/menu"}>
            <Button width={50} height={50} label="Back" />
          </Link>
        </UserContainer>
      </ContentContainer>
    </SidebarContainer>
  );
}
