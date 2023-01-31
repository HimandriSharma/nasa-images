import React, { useState } from "react";
import PictureCard from "./PictureCard";

const sampleData = [
	{
		copyright: "Tunc Tezel",
		date: "2022-10-01",
		explanation:
			"Observe the Moon every night and you'll see its visible sunlit portion gradually change. In phases progressing from New Moon to Full Moon to New Moon again, a lunar cycle or lunation is completed in about 29.5 days. Top left to bottom right, this 7x4 matrix of telescopic images captures the range of lunar phases for 28 consecutive nights, from the evening of July 29 to the morning of August 26, following an almost complete lunation. No image was taken 24 hours or so just after and just before New Moon, when the lunar phase is at best a narrow crescent, close to the Sun and really hard to see. Finding mostly clear Mediterranean skies required an occasional road trip to complete this lunar cycle project, imaging in early evening for the first half and late evening and early morning for the second half of the lunation. Since all the images are registered at the same scale you can use this matrix to track the change in the Moon's apparent size during the single lunation. For extra credit, find the lunar phase that occurred closest to perigee.  Tonight: International Observe the Moon Night",
		hdurl: "https://apod.nasa.gov/apod/image/2210/Lu20220729-0826.jpg",
		media_type: "image",
		service_version: "v1",
		title: "Lunation Matrix",
		url: "https://apod.nasa.gov/apod/image/2210/Lu20220729-0826_1050.jpg",
	},
	{
		date: "2022-10-02",
		explanation:
			"What could shoot out a neutron star like a cannon ball? A supernova.  About 10,000 years ago, the supernova that created the nebular remnant CTB 1 not only destroyed a massive star but blasted its newly formed neutron star core -- a pulsar -- out into the Milky Way Galaxy.  The pulsar, spinning 8.7 times a second, was discovered using downloadable software Einstein@Home searching through data taken by NASA's orbiting Fermi Gamma-Ray Observatory.  Traveling over 1,000 kilometers per second, the pulsar PSR J0002+6216 (J0002 for short) has already left the supernova remnant CTB 1, and is even fast enough to leave our Galaxy. Pictured, the trail of the pulsar is visible extending to the lower left of the supernova remnant.  The featured image is a combination of radio images from the VLA and DRAO radio observatories, as well as data archived from NASA's orbiting IRAS infrared observatory. It is well known that supernovas can act as cannons, and even that pulsars can act as cannonballs -- what is not known is how supernovas do it.",
		hdurl:
			"https://apod.nasa.gov/apod/image/2210/CannonSupernova_English_8404.jpg",
		media_type: "image",
		service_version: "v1",
		title: "Supernova Cannon Expels Pulsar J0002",
		url: "https://apod.nasa.gov/apod/image/2210/CannonSupernova_English_960.jpg",
	},
	{
		date: "2022-10-03",
		explanation:
			"What mysteries might be solved by peering into this crystal ball?  In this case, the ball is actually a moon of Jupiter, the crystals are ice, and the moon is not only dirty but cracked beyond repair.  Nevertheless, speculation is rampant that oceans exist under Europa's fractured ice-plains that could support life.  Europa, roughly the size of Earth's Moon, is pictured here in an image taken a few days ago when the Jupiter-orbiting robotic spacecraft Juno passed within 325 kilometers of its streaked and shifting surface. Underground oceans are thought likely because Europa undergoes global flexing due to its changing gravitational attraction with Jupiter during its slightly elliptical orbit, and this flexing heats the interior. Studying Juno's close-up images may further humanity's understanding not only of Europa and the early Solar System but also of the possibility that life exists elsewhere in the universe.",
		hdurl: "https://apod.nasa.gov/apod/image/2210/Europa_JunoLuck_2611.jpg",
		media_type: "image",
		service_version: "v1",
		title: "Jupiter's Europa from Spacecraft Juno",
		url: "https://apod.nasa.gov/apod/image/2210/Europa_JunoLuck_1080.jpg",
	},
	{
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
	},
	{
		date: "2022-10-05",
		explanation:
			"What happens if you crash a spaceship into an asteroid? In the case of NASA's DART spaceship and the small asteroid Dimorphos, as happened last week, you get quite a plume. The goal of the planned impact was planetary protection -- to show that the path of an asteroid can be slightly altered, so that, if done right, a big space rock will miss the Earth. The high brightness of the plume, though, was unexpected by many, and what it means remains a topic of research. One possibility is that 170-meter wide Dimorphos is primarily a rubble pile asteroid and the collision dispersed some of the rubble in the pile.  The featured time-lapse video covers about 20 minutes and was taken from the Les Makes Observatory on France's Reunion Island, off the southeast coast of southern Africa.  One of many Earth-based observatories following the impact, the initial dot is primarily Dimorphos's larger companion: asteroid Didymos. \t Most recently, images show that the Didymos - Dimorphos system has developed comet-like tails.    DART Impact on Dimorphos: Notable images submitted to APOD",
		media_type: "video",
		service_version: "v1",
		thumbnail_url: "https://img.youtube.com/vi/MC8f6gxqn3s/0.jpg",
		title: "Expanding Plume from DART's Impact",
		url: "https://www.youtube.com/embed/MC8f6gxqn3s?ref=0",
	},
	{
		copyright: "Michael Sherick",
		date: "2022-10-06",
		explanation:
			"NGC 4631 is a big beautiful spiral galaxy. Seen edge-on, it lies only 25 million light-years away in the well-trained northern constellation Canes Venatici. The galaxy's slightly distorted wedge shape suggests to some a cosmic herring and to others its popular moniker, The Whale Galaxy. Either way, it is similar in size to our own Milky Way. In this sharp color image, the galaxy's yellowish core, dark dust clouds, bright blue star clusters, and red star forming regions are easy to spot. A companion galaxy, the small elliptical NGC 4627 is just above the Whale Galaxy. Faint star streams seen in deep images are the remnants of small companion galaxies disrupted by repeated encounters with the Whale in the distant past. The Whale Galaxy is also known to have spouted a halo of hot gas glowing in X-rays.",
		hdurl: "https://apod.nasa.gov/apod/image/2210/ngc4631_sherick.jpg",
		media_type: "image",
		service_version: "v1",
		title: "NGC 4631: The Whale Galaxy",
		url: "https://apod.nasa.gov/apod/image/2210/ngc4631_sherick1024.jpg",
	},
	{
		copyright: "Andrew McCarthy",
		date: "2022-10-07",
		explanation:
			"At opposition, opposite the Sun in Earth's sky, late last month Jupiter is also approaching perihelion, the closest point to the Sun in its elliptical orbit, early next year. That makes Jupiter exceptionally close to our fair planet, currently resulting in excellent views of the Solar System's ruling gas giant. On September 27, this sharp image of Jupiter was recorded with a small telescope from a backyard in Florence, Arizona. The stacked video frames reveal the massive world bounded by planet girdling winds. Dark belts and light zones span the gas giant, along with rotating oval storms and its signature Great Red Spot. Galilean moon Ganymede is below and right in the frame. The Solar System's largest moon and its shadow are in transit across the southern Jovian cloud tops.",
		hdurl: "https://apod.nasa.gov/apod/image/2210/JovianEclipse.jpg",
		media_type: "image",
		service_version: "v1",
		title: "In Ganymede's Shadow",
		url: "https://apod.nasa.gov/apod/image/2210/JovianEclipse1024c.jpg",
	},
];

function HorizontalScroll() {
	const [scrollData, setScrollData] = useState(sampleData);
	return (
		<div style={{display:"flex", flexDirection:"row",overflow: "auto",whiteSpace:"nowrap", scrollbarWidth:"none"}}>
			{scrollData.map((val, i) => {
				return <div style={{margin:"1rem"}}><PictureCard /></div>;
			})}
		</div>
	);
}

export default HorizontalScroll;
