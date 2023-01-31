import { Card } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const { Meta } = Card;
const sampleData = {
	copyright: "Tunc Tezel",
	date: "2022-10-01",
	explanation:
		"Observe the Moon every night and you'll see its visible sunlit portion gradually change. In phases progressing from New Moon to Full Moon to New Moon again, a lunar cycle or lunation is completed in about 29.5 days. Top left to bottom right, this 7x4 matrix of telescopic images captures the range of lunar phases for 28 consecutive nights, from the evening of July 29 to the morning of August 26, following an almost complete lunation. No image was taken 24 hours or so just after and just before New Moon, when the lunar phase is at best a narrow crescent, close to the Sun and really hard to see. Finding mostly clear Mediterranean skies required an occasional road trip to complete this lunar cycle project, imaging in early evening for the first half and late evening and early morning for the second half of the lunation. Since all the images are registered at the same scale you can use this matrix to track the change in the Moon's apparent size during the single lunation. For extra credit, find the lunar phase that occurred closest to perigee.  Tonight: International Observe the Moon Night",
	hdurl: "https://apod.nasa.gov/apod/image/2210/Lu20220729-0826.jpg",
	media_type: "image",
	service_version: "v1",
	title: "Lunation Matrixe",
	url: "https://apod.nasa.gov/apod/image/1301/cygnuswall_pavelchak_1600.jpg",
};

function PictureCard() {
	const [cardData, setCardData] = useState(sampleData);
	return (
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
						backgroundImage: `url(${cardData.url})`,
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
                                marginLeft:"5px",
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
	);
}

export default PictureCard;
