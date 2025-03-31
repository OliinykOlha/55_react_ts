import {ProfileCard, Homework09Container, Title, Description } from "./styles";

function HomeWork09 () {

    return (
        <Homework09Container>
        <ProfileCard vip>
        <Title>VIP Пользователь</Title>
        <Description>Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</Description>
        </ProfileCard>

         <ProfileCard>
         <Title>Обычный Пользователь</Title>
         <Description>Стандартный доступ, базовые функции и поддержка в порядке очереди.</Description>
         </ProfileCard>
         </Homework09Container>
    )
}


export default HomeWork09;