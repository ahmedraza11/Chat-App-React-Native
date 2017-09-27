import React, { Component } from 'react';

import {
    Scene,
    Router
} from 'react-native-router-flux';
import Home from './component/home';
import Chat from './component/chat';
import ScreenSplash from './component/splashScreen';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="splash" component={ScreenSplash} />
                    <Scene key="hom" component={Home} title="Home" />
                    <Scene key="chat" component={Chat} title="Chat" />
                </Scene>
            </Router>
        );
    }
}

export default App;