import { useState } from "react";
import axios from "axios";
import Button from "../../../components/Button/Button";
import { CatsFactsWrapper, HomeWork12Container, Error } from "./styles";
import Spinner from "../../../components/Spinner/Spinner";


function HomeWork12() {
const [fact, setFact] = useState<string | undefined>(undefined);
const [error, setError] = useState<string | undefined>(undefined);
const [isLoading, setIsLoading] = useState<boolean>(false);

  const CATS_FACTS_URL: string = "https://catfact.ninja/fact";

  const getFacts = async () => {

    setError(undefined);

    try {
        setIsLoading(true);
        const response = await axios.get(CATS_FACTS_URL);
       setFact(`${response.data.fact}`);
        
    } catch (error: any) {
         setError(error.message);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <HomeWork12Container>
      <Button name="GET MORE FACTS" onClick={getFacts} disabled={isLoading} />
      <CatsFactsWrapper>{isLoading? <Spinner/> :fact}</CatsFactsWrapper>
      <Error>{error}</Error>
    </HomeWork12Container>
  );
}

export default HomeWork12;
