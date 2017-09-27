import React, { Component } from 'react';

import Backend from '../Backend';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
    state = {
        messages: [],
    }
    componentWillMount() {

    }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(Message) => {
                    Backend.sendMessage(Message);
                }}
                user={{
                    _id: Backend.getUid(),
                    name: this.props.namwa
                }}
            />
        );
    }
    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((prevState) => {
                return {
                    messages: GiftedChat.append(prevState.messages, message)
                }
            });
        });
    }
    componentWillUnmount(){
        Backend.closeChat();
    }
}
Chat.defaultProps = {
    name: 'Ahmed'
}
Chat.propTypes = {
    name: React.PropTypes.string,
}
export default Chat;