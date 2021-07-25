import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';
import { connect } from 'react-redux';

const Gameboard = (props) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!timeLeft) return;
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Whack-a-mole!</Text>
      <Text style={styles.timer}>{timeLeft}</Text>
      <Text>{props.score}</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumturquoise',
    alignItems: 'center',
    paddingTop: 50,
  },

  textTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'mintcream',
    marginBottom: 30,
  },

  timer: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'mintcream',
    marginBottom: 30,
    marginBottom: 30,
  },

  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    paddingTop: 20,
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};
export default connect(mapStateToProps)(Gameboard);
