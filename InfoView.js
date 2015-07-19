'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Component
   } = React;
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
class InfoView extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.description}>
              Twitter : @pierre_co
            </Text>
        </View>           
        );
    }
}

 
module.exports = InfoView;