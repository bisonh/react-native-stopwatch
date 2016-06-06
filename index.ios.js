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
      timeElapsed: null
    }
  },
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of Laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
  },
  lapButton: function() {
    return <View>
        <Text>
          Lap
        </Text>
      </View>
  },
  handleStartPress: function() {
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);

  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
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
  }
});

// ES2015 "fat arrow" or rocket syntax
AppRegistry.registerComponent('stopwatch', () => StopWatch);

// former longhand syntax
// AppRegistry.registerComponent('stopwatch', function() {
//   return StopWatch;
// });