'use strict';

var React  = require('react-native');
var VideoView = require('./VideoView');
var Info     = require('./Info');

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Component,
  Text,
  View,
  ListView,
  Image,
} = React;

class ReactNativeYoutube extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    icon={{uri:'featured'}}

                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <VideoView/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'info'}
                    icon={{uri:'more'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'info'
                        });
                    }}>
                    <Info/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}



AppRegistry.registerComponent('ReactNativeYoutube', () => ReactNativeYoutube);
