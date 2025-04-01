import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Lesson11Container, Result } from "./styles";
import Input from "../../components/Input/Input";
import Product from "../../components/Product/ProductCard";

function Lesson11() {
    // стейт для хранения значения count
  const [count, setCount] = useState<number>(0);
  // стейт для отслеживания рендера
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  // стейт для контроля поля
  const [exampleValue, setExampleValue] = useState<string>("");
  // стейт для переключения видимости  карточки 
  const [showCard, setShowCard] = useState<boolean>(true);
  // let count = 0;

    const showHideCard = () => {
    setShowCard((prevValue) => !prevValue)
  }

  const changeExampleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setExampleValue(event.target.value);
  };

  //Mounting - пример использования useEffect, для выполнение действия при
  // первом рендере компонента
  //  useEffect(()=>{
  //     console.log('Mounting(first render)');
  //  }, [])
  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  //Mounting - пример использования useEffect, для выполнение действия при
  // изменении компонента
  useEffect(() => {
    if (!isFirstRender) {
      console.log("(change state count)");
    }
  }, [count]);

  useEffect(() => {
    console.log("input value changed");
  }, [exampleValue]);



  return (
    <Lesson11Container>
      <Result>{count}</Result>
      <Button
        name="Change"
        onClick={() => {
          setCount(10);
        }}
      />
      <Input
        name="example"
        value={exampleValue}
        onChange={changeExampleValue}
      />
     {showCard && <Product name="Apple" price={2} />}
      <Button name="show/hide card" onClick={showHideCard} />
    </Lesson11Container>
  );
}
export default Lesson11;
