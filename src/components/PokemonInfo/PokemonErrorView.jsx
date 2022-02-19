import ErrorImg from "../../icons/sadcat.jpg";
import { Cont, MessageError } from "./Pokemon.styled";
export default function PokemonError({ message }) {
  return (
    <Cont>
      <img src={ErrorImg} alt="sadcat" width="240" />
      <MessageError>{message}</MessageError>
    </Cont>
  );
}
