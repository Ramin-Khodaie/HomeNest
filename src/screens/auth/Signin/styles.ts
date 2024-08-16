import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
    },
    form: {
        height: '100%',
        paddingVertical: 16,
        paddingHorizontal: 32,
        rowGap: 28
    },
    inputs: {},

    termsAndPrivacy: {
        color: colors.primary,
        fontSize: 16
    },
    strong: {
        fontWeight: '700'
    },
    bottom: {
        gap: 32
    },
    signinWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    line: {
        width: 100,
        borderWidth: 0.19,
        borderColor: '#8D9BB5'
    },
    signUpWithText: {
        color: colors.primary,
        fontSize: 14
    },
    already: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: 14,
        fontWeight: '500'
    },
    signIn: {
        fontWeight: '700'
    }
})