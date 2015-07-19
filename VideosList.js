'use strict';
 
var React  = require('react-native');
var VideoDetails = require('./VideoDetails');
var Moment = require('moment');
var config = require('./config');
 
var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
   } = React;
 

var REQUEST_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?key='+ config.key +'&maxResults=50&pageToken=&part=snippet&playlistId=';

 
class VideosList extends Component {

    constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
           playlistId: config.playlistDefault,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
    }

    fetchData(query: string) {
       fetch(REQUEST_URL + query)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
       })
       .catch(error => {
        this.setState({ isLoading: false})
          React.AlertIOS.alert(
            'Error',
            'There seems to be an issue connecting to the network.'
          )
        })
       .done();
    }

    componentDidMount() {
      var _filter = this.props.playlistId || this.state.playlistId;
      this.fetchData(_filter);
    }

    handleScroll(event: Object) {

        if (event.nativeEvent.contentOffset.y < -110) { // pull-down
            //this.setState({isLoading: true});
            //var filter = this.props.filter || this.state.filter;
            // reduce dup fetches
           // this.clearTimeout(this.timeoutID);
         //   this.timeoutID = this.setTimeout(() => this.fetchData(), 250);
        }
    }

    showVideoDetail(video) {
       this.props.navigator.push({
           title: video.snippet.title,
           component: VideoDetails,
           passProps: {video}
       });
    }

    render() {
       if (this.state.isLoading) {
           return this.renderLoadingView();
       }

       var results = this.state.dataSource.getRowCount() === 0  ?
        <NoVideos
            playlistId={this.state.playlistId}
            isLoading={this.state.isLoading}/> :

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderVideo.bind(this)}
                style={styles.listView}
                onScroll={this.handleScroll}/>;
 
       return (
        <View>
            {results}
            </View>
        );
    }

    renderVideo(video) {
        if(!video.snippet.thumbnails){
            video.snippet.thumbnails.default.url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
        }

       return (
            <TouchableHighlight onPress={() => this.showVideoDetail(video)}  underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: video.snippet.thumbnails.default.url}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{video.snippet.title}</Text>
                            <Text style={styles.author}>{Moment(video.snippet.publishedAt).fromNow()}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

   renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS
                    size='large'/>
                <Text>
                    Loading videos...
                </Text>
            </View>
        );
    }
}

var NoVideos = React.createClass({
    render: function() {
        var text = 'no results found';
        if (this.props.playlistId) {
            if(this.props.isLoading){
                text = `Loading results for “${this.props.playlistId}”`;
            }
            else {
                text = `No results for “${this.props.playlistId}”`;
            }
        }

        return (
            <View style={styles.container}>
                <Text >{text}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    thumbnail: {
        width: 90,
        height: 50,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 15,
        marginBottom: 8
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
    },
    author: {
        color: '#656565'
    },
    listView: {
       height: 700
    },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});
 
module.exports = VideosList;