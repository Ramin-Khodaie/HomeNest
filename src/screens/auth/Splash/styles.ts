import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,        
        padding: 16
    },
    image: {
        width: '100%',
        height: 200
    },

    sloganText: {
        fontSize: 36,
        textAlign: 'center'
    },
    coloredText: {
        color: 'orange'
    },
    button: {
        width: "70%",
        padding: 16,
        backgroundColor: colors.primary,
        borderRadius: 8,

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    signInText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#4F63AC'
    }
})