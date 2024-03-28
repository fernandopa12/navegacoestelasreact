import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Login from '../screens/Login'
import {MaterialIcons} from '@expo/vector-icons'

const{Screen,Navigator} = createBottomTabNavigator()

export default function TabRoutes(){

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'blue'
            }}
        >
            
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon :()=><MaterialIcons name='home' size={34}
                     />
                }}
            />
            <Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon :()=><MaterialIcons name='login' size={34}
                     />
                    }}
            />
        </Navigator>
    )
}