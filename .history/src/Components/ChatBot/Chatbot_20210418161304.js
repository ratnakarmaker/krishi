import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import '../ChatBot/chat.css';
import { ThemeProvider } from 'styled-components';
import img from "../../img/download.png"
import { Gradient } from 'react-gradient';


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

const vari = <br />


class SimpleForm extends Component {
  render() {
    return (

      <ThemeProvider theme={theme} style= {{marginBottom: '5rem'}}>
      <ChatBot 
        
        steps={[
          {
            id: '1',
            message: 'Hello Sir/Mam, Welcome to our Krishi Arot, What product you are looking for?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '{previousValue}, for this product!, here are some options from us',
            // options: [
            //   { value: 'Updated Price', label: 'Updated Price', trigger: 'gender' },
            //   { value: 'Discounted Products', label: 'Discounted Products', trigger: 'gender' },
            //   { value: 'Emergency Contact', label: 'Emergency Contact', trigger: 'gender' },
            // ],
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'Potato - 10tk, Tomato - 30tk', label: 'Updated Price', trigger: '5' },
              { value: 'Capcicum - 45tk, Onion - 25tk', label: 'Discounted Products', trigger: '6' },
              { value: 'SElevent IT', label: 'Emergency Contact', trigger: '7' },

            ],
          },
          {
            id: '5',
            message: 'Potato - 10tk, Tomato - 30tk',
            trigger: '9',
          },
          {
            id: '6',
            message: 'Capcicum - 45tk, Onion - 25tk',
            trigger: '9',
          },
          {
            id: '7',
            message: 'SEleven IT',
            trigger: '9',
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
            id: '9',
            message: 'Great! Thank you for your interest.',
            // trigger: 'review',
          },
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