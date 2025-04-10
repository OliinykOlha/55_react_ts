import { ClientsWrapper, Title, StyledLink } from "./styles";

function Clients () {
    return (
        <ClientsWrapper>
            <Title>Clients</Title>
            <StyledLink to='/clients/facebook'>Facebook</StyledLink>
            <StyledLink to='/clients/amazon'>Amazon </StyledLink>
            <StyledLink to='/clients/microsoft'>Microsoft</StyledLink>
        </ClientsWrapper>
    )
}

export default Clients;