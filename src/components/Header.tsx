import { Col, Row } from "antd";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Header() {
	return (
		<div style={{ padding: "2rem" }}>
			<Row justify="space-between" align="middle" gutter={16}>
				<Col span={6}>
					<Image
						src="/logo.png"
						alt="NASA Logo"
						width={100}
						height={24}
						priority
					/>
					<p className={inter.className}>App by Himandri Sharma</p>
				</Col>
				<Col span={8} flex="none">
					<h2 className={inter.className}>Astronomy Picture Of The Day</h2>
				</Col>
			</Row>
		</div>
	);
}

export default Header;
