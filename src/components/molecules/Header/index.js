import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IcSearch } from '../../../assets';
import { colors, fonts, responsiveHeight } from '../../../utils';
import { Button, Gap } from '../../atoms';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperHeader}>
                <View style={styles.searchSection}>
                    <IcSearch />
                    <TextInput placeholder="Cari Jersey. . ." style={styles.input} />
                </View>
                <Gap width={10} />
                <Button totalCart="2" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(125)
    },
    wrapperHeader: {
        marginTop: 15,
        marginHorizontal: 30,
        flexDirection: 'row'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        fontSize: 16,
        fontFamily: fonts.primary.regular
    }
})
