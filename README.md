#ReactNative Youtube Channel
Create an application iOS for your Youtube Channel with [ReactNative](https://facebook.github.io/react-native/)

![screen](http://g.recordit.co/pEIgXXbBTt.gif)


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

2) Select your simulator and run with Xcode `CMD + R`

### How to debug with Simulator
1) `CMD + D` in a simulator and select `Debug in Chrome`

2) Open `http://localhost:8081/debugger-ui` in your Chrome navigator

### How to run with Device
1) Close the terminal window that appeared (it will say React Packager)

2) Open `iOS/AppDelegate.m`

3) Uncomment `jsCodeLocation = [[NSBundle mainBundle] ...`

4) Run the `react-native bundle `command in terminal from the root directory ReactNativeYoutube

5) Select your device and run with Xcode `CMD + R`

[See ReactNative documentation](http://facebook.github.io/react-native/docs/runningondevice.html)

### Use your Youtube Channel
1) Connect to [Google Developer](https://console.developers.google.com/)

2) Create a New Project

3) Go to APIs & auth > APIs > Enable Youtube Data API v3

4) APIs & auth > Credentials > Public API access > `Create new Key`

![create iOS key](http://i.imgur.com/kA4mhOM.png)

5)  Select `iOS Key`

![create iOS key](http://i.imgur.com/irx3nPA.png)

6)  Click on `Create`


7) Configure  `config.js` 

- Copy your API key in field `key`
- Create a Playlist Youtube with all your videos and copy playlist id in fied `playlistDefault`
- Copy your Youtube Channel id in field `channelId`

###TODO
* Reload list videos with scroll
* Cache
* Display Video native


###Contact
Twitter: [@pierre_co](https://twitter.com/Pierre_co)





