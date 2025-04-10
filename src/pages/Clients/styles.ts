import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-color: rgb(112, 173, 214);
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: #07082e;
`;

export const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: #a4591f;
`;
