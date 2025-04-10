import { useContext } from "react";
import { MessageData, MessageWrapper } from "./styled";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

function Message () {
    const {postedMessage} = useContext(BlogManagementContext);

    return (
        <MessageWrapper>
            <MessageData>{postedMessage}</MessageData>
        </MessageWrapper>
    )
}

export default Message