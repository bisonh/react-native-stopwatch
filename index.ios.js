var ReactNative = require('react-native')
var React = require('react');
// variable destructuring with ES2015 syntax
var {
  Text,
  View,
  AppRegistry
} = ReactNative;

// former syntax
// var Text = React.Text;
// var View = React.View;

var StopWatch = React.createClass({
  render: function() {
    return <View>
      <Text>
        00:00.00
      </Text>
    {this.startStopButton()}
    {this.lapButton()}
    </View>
  },
  startStopButton: function() {
    return <View>
        <Text>
          Start
        </Text>
      </View>
  },
  lapButton: function() {
    return <View>
        <Text>
          Lap
        </Text>
      </View>
  }
});

// ES2015 "fat arrow" or rocket syntax
AppRegistry.registerComponent('stopwatch', () => StopWatch);

// former longhand syntax
// AppRegistry.registerComponent('stopwatch', function() {
//   return StopWatch;
// });

