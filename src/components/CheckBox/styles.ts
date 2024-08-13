import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 14
    },
    checkBox: {
        position: 'relative',
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 1
    },
    checked: {
        backgroundColor: colors.primary
    },
    checkIcon: {
        position: 'absolute',
        left: '3%'
    }
})