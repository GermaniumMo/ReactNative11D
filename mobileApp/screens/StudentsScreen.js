import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});

export default StudentsScreen;