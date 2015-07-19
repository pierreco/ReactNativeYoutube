'use strict';
 
var React = require('react-native');
var VideoList = require('./VideosList');
var Playlist = require('./PlayList');

 
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
            ref="nav"
            style={styles.container}
            initialRoute={{
            title: 'Your Youtube Channel',
            component: VideoList,
            rightButtonTitle: 'Catégories',
                    onRightButtonPress: () => {
                        this.refs.nav.navigator.push({
                            title: "Categories",
                            component: Playlist,
                            rightButtonTitle: '',
                            onRightButtonPress: () => {this.refs.nav.navigator.pop();}
                        });}
            }}/>            
        );
    }
}
 
module.exports = Featured;