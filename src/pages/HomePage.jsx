import { WelcomePicture, WelcomeTitle } from './pagesStyles/homePage.styled';
import img from '../service/images/phone-book.webp';

const Home = () => {
  return (
    <>
      <WelcomeTitle>Welcome to the amazing Phonebook app!</WelcomeTitle>
      <WelcomePicture src={img} alt="phonebook" />
    </>
  );
};

export default Home;
