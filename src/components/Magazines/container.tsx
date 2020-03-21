import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMagazineList } from "store/selectors/magazines";
import { fetchMagazines } from "store/actions/magazines";
import Magazines from ".";
import { Spin } from "antd";

const MagazinesContainer = () => {
	const dispatch = useDispatch();
	const magazinesList = useSelector(getMagazineList);

	useEffect(() => {
		if (!magazinesList) {
			dispatch(fetchMagazines());
		}
	}, [magazinesList]);

	return magazinesList ? <Magazines magazineList={magazinesList} /> : <Spin size="large" />;
};
  
export default MagazinesContainer;
  