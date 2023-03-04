import React, {useRef} from "react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "../styles/eventshome.css";
import logo_round from "../Assets/Trojans_logo/trojans_logo.webp";
import cit_logo from "../Assets/Trojans_logo/cit_white_logo.webp";

// Technical
import CodersChemistry from "../images/tech/codersChemistry.jpg";
import CleverBot from "../images/tech/cleverBot.jpg";
import HuntForTheHidden from "../images/tech/huntForTheHidden.jpg";
import CodeJigsaw from "../images/tech/codeJigsaw.jpg";
import FinalDraft from "../images/tech/finalDraft.jpg";
import RhythmRivalry from "../images/tech/rhythmRivalry.jpg";
// Non Technical
import Comicquiz from "../images/nonTech/comicquiz.jpg";
import GullyCricket from "../images/nonTech/gullyCricket.jpg";
import OkFine from "../images/nonTech/okFine.jpg";
import Shipwreck from "../images/nonTech/shipwreck.jpg";
import ShutterstopOnline from "../images/nonTech/shutterstopOnline.jpg";
import Squidgame from "../images/nonTech/squidgame.jpg";
import Talentron from "../images/nonTech/talentron.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = [
	CleverBot,
	CodersChemistry,
	Comicquiz,
	ShutterstopOnline,
	OkFine,
	Shipwreck,
	GullyCricket,
	HuntForTheHidden,
	CodeJigsaw,
	FinalDraft,
	RhythmRivalry,
	Talentron,
	Squidgame,
];

const ImageSwiper = () => {
	const swiperRef = useRef(null);

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev();
		}
	};

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	return (
		<div>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={false}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className="mySwiper"
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				{images.map((image, index) => {
					return (
						<SwiperSlide 
            style={{position: "relative"}}
            >
							<img
								src={image}
								style={{top: 0, left: 0, position: "absolute"}}
								alt=""
								id="img_swiper"
							/>
						</SwiperSlide>
					);
				})}
				{/* <SwiperSlide>
					<img
						src="https://res.cloudinary.com/trojanscit/image/upload/v1677922255/tech/codersChemistry_jyjba0.jpg"
						alt=""
						id="img_swiper"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/trojanscit/image/upload/v1677922257/tech/cleverBot_py1kpk.jpg"
						alt=""
						id="img_swiper"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src={ShutterstopOnline} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Comicquiz} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={OkFine} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Shipwreck} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={GullyCricket} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={HuntForTheHidden} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://res.cloudinary.com/trojanscit/image/upload/v1677922256/tech/code_jigsaw_mnsgaz.jpg"
						alt=""
						id="img_swiper"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src={FinalDraft} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={RhythmRivalry} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Talentron} alt="" id="img_swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Squidgame} alt="" id="img_swiper" />
				</SwiperSlide> */}
			</Swiper>
			<div>
				<button onClick={handlePrev} id="slider_button_prev">
					{"<"}
				</button>
				<button onClick={handleNext} id="slider_button_next">
					{">"}
				</button>
			</div>
		</div>
	);
};

export default ImageSwiper;
