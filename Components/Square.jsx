import React from 'react';
import { StyleSheet, View } from 'react-native';

const Square = () => {
    return (
        <View style={styles.square}>
           
        </View>
    );
};


const styles = StyleSheet.create({
   square: {
       flex: 1,
       minWidth: 80,
       minHeight: 80,
       margin: 10,
       backgroundColor: 'red',
   },
})
export default Square;