import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BannerSlider, Header } from '../../components';
import { colors } from '../../utils';

const Home = () => {
    return (
        <View style={styles.page}>
            <Header />
            <BannerSlider />
            <Text>Home Page</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
