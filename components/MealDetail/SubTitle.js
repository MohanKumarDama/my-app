import {View,Text,StyleSheet} from 'react-native'
function SubTitle({children}){

return (
    <View style = {styles.subTitleContainer}>
        <Text style = {styles.subTitle}>{children}</Text>
       
      </View>
)
}
export default SubTitle
const styles = StyleSheet.create ({
    subTitle:{
        color:'#e2b497',
        fontWeight:'bold',
        fontSize:18,
        margin:6,
        textAlign:'center'
      },
      subTitleContainer:{
        padding:6,
        margin:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:12,
        marginVertical:4
      }
})