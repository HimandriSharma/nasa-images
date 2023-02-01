import { Col, Row } from "antd";
import { changeOverlay } from "@/redux";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Router from "next/router";
import { PlayCircleOutlined } from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"] });

function Spotlight({ spotlight, changeOverlay }: any) {
	const [spot, setSpot] = useState({
		copyright: "",
		date: "",
		explanation: "",
		hdurl: "",
		media_type: "",
		service_version: "",
		title: "",
		url: "",
		thumbnail_url: "",
	});
	useEffect(() => {
		setSpot(spotlight.spotlight);
	}, [spotlight.spotlight]);
	return spotlight.loading ? (
		<h3>Loading Spotlight...</h3>
	) : (
		<div
			style={{ padding: "2rem" }}
			onClick={() => {
				changeOverlay(spot);
				Router.push("/details");
			}}
		>
			<Row justify="space-between" align="middle" gutter={16}>
				<Col sm={24} md={10}>
					<h2 className={inter.className}>{spot.title}</h2>
					<br />
					<p className={inter.className}>{spot.explanation}</p>
					<br />
					{spot.copyright ? (
						<p className={inter.className}>
							authored by <b>{spot.copyright}</b>
						</p>
					) : (
						<></>
					)}
				</Col>
				<Col sm={16} md={12} lg={10}>
					{spot.media_type === "image" ? (
						<Image
							loader={() => spot.url}
							src={spot.url}
							alt="NASA Logo"
							width={500}
							height={350}
							style={{ borderRadius: "1rem" }}
						/>
					) : spot.media_type === "video" ? (
						<div
							style={{
								borderRadius: "0.5rem",
								height: "200px",
								backgroundPosition: "center",
								backgroundSize: "cover",
								display: "grid",
								placeItems: "center",
								backgroundRepeat: "no-repeat",
								backgroundImage: `url(${spot.thumbnail_url})`,
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									color: "white",
									width: "100%",
								}}
							>
								<PlayCircleOutlined style={{ fontSize: "350%" }} />
							</div>
						</div>
					) : (
						<h3>Error in Loading Media Type</h3>
					)}
				</Col>
			</Row>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		spotlight: state.images,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeOverlay: (selectedImage: any) =>
			dispatch(changeOverlay(selectedImage)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Spotlight);
