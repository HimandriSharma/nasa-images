import { Col, Row } from "antd";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const sampleData = {
	copyright: "Tunc Tezel",
	date: "2022-10-01",
	explanation:
		"Observe the Moon every night and you'll see its visible sunlit portion gradually change. In phases progressing from New Moon to Full Moon to New Moon again, a lunar cycle or lunation is completed in about 29.5 days. Top left to bottom right, this 7x4 matrix of telescopic images captures the range of lunar phases for 28 consecutive nights, from the evening of July 29 to the morning of August 26, following an almost complete lunation. No image was taken 24 hours or so just after and just before New Moon, when the lunar phase is at best a narrow crescent, close to the Sun and really hard to see. Finding mostly clear Mediterranean skies required an occasional road trip to complete this lunar cycle project, imaging in early evening for the first half and late evening and early morning for the second half of the lunation. Since all the images are registered at the same scale you can use this matrix to track the change in the Moon's apparent size during the single lunation. For extra credit, find the lunar phase that occurred closest to perigee.  Tonight: International Observe the Moon Night",
	hdurl: "https://apod.nasa.gov/apod/image/2210/Lu20220729-0826.jpg",
	media_type: "image",
	service_version: "v1",
	title: "Lunation Matrix",
	url: "https://apod.nasa.gov/apod/image/1301/cygnuswall_pavelchak_1600.jpg",
};
function Spotlight() {
	const [spot, setSpot] = useState(sampleData);
	return (
		<div style={{ padding: "2rem" }}>
			<Row justify="space-between" align="middle" gutter={16}>
				<Col sm={24} md={10} >
					<h2 className={inter.className}>{spot.title}</h2><br/>
					<p className={inter.className}>{spot.explanation}</p><br/>
                    <p className={inter.className}>authored by <b>{spot.copyright}</b></p>
				</Col>
				<Col sm={16} md ={12} lg={10}>
						<Image
							loader={() => spot.url}
							src={spot.url}
							alt="NASA Logo"
							width={500}
							height={350}
                            style={{borderRadius:"1rem"}}
						/>
					{/* <Image
						src={spot.url}
						alt="NASA Logo"
						width={100}
						height={24}
						priority
					/> */}
				</Col>
			</Row>
		</div>
	);
}

export default Spotlight;
