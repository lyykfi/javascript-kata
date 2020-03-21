import React from "react";
import { Provider } from "react-redux";
import store from "store";
import BooksContainer from "components/Books/container";

const App = () => {
	return <Provider store={store}>
		<BooksContainer />
	</Provider>;
};
  
export default App;
  