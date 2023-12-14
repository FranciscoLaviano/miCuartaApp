import { View, Text,StyleSheet, Pressable, TextInput } from 'react-native'
import {useState} from 'react'
import {AntDesign , Entypo} from "@expo/vector-icons"


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ECE67F',
        width:"100%"
    },
    containerInput:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    input:{
      backgroundColor:'#fcfcf5',
      width:"75%",
      borderWidth:2,
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:5,
      margin:10
    },
    errorInput:{
        color:"red",
        paddingHorizontal:10
    }
})

const Busqueda = ({setKeyword}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    setKeyword(input)
    const removeItem = () => {
        setInput("")
        setError("")
    }    

  return (
    <View style={styles.container}>
         <View style={styles.containerInput}> 
            <TextInput style={styles.input} placeholder='Buscar producto' value={input} onChangeText={(t)=> setInput(t)}  />
            <Pressable onPress={Busqueda}>
                <AntDesign name='search1' color="black" size={25}/>
            </Pressable>
            <Pressable onPress={removeItem}>
                <Entypo name='circle-with-cross' color="black" size={25}/>
            </Pressable>
        </View>
        
    </View>
  )
}

export default Busqueda