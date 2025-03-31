import styled from "@emotion/styled";

interface ProfileCardProps {
    vip?: boolean
}

export const Homework09Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 400px;
flex: 1;
padding: 60px;
 `

export const ProfileCard = styled.div<ProfileCardProps>`
display: flex ;
flex-direction: column;
align-items:center;
justify-content: center;
gap: 20px;
padding: 20px;
 width: ${({vip}) => vip? '600px' : '550px'} ;
 height: ${({vip}) => vip? '550px' : '500px'};
 font-size: 20px;
 background-color: ${({vip}) => vip? '#E169E1' : '#E0B4E0'} ;
 border-radius: 6px;
`;

export const Title = styled.h2`
font-size: 40px;
`

export const Description = styled.p`
 text-align: justify;
 padding-top: 30px;
`