import axios from "axios";
import Button from "../../components/Button/Button";
import { ImageWrapper, Lesson13Container, Error } from "./styles";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const IMG_URL: string = "https://dog.ceo/api/breeds/image/random";

  const getImg = async () => {
    setError(undefined);
    try {
      setIsLoading(true);
      const response = await axios.get(IMG_URL);
      setImage(response.data.message);

    } catch (error: any) {
      setError(error.message);

    } finally {
      setIsLoading(false);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); 
  }

  useEffect(() => {
    if (query !=="") {
        getImg ()

    }}, [query]);

  useEffect(() => {
    getImg();
  }, []);

  return (
    <Lesson13Container>
      <Button name="Get More Images" onClick={getImg} />
      <Input name="Input" label="Введите запрос" value={query} onChange={onChangeInput} placeholder="Напишите что нибудь )"/>
      {isLoading? <Spinner/> : undefined} 
     <ImageWrapper src={image}/> 
      <Error>{error}</Error>
    </Lesson13Container>
  );
}

export default Lesson13
