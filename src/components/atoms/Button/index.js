import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcCart } from '../../../assets';
import { colors } from '../../../utils';

const Button = ({ icon, totalCart }) => {

    const Icon = () => {
        if (icon === "cart") {
            return <IcCart />
        }

        return <IcCart />
    }

    return (
        <TouchableOpacity style={styles.container}>
            <IcCart />
            {totalCart && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalCart}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5
    },
    notif: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: 'red',
        borderRadius: 3,
        padding: 3
    },
    textNotif: {
        fontSize: 8,
        color: colors.white
    }
})
