import React from "react";
import { Provider } from "react-redux";
import store from "store";
import BooksContainer from "components/Books/container";
import MagazinesContainer from "components/Magazines/container";

import "./styles.css";
import IsbnFinder from "components/IsbnFinder";

const App = () => {
	return <Provider store={store}>
		<IsbnFinder />

		<div className="container">
			<div className="item">
				<BooksContainer />
			</div>
			<div className="item">
				<MagazinesContainer />
			</div>
		</div>
	</Provider>;
};
  
export default App;
  