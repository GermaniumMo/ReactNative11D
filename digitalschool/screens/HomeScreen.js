import React, { useState, useEffect} from "react";

import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
            <Button 
                title="Go to About Screen"
                onPress={()=> navigation.navigate('About')}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;