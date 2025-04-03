import styled from "@emotion/styled";
import backImage from '../../../assets/Image2.jpg';

export const HomeWork12Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex: 1;
  padding: 60px;
  background-color: rgb(220, 217, 179);
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
`;

export const FactsWrapper = styled.div`
display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-width: 500px;
 min-height: 400px;
 padding: 30px;
 background-color: white;
 border-radius: 10px;
 font-size: 24px;
 color:rgb(220, 217, 179);
 font-weight: bold;
`
export const Error = styled.div`
color: red;
font-size: 25;
font-weight: bold;
`