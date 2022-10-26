// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";


// import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
// import { Box } from '@mui/system';

// import { NameUser, UserIcon, LoginBody, IconBack } from "./Users.styles";

// export function Users() {
//     const { user } = useContext(AuthContext);

//     return (
//         <>
//             <LoginBody>
//                 <div>
//                     <a href="/">
//                         <IconBack src="./src/imgs/goBack.png" alt="Image Back"></IconBack>
//                     </a>

//                     <div>
//                         <UserIcon src="./src/imgs/user.png" alt=""></UserIcon>
//                         <NameUser>{user?.name}</NameUser>
//                     </div>
//                 </div>

//             </LoginBody>
//         </>
//     )
// }

import { Header } from "../components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserModal, User } from "../components/modais/UserModal";
import { MainContainer } from "./Users.styles";
import { Button } from "../components/Button";
import { Card } from "../components/UserCards/Card";

export function Users() {
  const MySwal = withReactContent(Swal);
  const [userList, setUserList] = useState<User[]>([]);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    axios.get<User[]>("http://localhost:3000/users").then((response) => {
      setUserList(response.data);
    });
  }, [closeModal]);

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Criar usuário</strong>,
      html: <UserModal closeModal={MySwal.close} />,
      showConfirmButton: false,
    }).then(() => setCloseModal(true));
  };

  return (
    <div>
      
      <Header label="Usuários" />

      <MainContainer>
        <Button label="Criar Usuário" onClick={showSwal} />
        {userList.map((user) => {
          return <Card data={user} />;
        })}
      </MainContainer>
    </div>
  );
}
