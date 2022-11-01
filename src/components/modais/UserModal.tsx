import { FormProvider, useForm } from "react-hook-form";
import { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Swal from "sweetalert2";
import { Input } from "../Input";
import { Button } from "../Button";
import { Environment } from "./Auth/AxiosConnect";
import { DivContainer, ItemsFormContainer } from "./UserModal.styles";

interface UserModalProps {
  closeModal: Function;
  userData?: User;
}

const newUserValidationSchema = zod.object({
  name: zod.string().min(1, "Informe um nome válido"),
  email: zod
    .string()
    .min(1, "Informe a sua senha"),
  // .email("Informe um e-mail válido"),
  password: zod.string().min(3, "Sua senha deve conter 3 digitos"),
  age: zod.any(),
  sex: zod.string(),
});

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  sex: string;
};

export function UserModal({ closeModal, userData }: UserModalProps) {
  const methods = useForm<User>({
    resolver: zodResolver(newUserValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: undefined,
      sex: "",
    },
  });

  const { handleSubmit, formState, setValue } = methods;

  console.log(formState);

  useEffect(() => {
    if (userData) {
      const name = userData.name.toUpperCase();
      const genero = userData.sex.toUpperCase();
      setValue("name", name);
      setValue("email", userData.email);
      setValue("password", userData.password);
      setValue("age", userData.age);
      setValue("sex", genero);
    }
  }, [userData]);

  const { errors } = formState;

  async function handleCrateNewUser(data: User) {
    console.log(data)
    console.log("acessou");

    try {
      console.log("userData");
      console.log(userData);

      if (userData) {
        console.log("acessou");
        console.log(data)

        const nameUpper = data.name.toUpperCase();
        const genero = data.sex.toUpperCase();
        await axios.put(`${Environment.URL_BASE}/users/${userData.id}`, {
          name: nameUpper,
          email: data.email,
          password: data.password,
          age: data.age,
          sex: genero,
        });

        closeModal();
        toast.success("Usuário Editado com sucesso");
        // console.log("Page initial is" + window.location.pathname);

      } else {
        const nameUpper = data.name.toUpperCase();
        const genero = data.sex.toUpperCase();
        await axios.post(`${Environment.URL_BASE}/users`, {
          name: nameUpper,
          email: data.email,
          password: data.password,
          age: data.age,
          sex: genero,
        });

        toast.success("Usuário Criado com sucesso");
        closeModal();
      }
    } catch (error) {
      toast.error("Erro ao criar usuário");
    }

  }

  return (
    <DivContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleCrateNewUser)}>
          <Input label="Nome" id="name" errorMessage={errors.name?.message} />
          <Input
            label="Email"
            id="email"
            errorMessage={errors.email?.message}
          />
          <Input
            label="Senha"
            id="password"
            errorMessage={errors.password?.message}
          />
          <Input label="Idade" id="age" errorMessage="" />
          <Input label="Sexo" id="sex" errorMessage={errors.sex?.message} />

          <Button label="Enviar Dados" />
        </form>
      </FormProvider>
    </DivContainer>
  );
}
