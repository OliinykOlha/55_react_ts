import styled from "@emotion/styled";

interface CardInfoProps {
    vip?: boolean
}

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
 `

export const CardInfo = styled.div<CardInfoProps>`
justify-content: center;
margin-top: 20px;
padding: 20px;
 width: ${({vip}) => vip? '300px' : '250px'} ;
 height: 300px;
 font-size: 20px;
 background-color: ${({vip}) => vip? '#E169E1' : '#E0B4E0'} ;
 border-radius: 10px;
`;

export const TitleCardInfo = styled.h2`
text-align: center;
`

export const TextCardInfo = styled.p`
 text-align: justify;
 padding-top: 30px;
`