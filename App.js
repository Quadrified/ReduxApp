import React, {Component} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {counterIncrement, counterDecrement, counterClear} from './src/actions';

class App extends Component {
  //   state = {
  //     count: 0,
  //   };

  //   onPressIncrement = () => {
  //     this.setState({count: this.state.count + 1});
  //   };

  //   onPressDecrement = () => {
  //     this.setState({count: this.state.count - 1});
  //   };

  //   clearState = () => {
  //     this.setState({count: 0});
  //   };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.countStyle}>
          <Button onPress={this.props.counterDecrement} title="-" />
          <Text style={styles.textDisplay}>{this.props.count}</Text>
          <Button onPress={this.props.counterIncrement} title="+" />
        </View>
        <Button
          style={{paddingTop: 20}}
          title="Clear"
          onPress={this.props.counterClear}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  textDisplay: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  buttons: {
    fontSize: 20,
    paddingBottom: 10,
  },

  countStyle: {
    flexDirection: 'row',
  },
});

mapStateToProps = state => {
  return {
    count: state.counter,
  };
};

export default connect(
  mapStateToProps,
  {counterIncrement, counterDecrement, counterClear},
)(App);
