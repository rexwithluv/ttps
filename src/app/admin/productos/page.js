import Tabla from "../components/Tabla";
import Form from "./components/Form";

export default function Productos() {
  return (
    <div>
      <Form />
      <Tabla endpoint={"productos"} />
    </div>
  );
}
