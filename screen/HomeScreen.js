import React from "react";
import {Button, View} from "react-native";

//export default class App extends Component{
const App = ({route, navigation})=> {
        return(
            <View>
                <View style={{ margin:10 }}>
                    <Button title="Chicken" onPress={()=>{navigation.navigate('Animal', {a: require('../img/chicken.jpg')})}} /> 
                </View>
                <View style={{ margin:10 }}>
                    <Button title="Koala" onPress={()=>{navigation.navigate('Animal', {a: require('../img/koala.jpg')})}}/>
                </View>
            </View>
        )
    
}//line 10: .navigation is used with the navigation container in app.js to navigate between screens.

export default App;