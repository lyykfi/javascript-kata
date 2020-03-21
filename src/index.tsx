import ReactDOM from "react-dom";
import React from "react";

import App from "components/App";

const container = document.getElementById('root');

if (container) {
	ReactDOM.render(<App />, container);
}