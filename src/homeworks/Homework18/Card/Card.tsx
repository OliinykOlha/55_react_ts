import Message from "../Message/Message";
import { CardData, CardWrapper } from "./styled";

function Card () {
    return (
        <CardWrapper>
          <CardData>Oliinyk Olha</CardData>
          <Message />
        </CardWrapper>
      )
}

export default Card;