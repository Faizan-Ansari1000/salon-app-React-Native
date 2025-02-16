import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUp from "../../Auth/SignUp";
import Toast from "react-native-toast-message";
import Login from "../../Auth/Login";
import Admin from "../../Admin/Admin";
import Home from "../../User/Home";
import Services from "../../User/Services";
import WomenService from "../../User/womens/WomenService";
import MenService from "../../User/mens/MenService";
import HairCut from "../../User/mens/HairCut";
import Beard from "../../User/mens/Beard";
import FacialMen from "../../User/mens/FacialMen";
import MenRelaxation from "../../User/mens/MenRelaxation";
import Schedule from "../../User/Schedule";
import GirlHair from "../../User/womens/GirlHair";
import GirlFacial from "../../User/womens/GirlFacial";
import Manicure from "../../User/womens/Manicure";
import Bridal from "../../User/womens/Bridal";
import Profile from "../../User/Profile";
import RegUsers from "../../Admin/RegUsers";
import Bookings from "../../Admin/Bookings";
import ComplainUser from "../../Admin/ComplainUser";
import Complain from "../../User/Complain";
import Updates from "../../Admin/Updates";
import AdminUpdates from "../../User/AdminUpdates";



export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerStyle: { backgroundColor: 'black' },
                        headerTintColor: '#C7A17A',
                    }}
                />
                <Stack.Screen name="Admin" options={{ headerShown: false }} component={Admin} />
                <Stack.Screen name="Services" options={{ headerShown: false }} component={Services} />
                <Stack.Screen name="WomenService" options={{ headerShown: false }} component={WomenService} />
                <Stack.Screen name="MenService" options={{ headerShown: false }} component={MenService} />
                <Stack.Screen name="HairCut" options={{ headerShown: false }} component={HairCut} />
                <Stack.Screen name="Beard" options={{ headerShown: false }} component={Beard} />
                <Stack.Screen name="FacialMen" options={{ headerShown: false }} component={FacialMen} />
                <Stack.Screen name="MenRelaxation" options={{ headerShown: false }} component={MenRelaxation} />
                <Stack.Screen name="Schedule" options={{ headerShown: false }} component={Schedule} />
                <Stack.Screen name="GirlHair" options={{ headerShown: false }} component={GirlHair} />
                <Stack.Screen name="GirlFacial" options={{ headerShown: false }} component={GirlFacial} />
                <Stack.Screen name="Manicure" options={{ headerShown: false }} component={Manicure} />
                <Stack.Screen name="Bridal" options={{ headerShown: false }} component={Bridal} />
                <Stack.Screen name="Profile" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={Profile} />
                <Stack.Screen name="RegUsers" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={RegUsers} />
                <Stack.Screen name="Bookings" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={Bookings} />
                <Stack.Screen name="ComplainUser" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={ComplainUser} />
                <Stack.Screen name="Complain" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={Complain} />
                <Stack.Screen name="Updates" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={Updates} />
                <Stack.Screen name="AdminUpdates" options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: '#C7A17A' }} component={AdminUpdates} />
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    )
}