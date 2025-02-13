import {NavigationContainer} from '@react-navigation/native'
import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes'
import DrawerRoutes from './drawer.routes'

export default function Routes(){

    return (
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}