import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { HomeWork11Container, Result } from "./styles";

function HomeWork11() {

    const [note, setNote] = useState<string>("");
    const [additNote, setAdditNote] = useState<string>("");
    const [countNoteChange, setCountNoteChange] = useState<number>(0);

    const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
        }

        const onAdditChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
          setAdditNote(event.target.value)
          }

    useEffect(()=>{
      if(note) {
      setCountNoteChange((prevValue) => prevValue + 1)
      }
    }, [note])

  return (
    <HomeWork11Container>
      <Input
        name="note"
        placeholder="Enter your note"
        label="First Input"
        type="text"
        value={note}
        onChange={onChangeNote}
      />
       <Result>Количество изменений в поле Note {countNoteChange}</Result>
      <Input
        name="note_additional1"
        placeholder='Enter your additional note'
        label="Second Input"
        type="text"
        value={additNote}
        onChange={onAdditChangeNote}
      />
    </HomeWork11Container>
  );
}

export default HomeWork11;
