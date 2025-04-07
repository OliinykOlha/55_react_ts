import axios from "axios";
import Button from "../../components/Button/Button";
import { ImageWrapper, Lesson13Container, Error } from "./styles";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson13() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const IMG_URL: string = "https://dog.ceo/api/breeds/image/random";

  const getImg = async () => {
    setError(undefined);
    try {
      setIsLoading(true);
      const response = await axios.get(IMG_URL);
      const newImage = response.data.message;
      setImages((prevImages)=>[...prevImages, newImage ]);

    } catch (error: any) {
      setError(error.message);

    } finally {
      setIsLoading(false);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); 
  }

  const deleteAllImages = () => {
    setImages([]);
  }

  useEffect(() => {
    getImg();
  }, []);

  useEffect(() => {
    if (query.trim() !=="") {
        getImg ()

    }}, [query]);

  return (
    <Lesson13Container>
      <Button name="GET MORE IMAGES" onClick={getImg} />
      {images.length > 0 && <Button name="DELETE ALL DATA" danger  onClick={deleteAllImages}/>}
      <Input name="Input" label="Введите запрос" value={query} onChange={onChangeInput} placeholder="Напишите что нибудь )"/>
      {isLoading? <Spinner/> : undefined} 
      {images.map(( image, index) => (<ImageWrapper src={image} key={index}  alt={`Dog image ${index}`}/>))}
      <Error>{error}</Error>
    </Lesson13Container>
  );
}

export default Lesson13
