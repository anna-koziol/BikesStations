import {createStackNavigator} from "react-navigation";
import Main from "./components/Main"
import Stations from "./components/Stations"
import Login from "./components/Login"
import Register from "./components/Register"
import Loading from "./components/Loading"
import Map from "./components/Map"

const App = createStackNavigator({
  s1: { screen: Main },
  s2: { screen: Login  },
  s3: { screen: Register  },
  s4: { screen: Loading  },
  s5: { screen: Stations  },
  s6: { screen: Map  },
});

export default App;