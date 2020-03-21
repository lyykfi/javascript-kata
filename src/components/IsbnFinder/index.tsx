import React, { useState, useCallback, useEffect } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { findByISBN } from "store/actions/find";

const IsbnFinder = () => {
	const dispatch = useDispatch();
	const [ value, updateValue ] = useState('');

	const updateValueCallback = useCallback((e) => {
		updateValue(e.target.value);
	}, []);

	useEffect(() => {
		dispatch(findByISBN(value));
	}, [value]);

	return <>
		<Input
			placeholder="isbn book or magazine"
			value={value}
			onChange={updateValueCallback} />
	</>;
};
  
export default IsbnFinder;
  