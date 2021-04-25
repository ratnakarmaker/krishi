import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { propTypes } from 'react-bootstrap/esm/Image';
import '../ChatBot/chat.css';
// import { ThemeProvider } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
// import img from "data:image/png;base64,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"

import img from "../../img/download.png"
import img1 from "data:image/png;base64,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"
import { BorderAllRounded } from '@material-ui/icons';

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
              <td>{age.value}</td>
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
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
        {...config}
      />
      </ThemeProvider >
    );
  }
}

export default SimpleForm;