import React, { useEffect, useState } from "react";
import HorizontalScroll from "./HorizontalScroll";
import { connect } from "react-redux";
import { fetchImages, fetchMoreImages } from "@/redux";
import InfiniteScroll from "react-infinite-scroll-component";

function PictureCardGrid({ imagesData, fetchImages, fetchMoreImages }: any) {
	const [startDate, setStartDate] = useState("2022-12-28");
	const [endDate, setEndDate] = useState("2023-01-03");
	useEffect(() => {
		fetchImages();
	}, []);
	const setPreviousWeekDate = () => {
		var firstDay = new Date(startDate);
		var previousWeek = new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
		firstDay = new Date(firstDay.getTime() - 1 * 24 * 60 * 60 * 1000)
		setEndDate(firstDay.toISOString().split("T")[0]);
		setStartDate(previousWeek.toISOString().split("T")[0]);
	};
	return imagesData.loading ? (
		<h1>Loading...</h1>
	) : imagesData.error ? (
		<p>{imagesData.error}</p>
	) : (
		<div>
			<InfiniteScroll
				dataLength={imagesData.images.length}
				next={() => {
					fetchMoreImages(startDate, endDate);
					setPreviousWeekDate();
				}}
				hasMore={true}
				loader={<h3> Loading...</h3>}
				endMessage={<h4>Nothing more to show</h4>}
			>
				{imagesData.images.map((val: any) => {
					return <HorizontalScroll imageData={val} />;
				})}
			</InfiniteScroll>
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
		fetchMoreImages: (start_date: any, end_date: any) =>
			dispatch(fetchMoreImages(start_date, end_date)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PictureCardGrid);
