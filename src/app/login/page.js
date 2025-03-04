"use client";

import { LoginContext } from "@/contexts/LoginContext";
import { useContext, useEffect, useState } from "react";
import Form from "./components/Form";
// import Text from "./components/Text";

export default function Login() {
  const { loguearse } = useContext(LoginContext);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:5000/usuarios");
      const data = await response.json();

      setUsuarios(data);
    };

    getData();
  }, []);

  //   const maroon =
  //     "The burgundy on my T-shirt when you splashed your wine into me And how the blood rushed into my cheeks, so scarlet, it was The mark you saw on my collarbone, the rust that grew between telephones The lips I used to call home, so scarlet, it was maroon";

  //   const mastermind =
  //     "No one wanted to play with me as a little kid So I've been scheming like a criminal ever since To make them love me and make it seem effortless This this the first time I've felt the need to coness And I swear I'm only cryptic and Machiavellian 'cause I care";

  return (
    <div className="d-flex justify-content-center align-items-center flex-row vh-80 gap-5">
      {/* <Text text={maroon} /> */}
      <Form loguearse={loguearse} usuarios={usuarios} />
      {/* <Text text={mastermind} /> */}
    </div>
  );
}
