#ReactNative Youtube Channel
Create an application iOS for your Youtube Channel with [ReactNative](https://facebook.github.io/react-native/)

### Required
* XCode 6.3
* React-native

```
$ npm i -g react-native-cli
```

### How to install

```bash
$ git clone https://github.com/pierreco/ReactNativeYoutube.git
$ cd ReactNativeYoutube
$ npm install
```

### How to run with Simulator
1) Open `ReactYoutube.xcodeproj` with Xcode

2) Run Project with simulator `CMD + R`

### How to debug
1) `CMD + D` in a simulator and select `Debug in Chrome`
2) Open `http://localhost:8081/debugger-ui` in your Chrome navigator

### Use your Youtube Channel
1) Connect to [Google Developer](https://console.developers.google.com/)

2) Create a New Project

3) Go to APIs & auth > APIs > Enable Youtube Data API v3

4) APIs & auth > Credentials > Public API access > `Create new Key`

![create iOS key](http://i.imgur.com/kA4mhOM.png)

5)  Select `iOS Key`

![create iOS key](http://i.imgur.com/irx3nPA.png)

6)  Click to `Create`


7) Configure  `config.js` 

- Copy your API key in field `key`
- Create a Playlist Youtube with all your videos and copy playlist id in fied `playlistDefault`
- Copy your Youtube Channel id in field `channelId`

###TODO
* Reload list videos
* Cache
* Display Video native

### Screenshoot
![screen](http://g.recordit.co/pEIgXXbBTt.gif)


###Contact
Twitter: [@pierre_co](https://twitter.com/Pierre_co)





