import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import '../ChatBot/chat.css';
import { ThemeProvider } from 'styled-components';
import img from "../../img/download.png"
import { Gradient } from 'react-gradient';
import { Link } from 'react-router-dom';
import ContactLink from '../ContactLink';
import SinglePost from '../SinglePost/SinglePost'



class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const config ={
  width: "400px",
  height: "500px",
  floating: true,
  marginBottom: "3rem",
  botAvatar: img,
  // avatarStyle : border
};
let gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#F40000',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#F40000',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  
}

class SimpleForm extends Component {
  render() {
    return (

      <ThemeProvider theme={theme} style= {{marginBottom: '5rem'}}>
      <ChatBot 
        
        steps={[
          {
            id: '1',
            message: 'Hello Sir/Mam, Welcome to our Krishi Arot, How may I help you ?',
            trigger: 'option',
          },
          // {
          //   id: '3',
          //   message: 'Sir!,Mr./Ms. {previousValue}, Are you a Buyer or Seller?',
          //   // options: [
          //   //   { value: 'Updated Price', label: 'Updated Price', trigger: 'gender' },
          //   //   { value: 'Discounted Products', label: 'Discounted Products', trigger: 'gender' },
          //   //   { value: 'Emergency Contact', label: 'Emergency Contact', trigger: 'gender' },
          //   // ],
          //   trigger: 'gender',
          // },
          {
            id: 'option',
            options: [
              // { value: 'Potato - 10tk, Tomato - 30tk', label: 'Updated Price', trigger: '5' },
              // { value: 'Capcicum - 45tk, Onion - 25tk', label: 'Discounted Products', trigger: '6' },
              // { value: 'SElevent IT', label: 'Emergency Contact', trigger: '7' },
              { value: 'buyer', label: 'Buyer', trigger: '7' },
              { value: 'seller', label: 'Seller', trigger: '8' },
              { value: 'other', label: 'Other', trigger: '9' },

            ],
          },

          {
            id: '7',
            message: "What do you want to buy?",
            trigger: '7.1'
          },
          {
            id: '7.1',
            options: [
              { value: 'potato', label: 'Potato', trigger: '7.1.1' },
              { value: 'rice', label: 'Rice', trigger: '7.1.2' },
              { value: 'tomato', label: 'Tomato', trigger: '7.1.3' },
            ],
          },
          {
            id: '7.1.1',
            message: "Potato per kg 30tk"
          },
          {
            id: '7.1.2',
            message: "Rice per kg 60tk"
          },
          {
            id: '7.1.3',
            message: "Tomato per kg 35tk"
          },

          {
            id: '8',
            message: "How can I sell my products?",
            trigger: '8.1'
          },
          {
            id: '8.1',
            options: [
              { value: 'Create Seller Account', label: 'Create Seller Account', trigger: '8.1.1' },
              { value: 'Update your products', label: 'Update your products', trigger: '8.1.2' }
            ],
          },
          
          {
            id: '8.1.1',
            message: "Create your account with your verfied email"
          },
          {
            id: '8.1.2',
            message: "Update your products that you want to sell at best price"
          },
          



          {
            id: '9',
            options: [
              { value: 'Updated Price', label: 'Updated Price', trigger: '9.1' },
              { value: 'Discounted Products', label: 'Discounted Products', trigger: '9.2' },
              { value: 'Emergency Contact', label: 'Emergency Contact', trigger: '9.3' },
            ],
          },


          {
            id: '9.1',
            message: 'Potato - 10tk, Tomato - 30tk',
            trigger: '9.4',
          },
          {
            id: '9.2',
            message: 'Capcicum - 45tk, Onion - 25tk',
            trigger: '9.4',
          },
          {
            id: '9.3',
            message: 'SEleven IT',
            trigger: '9.4',
          },
          // {
          //   id: 'age',
          //   user: true,
          //   trigger: '8',
          //   validator: (value) => {
          //     if (isNaN(value)) {
          //       return 'value must be a number';
          //     } else if (value < 0) {
          //       return 'value must be positive';
          //     } else if (value > 120) {
          //       return `${value}? Come on!`;
          //     }

          //     return true;
          //   },
          // },
          {
            id: '9.4',
            message : "Do you have more inquiry?",
            trigger: '9.4.1',
          },
          {
            id: '9.4.1',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '9.4.1.1' },
              { value: 'No', label: 'No', trigger: '9.4.1.2' },
            ],

          },
          {
            id: "9.4.1.1",
            message : "Please Write your quaries",
            user : true,
            trigger : "9.4.1.2"
          },

          {
            id: "9.4.1.2",
            message: "Thank You for being with us",
            user: true
          }
          // {
          //   id: 'review',
          //   component: <Review />,
          //   asMessage: true,
          //   trigger: 'update',
          // },
          // {
          //   id: 'update',
          //   message: 'Would you like to update some field?',
          //   trigger: 'update-question',
          // },
          // {
          //   id: 'update-question',
          //   options: [
          //     { value: 'yes', label: 'Yes', trigger: 'update-yes' },
          //     { value: 'no', label: 'No', trigger: 'end-message' },
          //   ],
          // },
          // {
          //   id: 'update-yes',
          //   message: 'What field would you like to update?',
          //   trigger: 'update-fields',
          // },
          // {
          //   id: 'update-fields',
          //   options: [
          //     { value: 'name', label: 'Name', trigger: 'update-name' },
          //     { value: 'gender', label: 'Gender', trigger: 'update-gender' },
          //     { value: 'age', label: 'Age', trigger: 'update-age' },
          //   ],
          // },
          // {
          //   id: 'update-name',
          //   update: 'name',
          //   trigger: '7',
          // },
          // {
          //   id: 'update-gender',
          //   update: 'gender',
          //   trigger: '7',
          // },
          // {
          //   id: 'update-age',
          //   update: 'age',
          //   trigger: '7',
          // },
          // {
            // id: 'end-message',
            // message: 'Thanks! Your data was submitted successfully!',
            // end: true,
          
        ]}
        {...config}
      />
      </ThemeProvider >
    );
  }
}

export default SimpleForm;