import { Card } from "antd";
import { changeOverlay } from "@/redux";
import { connect } from "react-redux";
import React, { useState } from "react";
import Router from "next/router";

function PictureCard({ image, changeOverlay }: any) {
	const [cardData, setCardData] = useState(image);
	return (
		<div
			onClick={() => {
				changeOverlay(image);
				Router.push("/details");
			}}
		>
			<Card
				hoverable
				bodyStyle={{ padding: "0" }}
				style={{ width: 240 }}
				bordered={false}
				cover={
					<div
						style={{
							borderRadius: "0.5rem",
							height: "200px",
							backgroundPosition: "center",
							backgroundSize: "cover",
							display: "grid",
							placeItems: "center",
							backgroundRepeat: "no-repeat",
							backgroundImage: `url(${
								cardData.hdurl ? cardData.hdurl : cardData.thumbnail_url
							})`,
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								position: "absolute",
								bottom: "0",
								background: "rgba(0, 0, 0, 0.5)",
								color: "white",
								width: "100%",
							}}
						>
							<div
								style={{
									marginLeft: "5px",
									width: "50%",
									overflow: "hidden",
									whiteSpace: "nowrap",
									textOverflow: "ellipsis",
								}}
							>
								{cardData.title}
							</div>
							<div
								style={{
									width: "35%",
								}}
							>
								{cardData.date}
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeOverlay: (selectedImage: any) =>
			dispatch(changeOverlay(selectedImage)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PictureCard);
