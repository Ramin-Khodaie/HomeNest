import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: "column"
    },
    error: {
        borderColor: 'red',       
    },
    label: {
        color: colors.primary,
        fontSize: 16,
        paddingBottom: 8,
        fontWeight: '500'
    },
    input: {
        borderWidth: 1,
        borderColor: '#8D9BB5',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 16,
        color: colors.primary,
        fontSize: 14
    },
    passwordIcon: {
        position: 'absolute',
        right: 20,
        top: '52%'
    }
}
)

