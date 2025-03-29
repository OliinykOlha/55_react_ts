import {CardInfo, CardWrapper, TextCardInfo, TitleCardInfo } from "./styles";

function HomeWork09 () {

    return (
        <CardWrapper>
        <CardInfo vip>
        <TitleCardInfo>VIP Пользователь</TitleCardInfo>
        <TextCardInfo>Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</TextCardInfo>
        </CardInfo>

         <CardInfo>
         <TitleCardInfo>Обычный Пользователь</TitleCardInfo>
         <TextCardInfo>Стандартный доступ, базовые функции и поддержка в порядке очереди.</TextCardInfo>
         </CardInfo>
         </CardWrapper>
    )
}


export default HomeWork09;