import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import YouTube from "react-youtube";

function details(props: any) {
	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		},
	};
	function onReady(event: any) {
		event.target.pauseVideo();
	}
	function youtube_parser(url: String) {
		var regExp =
			/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return match && match[7].length == 11 ? match[7] : "";
	}
	return (
		<div>
			{Object.keys(props.overlay).length === 0 ? (
				<h3>Please Click on a Image to choose which details you want.</h3>
			) : props.overlay?.media_type === "image" ? (
				<Image
					loader={() => props.overlay.url}
					src={props.overlay.url}
					alt="Image from NASA"
					fill
				/>
			) :
			props.overlay?.media_type === "video" ? (
				<YouTube
					videoId={youtube_parser(props.overlay.url)}
					opts={opts}
					onReady={onReady}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		overlay: state.overlay.overlay,
	};
};
export default connect(mapStateToProps)(details);
