'use strict';
 
var React = require('react-native');
var InfoView = require('./InfoView');
 
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
 
class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Informations',
            component: InfoView
        }}/>            
        );
    }
}
 
module.exports = Search;