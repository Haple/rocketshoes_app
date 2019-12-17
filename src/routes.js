import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    { Home },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
