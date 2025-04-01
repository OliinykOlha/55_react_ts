import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { HomeWork11Container, Result } from "./styles";

function HomeWork11() {

    const [firstInput, setFirstInput] = useState<string>("");
    const [showCount, setShowCount] = useState<number>(0);

    const firstInputHandle = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstInput(event.target.value)
        }

    useEffect(() => {
        if (firstInput !=="") {
        setShowCount((prevValue) => prevValue + 1);
        }
    }, [firstInput]);

  return (
    <HomeWork11Container>
      <Input
        name="firstInput"
        label="First Input"
        type="text"
        value={firstInput}
        onChange={firstInputHandle}
      ></Input>
      <Input
        name="secondInput"
        label="Second Input"
        type="text"
        value=""
        onChange={()=> []}
      ></Input>
      <Result>Количество изменений первого Input {showCount}</Result>
    </HomeWork11Container>
  );
}

export default HomeWork11;
