import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";

import { ContentContainer, DivContainer, Edit, Delete } from "./Card.styles";
import { Pencil, Trash,  } from "phosphor-react";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { User, UserModal } from "../modais/UserModal";
import { Environment } from "../modais/Auth/AxiosConnect";

interface CardProps {
  data: User;
}


export function Card({ data }: CardProps) {
  const MySwal = withReactContent(Swal);

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Editar Usuário</strong>,
      html: <UserModal closeModal={MySwal.close} userData={data} />,
      showConfirmButton: false,
    }).then(() => window.location.reload());
  };

  const deleteSwal =  async () =>  {
    console.log("id")
    
    await
    Swal.fire({
      title: 'Are you sure?',
      text: `You will not be able to reverse this if you delete ${data.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: ' #d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
      if (result.isConfirmed) {

          axios.delete(`${Environment.URL_BASE}/users/` + data.id)
              .then( async () => {
                await
                Swal.fire(
                    'Deleted!',
                    `User ${data.name} deleted`,
                    'success'
                    )
              }, (error) => {
                  Swal.fire(`Error to delete user: ${error.response.data.error} `);
              }).then(() => window.location.reload());
      };
  });
};


  return (
    <DivContainer>
      <ContentContainer>
        {/* IDS */}
        {/* <strong>{data.id}</strong> */} 

        <CardInfo title="Nome" data={data.name} />
        <CardInfo title="Email" data={data.email} />
        <CardInfo title="Idade" data={data.age} />
        <CardInfo title="Sexo" data={data.sex} />

        <Edit title="Editar" onClick={showSwal}>
          {<Pencil size={32} />}
        </Edit>

        <Delete title="Deletar" onClick={deleteSwal}>
          {<Trash size={32} />}
        </Delete>

      </ContentContainer>
    </DivContainer>
  );
}
