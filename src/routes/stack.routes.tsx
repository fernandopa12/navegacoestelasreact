import{createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'

const{Screen,Navigator} = createNativeStackNavigator()

export default function StackRoutes(){

    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{
                    title:'TELA INICIAL',
                    headerTitleAlign:'center'
                }}
            />
            <Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
        </Navigator>
    )
}