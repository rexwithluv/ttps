import Tabla from "../components/Tabla";
import Form from "./components/Form";

export default function Usuarios() {
  return (
    <div>
      <Form />
      <Tabla endpoint={"usuarios"} />
    </div>
  );
}
