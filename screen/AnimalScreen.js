import React, { useEffect } from "react";
import {Button,View, Image} from "react-native";

const App = ({navigation, route})=> {
    const img = route.params.a;

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: route.params.screenTitle});
        },[]);
    
    
    return(
        <View style={{flex:1, alignSelf:'center', justifyContent:'center'}} >
            <Image 
                style={{ alignSelf:'center', justifyContent:'center', width: 300, height: 300}} 
                source={img}
            />
            <Button title="Go back" onPress={()=>navigation.goBack()}></Button>
        </View>
    )
}

export default App;

