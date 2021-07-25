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
      <Text style={styles.timer}>{timeLeft} seconds left</Text>
      <Text style={styles.score}>{props.score} moles whacked!</Text>
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
    fontSize: 19,
    color: 'mintcream',
  },

  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    paddingTop: 20,
    borderRadius: 10,
  },
  score: {
    color: 'sienna',
    fontSize: 19,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};
export default connect(mapStateToProps)(Gameboard);
