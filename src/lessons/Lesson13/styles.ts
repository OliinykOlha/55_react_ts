import styled from '@emotion/styled';


export const Lesson13Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex: 1;
  padding: 60px;
  background-color: rgb(30, 143, 174);
  max-height: 700px; 
  overflow-y: auto;
 
`;

export const Image = styled.img`
 width: 300px;
 min-height: 300px;
 padding: 30px;
`;

export const Error = styled.div`
color: red;
font-size: 25;
font-weight: bold;
`;