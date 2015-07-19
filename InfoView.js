'use strict';
 
var React = require('react-native');
var InfoView = require('./Info');
 
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