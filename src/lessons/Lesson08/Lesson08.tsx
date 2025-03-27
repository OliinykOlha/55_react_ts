import './styles.css'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import Button from '../../components/Button/Button';
// все картинки в проекте уже экспортированы по умолчанию, чтобы добавить картинку
// в компонент нужно её просто импортировать(по умолчанию) и придумать псевдоним
import AvatarImg from '../../assets/avatar.jpg';
import Input from '../../components/Input/Input';
import { ChangeEvent, useState } from 'react';


function Lesson08() {

  const [message, setMessage] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {

      setMessage(event.target.value)
  }

const showMessageHandler = () => {
  setShowMessage(true)
}

  return (
    <div className="lesson08-container">

      <Input name='example' />
      <Input 
      name='message' 
      label='Message'
       id='message_id' 
       placeholder='Enter your message'
       value={message}
       onChange={onChangeMessage} />
       <Button name="Show message" onClick={showMessageHandler}/>
       {showMessage && <div>{message}</div>}
      {/* Если в компоненте используется prop children, то в таком случае
      компонент вызывается с использованием открывающего и закрывающего элемента,
      а между ними добавляются те JSX элементы, которые мы хотим подставить вместо children */}
      <EmployeeCard
        name='Mary Smith'
        position='Software Engineer'
        department='IT'
        img={AvatarImg}
      >
        <h3>The best employee</h3>
        <Button name='Show personal page'/>
      </EmployeeCard>
    </div>
  )
}
export default Lesson08;