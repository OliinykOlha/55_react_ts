import { useNavigate } from 'react-router-dom';
import {FacebookWrapper, CompanyTitle, Description, ButtonWrapper} from './styles'
import Button from '../../../../components/Button/Button';

function Facebook () {
  const navigate = useNavigate();

  const goToPageAmazon = () => {
    navigate('/clients/amazon')
  }

  const goToPageMicrosoft = () => {
    navigate('/clients/microsoft')
  }


    return (
<FacebookWrapper>
<CompanyTitle>Facebook</CompanyTitle>
<Description>
  Facebook is a social media and social networking service owned by the American technology 
conglomerate Meta. Created in 2004 by Mark Zuckerberg with four other Harvard College students 
and roommates. Membership was initially limited to Harvard students, gradually expanding to other 
North American universities. 
   Since 2006, Facebook allows everyone to register from 13 years old, except in the case of a handful of
 nations, where the age requirement is 14 years. As of December 2023, Facebook claimed almost 3.07 
 billion monthly active users worldwide. As of November 2024, Facebook ranked as the third-most-visited 
 website in the world, with 23% of its traffic coming from the United States. It was the most downloaded
  mobile app of the 2010.
</Description>
<ButtonWrapper>
<Button name='Read about Amazon' onClick={goToPageAmazon} />
<Button name='Read about Microsoft' onClick={goToPageMicrosoft}/>
</ButtonWrapper>
</FacebookWrapper>
    )
}


export default Facebook;