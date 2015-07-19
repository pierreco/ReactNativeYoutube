'use strict';
 
var React = require('react-native');

var {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Component,
    Image,
    WebView
   } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 0
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    },
    frame: {
        paddingBottom: 50,
        height: 200
    },
    noResultsText: {
        marginTop: 70,
        marginBottom:0,
        color: '#000000',
    }
});
 
class VideoDetails extends Component {

    renderLoading() {
        console.log('## webView: loading()');
        return (
            <View style={[styles.container, styles.centerText]}>
                <Text style={styles.noResultsText}>Loading video...</Text>
            </View>
        );
    }

    render() {
        var video = this.props.video;
        var urlVideo = 'https://www.youtube.com/embed/' + video.snippet.resourceId.videoId  + '?autoplay=1';
        var description = (typeof video.snippet.description !== 'undefined') ? video.snippet.description : '';
        return (
            <ScrollView style={styles.container}
                vertical={true}
                contentInset={{top: 0}}>
                 <WebView
                        style={styles.frame}
                        url={urlVideo}
                        renderLoading={this.renderLoading}
                        renderError={this.renderError}
                        automaticallyAdjustContentInsets={false}/>
               <Text style={styles.description}>{description}</Text>
            </ScrollView>
        );
    }
    renderLoading() {
        console.log('## webView: loading()');
        return (
            <View style={[styles.container, styles.centerText]}>
                <Text style={styles.noResultsText}>Loading video...</Text>
            </View>
        );
    }

    renderError() {
        return (
            <View style={[styles.container, styles.centerText]}>
                <Text style={styles.noResultsText}>Video not found - 404</Text>
            </View>
        );
    }
}
 
module.exports = VideoDetails;