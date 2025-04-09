import { UsersWrapper, Title, StyledLink } from "./styles";

function Users () {
    return (
        <UsersWrapper>
            <Title>Users pages</Title>
            <StyledLink to='manager'>Manager</StyledLink>
            <StyledLink to='/users/designer'>Designer</StyledLink>
        </UsersWrapper>
    )
}

export default Users;