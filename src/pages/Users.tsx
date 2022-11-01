import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { UserModal, User } from "../components/modais/UserModal";
import { Card } from "../components/UserCards/Card";
import { MainContainer } from "./Users.styles";
import { ButtonType, TagA, UserBody, DivBody } from "./Users.styles";

import { Environment } from "../components/modais/Auth/AxiosConnect";

export function Users() {
  const MySwal = withReactContent(Swal);
  const [userList, setUserList] = useState<User[]>([]);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    axios.get<User[]>(`${Environment.URL_BASE}/users`).then((response) => {
      setUserList(response.data);
    });
  }, [closeModal]);

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Create user</strong>,
      html: <UserModal closeModal={MySwal.close} />,
      showConfirmButton: false,
    }).then(() => setCloseModal(true));
  };

  return (
      <UserBody>

        <Header label="Users" />

        <MainContainer>
        {/* <DivBody> */}
          <Button label="Create Users" onClick={showSwal} />

          {userList.map((user) => {
            return <Card data={user} />;
          })}

          <div>
            <TagA href="http://localhost:3004/users/pdf" target="_BLANK">
              <ButtonType>Export PDF</ButtonType>
            </TagA>

            <TagA href="http://localhost:3004/users/csv" target="_BLANK">
              <ButtonType>Export CSV</ButtonType>
            </TagA>
          </div>

        {/* </DivBody> */}

        </MainContainer>
      </UserBody>
  );
}
