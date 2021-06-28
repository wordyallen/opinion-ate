import RestaurantScreen from './components/RestaurantScreen';
import {Provider} from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div>
      <Provider {...{store}}>
        <RestaurantScreen />
      </Provider>
    </div>
  );
}

export default App;
