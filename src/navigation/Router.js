import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';

export default function Root() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='CharacterList'>
                <Stack.Screen
                    name="CharacterList"
                    component={CharacterListScreen}
                    options={{
                        title: ``,
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CharacterDetail"
                    component={CharacterDetailScreen}
                    options={{
                        title: `Character details`,
                        headerTitleAlign: 'center',
                        headerTintColor: 'black',
                        headerTitleStyle: { fontFamily: "Poppins_700Bold", fontSize: 24 },
                        headerShadowVisible: false,
                        presentation: "modal"
                    }}
                />
            </Stack.Navigator >
        </NavigationContainer>
    )
}
