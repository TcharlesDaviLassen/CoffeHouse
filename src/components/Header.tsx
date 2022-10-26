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

interface SidebarProps {
  label: string;
}

export function Header({ label }: SidebarProps) {
  const { user, logout } = useContext(AuthContext);

  return (
    <SidebarContainer>
      <ContentContainer>
        <h1>{label}</h1>
        <UserContainer>
          <UserData>
            {/* <User size={32} /> */}
            <IconUser src="./src/imgs/user.png" alt=""></IconUser>
            <strong>{user?.name}</strong>
          </UserData>
          {/* <Button width={100} height={50} label="Voltar" onClick={logout} /> */}
          <Link to={"/"}>
          <a href="">Voltar</a>
          </Link>
        </UserContainer>
      </ContentContainer>
    </SidebarContainer>
  );
}
