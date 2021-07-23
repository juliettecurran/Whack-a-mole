import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';

const Gameboard = () => {
    return (
        <View style={styles.container}>
        <Text>Whack-a-mole!</Text>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    game: {
      flexDirection: 'row',
      flexWrap: "wrap",
      width: 300,
      paddingTop: 20,
    }
  });
  
export default Gameboard;