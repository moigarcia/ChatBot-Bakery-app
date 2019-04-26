import React, { Component } from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
import { getSpecial } from '../services/BakeryServices';
import PropTypes from 'prop-types';
import './Welcome.css';
import HeaderChat from './HeaderChat';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      special: "",
      touch: {},
      loading: false
    }
  }

  fetchSpecial = () => {
    getSpecial()
      .then(special => this.setState({ special }))
  }
  componentDidMount = () => {
    this.fetchSpecial()
  }

  render() {
    const { loading, special } = this.state;
    return (
      <div className="box-special">
        { loading ? <Loading /> : special }
        { !loading &&
          <div
            style={{
              textAlign: 'center'
            }}
          >     
          </div>
        }
      </div>
    );
  }
}

WelcomePage.propTypes = {
  steps: PropTypes.object
};

WelcomePage.defaultProps = {
  steps: undefined
};


const Welcome = () => (
  <div className="chat">
    <ChatBot steps={[
      {
        id: '1',
        message: 'Welcome, what is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: '4',
      },
      {
        id: '4',
        message: 'This is our special of the day',
        trigger: '5',
      },
      {
        id: '5',
        component: <WelcomePage />,
        waitAction: true,
        trigger: '1',
      },
    ]} 
    headerComponent={<HeaderChat headerTitle={"The bakery"} />}
    botAvatar={"./avatar.jpg"} 
    placeholder={"Introduce your name"} 
    userAvatar={"./avatarUser.jpg"}
    />
  </div>
);

export default Welcome;