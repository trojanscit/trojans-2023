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
	CodersChemistry,
	CleverBot,
	HuntForTheHidden,
	CodeJigsaw,
	FinalDraft,
	RhythmRivalry,
];

const images1 = [
	Comicquiz,
	GullyCricket,
	OkFine,
	Shipwreck,
	ShutterstopOnline,
	Squidgame,
	Talentron,
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
				slidesPerView={1}
				spaceBetween={10}
				centeredSlides={true}
				navigation={true}
				autoplay={true}
				pagination={{
					dynamicBullets: true,
				}}
				loop={true}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper bg-transparent"
			>
				{images.map((image, index) => {
					return (
						<>
							<SwiperSlide key={index}>
								<img src={image} alt="" id="img_swiper" />
							</SwiperSlide>
						</>
					);
				})}
			</Swiper>
			{/* <div>
				<button onClick={handlePrev} id="slider_button_prev">
					{"<"}
				</button>
				<button onClick={handleNext} id="slider_button_next">
					{">"}
				</button>
			</div> */}
		</div>
	);
};

export default ImageSwiper;
