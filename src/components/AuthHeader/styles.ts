import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 32
    },
    
    title:{
        color: colors.primary,
        fontSize: 18,
        fontWeight:'500',
        paddingLeft: 16
    }
})