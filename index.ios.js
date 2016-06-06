var formatTime = require('minutes-seconds-milliseconds');
var ReactNative = require('react-native')
var React = require('react');
// variable destructuring with ES2015 syntax
var {
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

// former syntax
// var Text = React.Text;
// var View = React.View;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style={styles.footer}>
        {this.laps()}
      </View>
    </View>
  },
  startStopButton: function() {
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, style]}
      >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
  },
  lapButton: function() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleLapPress}
      style={styles.button}
      >
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
  },
  handleStartPress: function() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

  },
  handleLapPress: function() {
    var lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    })
  },
  laps: function() {
    return this.state.laps.map(function(time, index) {
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // fill the entire screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: {   // Red
    flex: 5, // takes up 5/8th of the available space
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {  // Green
    flex: 3, // takes up 3/8th of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

// ES2015 "fat arrow" or rocket syntax
AppRegistry.registerComponent('stopwatch', () => StopWatch);

// former longhand syntax
// AppRegistry.registerComponent('stopwatch', function() {
//   return StopWatch;
// });