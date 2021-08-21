import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.page}>
            <Text>Home Page</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'yellow',
        flex: 1
    }
})
