import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column', 
        backgroundColor:'white', 
        justifyContent:'center', 
        alignItems:'center'
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        fontFamily:'NunitoSans',
        fontSize:30
    },
    subTitle:{
        justifyContent:'center',
        alignItems:'center'
    },
    logout:{
        borderRadius:4,
        width:320,
        height:48,
        borderWidth:1,
        backgroundColor:'white',
        borderRadius: 4,
        borderColor:'rgb(50,145,200)',
        marginTop:5,
        justifyContent:'space-between'
    },
    logoutTextStyle:{
        marginTop:10,
        marginLeft:127,
        fontFamily:'NunitoSans',
        fontWeight:'600',
        fontSize:16,
        color:'rgb(50,145,200)',
        fontSize:16
    }

});