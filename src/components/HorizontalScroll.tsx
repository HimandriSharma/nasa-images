import React, { useState } from "react";
import PictureCard from "./PictureCard";


function HorizontalScroll({imageData}:any) {
	const [scrollData, setScrollData] = useState(imageData);
	return (
		<div style={{display:"flex", flexDirection:"row",overflow: "auto",whiteSpace:"nowrap", scrollbarWidth:"none"}}>
			{scrollData.map((val:any) => {
				return <div style={{margin:"1rem"}}><PictureCard image={val}/></div>;
			})}
		</div>
	);
}

export default HorizontalScroll;
