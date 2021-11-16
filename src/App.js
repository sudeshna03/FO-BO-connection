import React from 'react';
import { Provider } from 'react-redux';
import Posts from './Pages/posts/posts';
import store from './Stores/stores';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Posts />
        </div>
      </Provider>
    </div>
  );
};

export default App;
