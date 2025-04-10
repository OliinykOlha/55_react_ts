import { ChangeEvent, createContext, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { BlogManagementTitle, BlogManagementWrapper, ButtonContainer } from "./styles";
import Card from "../Card/Card";
import { BlogContextType } from "./types";

export const BlogManagementContext = createContext<BlogContextType>({
    postedMessage: "",
  });

function BlogManagement () {
const [message, setMessage] = useState<string|undefined>('');
const [postedMessage, setPostedMessage] = useState<string|undefined>('');

const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
setMessage(event.target.value)
}

const handlePost = () => {
setPostedMessage(message);
setMessage('');
}

    return (
        <BlogManagementContext.Provider value={{postedMessage}}>
        <BlogManagementWrapper>
            <BlogManagementTitle>My Blog</BlogManagementTitle>
            <Input name="message" label="New message" onChange={onChangeMessage}  value={message} />
            <ButtonContainer>
            <Button name="POST" onClick={handlePost} />
            </ButtonContainer>
            <Card />
        </BlogManagementWrapper>
        </BlogManagementContext.Provider>
    )
}

export default BlogManagement;