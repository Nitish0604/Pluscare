import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


//components parts
import Hero from '../Component/Hero';
import About from '../Component/About';
import StepPage from '../Component/StepPage';
import Footer from '../Component/Footer';
import ScheduleDoctor from '../Component/ScheduleDoctor';
import ChooseUs from '../Component/ChooseUs';


const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  }, {
    id: '1',
    message: 'Please write your username',
    trigger: '2'
  }, {
    id: '2',
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: "Hi {previousValue}, how can I help you?",
    trigger: '4'
  }, {
    id: '4',
    options: [
      { value: 1, label: 'Package Issue', trigger: '5' },
      { value: 2, label: 'Server Issue', trigger: '5' },
    ],
  }, {
    id: '5',
    message: 'Great! Please provide more details about the issue.',
    trigger: '6'
  }, {
    id: '6',
    user: true,
    trigger: '7',
  }, {
    id: '7',
    message: 'Thanks for providing the details. Can you please provide your email address?',
    trigger: '8',
  }, {
    id: '8',
    user: true,
    trigger: '9',
  }, {
    id: '9',
    message: 'Got it. Now, Please provide your phone number?',
    trigger: '10',
  }, {
    id: '10',
    user: true,
    trigger: '11',
  }, {
    id: '11',
    message: 'Thanks for providing your contact information. Our team will get in touch with you.',
    end: true,
  },
  // You can continue adding more steps based on your conversation flow
];

// const theme = {
// 	background: '#C9FF8F',
// 	headerBgColor: '#197B22',
// 	headerFontSize: '20px',
// 	botBubbleColor: '#0F3789',
// 	headerFontColor: 'white',
// 	botFontColor: 'white',
// 	userBubbleColor: '#FF5733',
// 	userFontColor: 'white',
// };

const theme = {
  background: '#e2fcd6',      // lightGreen
  headerBgColor: '#14967f',   // darkGreen
  headerFontSize: '20px',
  botBubbleColor: '#095d7e',  // blue
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#ccecee', // midBlue
  userFontColor: 'black',
};


const config = {
	botAvatar: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1706959492~exp=1706960092~hmac=b4b95d44e1eb395877492414036e62d436c3a51bb6f8930d968fbff8b3433743",
	floating: true,
};



const Home = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
      <Hero/>
      <About isLoggedIn={isLoggedIn}/>
      <StepPage isLoggedIn={isLoggedIn}/>
      <ChooseUs/>
      <ScheduleDoctor/>
      <Footer/>
      <div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="PlusBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
    </div>
  )
}

export default Home