import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcLogo, IlFootball } from '../../assets';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000);
    }, []);

    return (
        <View style={styles.page}>
            <IcLogo />
            <View style={styles.illustration}>
                <IlFootball />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    illustration: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})
