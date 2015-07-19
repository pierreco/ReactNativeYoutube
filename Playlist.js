'use strict';

var React = require('react-native');
var VideosList = require('./VideosList');

var config = require('./config');

var {
    StyleSheet,
    Text,
    ListView,
    Component,
    PixelRatio,
    TouchableHighlight,
    View
    } = React;

var Playlist_URL = 'https://www.googleapis.com/youtube/v3/playlists?channelId='+ config.channelId + '&key=' + config.key +' &maxResults=50&part=snippet'


class TopicsListView extends Component {

    constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
   }

    fetchData() {
       fetch(Playlist_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
       })
       .catch(error => {
          React.AlertIOS.alert(
            'Error',
            'There seems to be an issue connecting to the network.'
          )
        })
       .done();
   }

    componentDidMount() {
      this.fetchData();
    }

    render() {
       return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}/>

        );
    }

    renderBook(items: Object) {
       return (
            <NavButton
                onPress={() => this.selectTopic(items)}
                text={items.snippet.title} />
       );
   }

   selectTopic(item: Object) {
        this.setState({filter:item.snippet.title.toLowerCase()});

        this.props.navigator.push({
            title: item.snippet.title,
            component: VideosList,
            passProps: {
                filter: item.snippet.title.toLowerCase(),
                playlistId : item.id
            }
        });
    }

};

var NavButton = React.createClass({

    render: function() {
        return (
            <TouchableHighlight
                style={styles.button}
                activeOpacity={1}
                animationVelocity={0}
                underlayColor="rgb(210, 230, 255)"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        )
    }
});


var styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        padding: 9,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '200',
        marginTop: 5,
        padding: 2,
        marginLeft: 10,
    },
});

module.exports = TopicsListView;