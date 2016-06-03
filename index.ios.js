var React = require('react-native');
// variable destructuring with ES2015 syntax
var {
  Text,
  View,
  AppRegistry
} = React;

// former syntax
// var Text = React.Text;
// var View = React.View;

var StopWatch = React.createClass({
  render: function() {
    return <View>
      <Text>
        00:00.00
      </Text>
      <View>
        <Text>
          Start
        </Text>
      </View>
      <View>
        <Text>
          Lap
        </Text>
      </View>

    </View>
  }
});

// ES2015 "fat arrow" or rocket syntax
AppRegistry.registerComponent('stopwatch', () => StopWatch);

// former longhand syntax
// AppRegistry.registerComponent('stopwatch', function() {
//   return StopWatch;
// });

