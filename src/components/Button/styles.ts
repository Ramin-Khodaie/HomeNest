import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: colors.primary,
        borderRadius: 8,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16
    },
})