import axios from "axios";

import Button from "../../components/Button/Button";
import { Lesson12Container, JokeWrapper, Error } from "./styles";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function Lesson12() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
   setError(undefined);

    try {
      setIsLoading(true);
      const response = await axios.get(JOKE_URL);
      console.log(response.data);
      const data = response.data;
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    } finally {
      console.log("Результат получен");
      setIsLoading(false);
    }
  };

  useEffect(() => { getJoke() }, []);

  return (
    <Lesson12Container>
      <Button name="GET ANOTHER JOKE" onClick={getJoke} disabled={isLoading} />
      {/* {isLoading && <Spinner  />} */}
      <JokeWrapper>{isLoading? <Spinner/> : joke}</JokeWrapper>
      <Error>{error}</Error>
    </Lesson12Container>
  );
}

export default Lesson12;
