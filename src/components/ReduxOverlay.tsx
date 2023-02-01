import { changeOverlay } from "@/redux";
import { connect } from "react-redux";
import React from "react";

function ReduxOverlay(props: any) {
	return (
		<div>
			<p>here : {props.overlay?.title}</p>
			<button
				onClick={()=>props.changeOverlay({
					copyright: "Yannick Akar",
					date: "2022-10-04",
					explanation:
						"The whole thing looks like an eagle.  A closer look at the Eagle Nebula's center, however, shows the bright region is actually a window into the center of a larger dark shell of dust.  Through this window, a brightly-lit workshop appears where a whole open cluster of stars is being formed.  In this cavity tall pillars and round globules of dark dust and cold molecular gas remain where stars are still forming.  Paradoxically, it is perhaps easier to appreciate this impressive factory of star formation by seeing it without its stars -- which have been digitally removed in the featured image. The Eagle emission nebula, tagged M16, lies about 6500 light years away, spans about 20 light-years, and is visible with binoculars toward the constellation of the Serpent (Serpens).  Creating this picture involved over 22 hours of imaging and combining colors emitted specifically by hydrogen (red), and oxygen (blue).",
					hdurl:
						"https://apod.nasa.gov/apod/image/2210/M16Eagle_Akar_3365_starless.jpg",
					media_type: "image",
					service_version: "v1",
					title: "Star-Forming Eagle Nebula without Stars",
					url: "https://apod.nasa.gov/apod/image/2210/M16Eagle_Akar_960_starless.jpg",
				})}
			>
				click here to dispatch
			</button>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		overlay: state.overlay.overlay,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		changeOverlay: (selectedImage: any) =>
			dispatch(changeOverlay(selectedImage)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxOverlay);
