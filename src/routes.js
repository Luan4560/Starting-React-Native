import { createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Product from './pages/product';

export default createStackNavigator({
  Main,
  Product
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#404040"
    },
    headerTintColor: "#BFBFBF"
  }
});
