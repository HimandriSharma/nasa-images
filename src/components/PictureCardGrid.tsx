import React, { useEffect, useState } from "react";
import HorizontalScroll from "./HorizontalScroll";
import { connect } from "react-redux";
import { fetchImages } from "@/redux";

function PictureCardGrid({ imagesData, fetchImages }: any) {
	const [data, setData] = useState<any[][]>();
	useEffect(() => {
		fetchImages();
	}, []);
	return imagesData.loading ? (
		<h1>Loading</h1>
	) : imagesData.error ? (
		<p>{imagesData.error}</p>
	) : (
		<div>
			{imagesData.images.map((val: any) => {
				return <HorizontalScroll imageData={val}/>;
			})}
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		imagesData: state.images,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchImages: () => dispatch(fetchImages()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PictureCardGrid);
