import{createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Login from '../screens/Login'
import {MaterialIcons} from '@expo/vector-icons'

const{Screen,Navigator} = createDrawerNavigator()

export default function DrawerRoutes(){

    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon :()=><MaterialIcons name='home' size={34}
                     />
                }}
               
            />
            <Screen
                name="Login"
                component={Login}
               
            />
        </Navigator>
    )
}