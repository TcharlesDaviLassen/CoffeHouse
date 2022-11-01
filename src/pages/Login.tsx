import { useContext, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import 
{ 
  InputsContainer, 
  LoginContainer, 
  LoginBody, 
  CoffeHouse, 
  Loginbackground, 
  LoginCenter 
} from "./Login.styles";

import { useForm, FormProvider } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const newLoginValidationSchema = zod.object({
  email: zod
    .string()
    .min(1, "Informe o seu email")
    .email("Informe um e-mail válido"),
  password: zod.string().min(1, "Informe a sua senha"),
});

type Login = zod.infer<typeof newLoginValidationSchema>;

export function Login() {
  const navigate = useNavigate();
  const { signIn, user } = useContext(AuthContext);
  const [errorLogin, setErrorLogin] = useState("");

  const methods = useForm<Login>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;

  async function handleSubmitLogin(data: Login) {

    const login = await signIn(data);
    console.log(login)
    if (login) {
      navigate("/menu");
    } else {
      setErrorLogin("Login e/ou senha incorreto(s)");
    }
  }

  // console.log(errorLogin);

  const { errors } = formState;

  return (
    <LoginBody>

      <LoginCenter>
        <Loginbackground>

          <LoginContainer>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleSubmitLogin)}>
                <img src="./src/imgs/xicara_de_cafe.png" alt="" />
                <h1>Login</h1>
                <InputsContainer>
                  <Input
                    width={176}
                    height={72}
                    label="Email"
                    id="email"
                    placeholder="Digite seu email"
                    errorMessage={errors.email?.message}
                    type="text"
                  />

                  <Input
                    label="Senha"
                    id="password"
                    placeholder="Digite sua senha"
                    width={176}
                    height={72}
                    errorMessage={errors.password?.message}
                    type="password"
                  />

                </InputsContainer>
                <Button label="Login" />
                <span>{errorLogin}</span>

                <CoffeHouse>CoffeHouse</CoffeHouse>
              </form>
            </FormProvider>
          </LoginContainer>

        </Loginbackground>
      </LoginCenter>

    </LoginBody>
  );
}
