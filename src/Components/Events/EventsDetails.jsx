import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navbar from "../../Pages/navbar/navbar";
import "../../styles/eventsMainPage.css";

function EventsDetails() {
  const { eventType } = useParams();
  useEffect(() => {
    console.log(eventType);
  }, []);
  const [popBox, setPopBox] = useState(false);
  const [popupContent, setPopupContent] = useState();
  const allTeams = [
    {
      event_name: "Coders Chemistry ",
      event_description: `
      A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.
      `,
      event_coordinators: `
      	Abii Aravindh R - 9360051435
      	Hariprasad R - 75501 60349
      	KavyaDharshini S - 99440 98100      
      `,
      event_photo:
        "https://thumbs.dreamstime.com/b/happy-cute-kids-boy-girl-using-tablet-vector-164556426.jpg",
      event_type: "technical",
    },
    {
      event_name: "CLEVER BOT ",
      event_description: `
      CLEVER BOT
•	The game consists of three rounds.
•	Each team consists of maximum three members.
•	1st round will be a technical quiz round. The question in this round will be based on Python, C and Java (Brain burst). 
•	2nd round will be based on crossword puzzle (Crossers). 
•	3rd round is image quiz round. 
•	Each round has a time limit of 30 mins.
•	Mobile phone usage is strictly prohibited.
`,
      event_coordinators: `
	 
	  	Srilatha G - 86673 20763
	  	Sameerul hak  S - 99440 12249
	  	Vishal R K - 95661 89750
		   
      `,
      event_photo:
        "https://img.freepik.com/vetores-gratis/participantes-felizes-jogando-um-jogo-de-perguntas-no-programa-de-tv-host-com-microfone-fazendo-perguntas_74855-10770.jpg?w=2000",
      event_type: "technical",
    },
    {
      event_name: "Rhythm Rivalry",
      event_description: `
	  Round 1: 
	  •	A set of problems will be given to the participants
	  •	Music will be Played in the background alternatively.
	  •	The first participant must stop coding when the first song ends, and the other participant must continue. 
	  •	At the end of all music the scores are calculated.
	  Round 2:
	  •	One participant should find the missing line in the song (time: 1min)
	  •	Both members can begin coding after they have found the music.
	  •	The combined scores from the music and coding rounds are considered.
	  •	Top scorers will qualify to the final round.
	  Round 3:
	  •	Each team will be given a set of pictures (time :1min)
	  •	They should link these images together to find the song.
	  •	They can begin coding together once they've found the music.
	  •	The team with the highest score will be declared as the winner
	  `,
      event_coordinators: `
	  	Prasanna R V - 86670 57114
	  	Vinay Saran J J - 87783 57595
	  	Abishua Bezalel Raj J - 99621 67469
		  
      `,
      event_photo:
        "https://img.freepik.com/premium-vector/happy-cute-kid-girl-listen-good-music_97632-1517.jpg?w=2000",
      event_type: "technical",
    },
    {
      event_name: "The Hunt For The Hidden  ",
      event_description: `
	  •	A team consists of 2 members
	  •	The first team to solve the quest by finding all the clues will be declared as winner
	  •	It has only one round where there are series of tasks with many problems which should be solved in order in a flow to find the final clue and solve the quest
	  
      `,
      event_coordinators: `
	  	Varun Kumar G - 82488 97094
	  	Pavan Kalyan D - 99405 74161
		  
      `,
      event_photo:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-treasure-hunt_23-2149318676.jpg?w=2000",
      event_type: "technical",
    },
    {
      event_name: "Code Jigsaw ",
      event_description: `
      Total rounds: 3
General rules for all the rounds:
•	Participants are allowed to compete individually.
•	At the end of each round based on the score, participants can be qualified for the further rounds.
•	The mini games conducted in the middle of the rounds and the score obtained in those can be noted and added.
Round I:
•	The participant can solve the questions available in their monitor.
•	The entire code will be jumbled, not as a whole but line by line.
•	In between the round, mini games will be conducted.

Round II:
•	Qualified participants can take part in 2nd round.
•	The code will be jumbled and also contains some words missing in it.
•	Coder has to find the missing part and fix it.
Round III:
•	In third and final round, the coder will be given a box contain the broken code and he must fix the code. (Like Jigsaw Puzzle)
•	They should be able to generate the output.
•	Score will be given to those who can solve the puzzle

      `,
      event_coordinators: `
	  	Sree Raja Krishna S - 93841 88497
	  	Naveen R - 95661 92553
		   
      `,
      event_photo:
        "https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180213789/95503632-4-%EC%A1%B0%EA%B0%81-%ED%8D%BC%EC%A6%90-%ED%8D%BC%EC%A6%90-%EA%B2%8C%EC%9E%84-%EC%9A%94%EC%86%8C-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%93%9C%EB%A1%9C%EC%9E%89-%EC%BB%AC%EB%9F%AC-%EB%94%94%EC%9E%90%EC%9D%B8.jpg",
      event_type: "technical",
    },
    {
      event_name: "FinalDraft",
      event_description: `
      •	The participants have to submit their abstract and papers in the form of
•	PPT through the google form.
•	Maximum team members allowed will be 3
•	The presentation should be done within 5 minutes.
•	3 minutes of time will be allotted to answer the questions posed by the judges.
•	Usage of offensive language and political references are prohibited.
•	Violators of the above-mentioned rules, will be banned from further participation
in the event. No refunds will be provided. 

      `,
      event_coordinators: `
	  	Pawan Kalyan B - 93453 55391     
      `,
      event_photo:
        "https://img.freepik.com/premium-vector/businessman-presenting-marketing-data-projector-screen_181870-99.jpg",
      event_type: "technical",
    },
    {
      event_name: "SHUTTER STOP  ",
      event_description: `
	  RULES FOR SHUTTER STOP:
	  •	Photos will be sent through email.
	  •	Winners will be based on likes, polling or the judge's decision.
	  •	Only single entry is allowed.
	  •	Participants can either use their mobile phones or DSLR cameras to take the photographs. There is no theme to be followed. 
	  •	Only colour grading is allowed.
	  •	A Registration fee of Rs. 30 must be paid in order to participate in the contest. 
	  •	Take a screenshot of the payment featuring your full name,  
	   department, year and college name. 
	  •	Once the payment is done, kindly fill out the google form provided in the bio of our page. 
	  •	Your photograph can be submitted through the registration google form. It must be original and contain no watermarks (Violators will be banned from participating in the event.) 
	  •	Kindly cate will be provided to all the participants. make sure to attach the screenshot of the payment along with your submission in the google form. 
	  •	The link will be deactivated after the last date of submission.
	  •	The post that grabs the highest likes and favour of the judge will be selected as the winner. 
	  •	The first and second-prize winners will be notified through  
	  WhatsApp and email. 
	  •	Participation e-certificate will be provided to all the participants.
	  n
	  1.1. SHUTTER STOP (Offline)
	  
	  RULES FOR SHUTTER STOP: 
	  •	Participants must bring their own mobile/DSLR
	  •	This is entirely an offline event, participants must be in the venue
	  •	A Single theme will be given 
	  •	The best photo based on the theme will be awarded 
	  •	Basic editing is acceptable.
	  
      `,
      event_coordinators: `
      SARABESWARAN D – 8489267799
GOKUL – 9345333651
    
      `,
      event_photo:
        "https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg?w=2000",
      event_type: "non-technical",
    },
    {
      event_name: "TALENTRON",
      event_description: `
	  RULES FOR TALENT HUNT: 
	  •	Participants can showcase any talents.
	  •	Both solo and group performances are allowed.
	  •	Winners will be based on the quality of the performances.
	  •	Offensive performance is not encouraged.
  
      `,
      event_coordinators: `
	  JAYAKRISHNA - 9344993581
	  ALPHONES - 6383474955
	  
    
      `,
      event_photo:
        "https://t3.ftcdn.net/jpg/02/51/77/16/360_F_251771624_ftG5JHQ6PWZ4XdmSJDz7Cljbf3tqq2ML.jpg",
      event_type: "non-technical",
    },
    {
      event_name: "SHIP WRECK",
      event_description: `
	  RULES FOR SHIP WRECK: 
•	Characters will be given on the spot 
•	Both fictional and non-fictional will be given 
•	Unparliamentary words are not encouraged 
•	Preparation time: 2 minutes

      `,
      event_coordinators: `
	  SUMYUKTHA - 8428405548
	  KAVYA - 7305641550
	  DHARSHINI - 8248378703
	  
    
      `,
      event_photo:
        "https://media.istockphoto.com/id/1253311725/vector/a-broken-ship-in-the-sea-vector-illustration-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=OCxA1wLSEY76SGFQeGj3oGQP02i-qiNmq86RelpAf80=",
      event_type: "non-technical",
    },
    {
      event_name: "GULLY CRICKET ",
      event_description: `
	  RULES FOR GULLY CRICKET: 
•	Gully cricket rules (1 pitch, full toss out away the boundary) 
•	Underarm only 
•	Continuous 3 misses will be counted as a wicket 
•	Further rules will be said on the day of the event.

      `,
      event_coordinators: `
	  ABISHIEK – 9345417742
	  MUTHUKANNAN – 7708586876
	  
    
      `,
      event_photo:
        "https://img.freepik.com/premium-vector/batsman-playing-cricket-sports-with-ball-stick-flat-cartoon-field-background-illustration_2175-5949.jpg?w=2000",
      event_type: "non-technical",
    },
    {
      event_name: "COMIC QUIZ",
      event_description: `
	  Duration: 3 hours

RULES FOR COMIC QUIZ
•	Individual participants only.
•	Theme - Marvel, DC.
•	The Quiz will be conducted on three levels.
•	Time for answering questions will be 15 seconds.
•	Points will be allocated based on the difficulty of the round.
•	For every round points will be reset.
•	If a team gives a wrong answer the chance goes to the next team.
•	Questions can be asked in pictorial format or dialogues.
•	Questions can be asked from any point from the movie.
•	Decision made by the quiz organizer/judge will be final


	  
      `,
      event_coordinators: `
	  DHANUSH RAJ - 6383406091 
	  SRUTHI – 9344949063
	  
    
      `,
      event_photo:
        "https://images.thedirect.com/media/article_full/who-are-the-winners-and-losers-for-marvel-and-dc-in-2022_who-are-the-winner_Ryu1qXx.jpg",
      event_type: "non-technical",
    },
    {
      event_name: "SQUID GAME   ",
      event_description: `
	  RULES FOR SQUID GAME
	  •	Individual clash-off of 5 levels.
	  •	Elimination comes with each round.
	  •	While the mystery arrives, get ready to give it a try.
	  
      `,
      event_coordinators: `
      GHOUSHIK – 8220140665
MUJAMMIL – 8681039888      `,
      event_photo:
        "https://static.vecteezy.com/system/resources/previews/003/692/529/original/cute-squid-game-cartoon-character-illustration-free-vector.jpg",
      event_type: "non-technical",
    },
    {
      event_name: "OKAY FINE   ",
      event_description: `
	  RULES FOR OKAY FINE

•	A team of two games.
•	It carries 2 rounds- Flip Flop & Guess Box (elimination includes).
•	As the question arises, be ready for the surprises.

      `,
      event_coordinators: `
	  VAISHNAVI – 9769038810
	  EASHWAR – 9514955029
	  
    
      `,
      event_photo:
        "https://st4.depositphotos.com/7874342/24243/v/450/depositphotos_242439692-stock-illustration-happy-man-claps-his-hands.jpg",
      event_type: "non-technical",
    },
  ];

  return (
    <>
      {/* {data.map((events, index) => {
				if (events.event === eventType) {
					return (
						<>
							<h1>{events.name}</h1>
						</>
					);
				}
			})} */}

      <Navbar />

      <div className="section-fluid-main">
        <div className="bg"></div>
        <div className="main-event-type">
          <h1>
            {eventType == "technical"
              ? "TECHNICAL EVENTS"
              : "NON TECHNICAL EVENTS"}
          </h1>
        </div>
        <div className="section-row">
          {allTeams.map((event) => {
            if (event.event_type === eventType) {
              return (
                <>
                  <Helmet>
                    <title>{eventType.toUpperCase()} | Trojans</title>
                  </Helmet>
                  {popBox ? (
                    <div className="popUpBoxEvents">
                      <div className="mainBox">
                        <img
                          onClick={() => setPopBox(!popBox)}
                          className="close_button"
                          src="https://img.icons8.com/windows/32/ffffff/macos-close.png"
                          alt=""
                        />
                        <div className="mainContent">
                          <h1
                            style={{
                              textAlign: "center",
                              fontSize: 56,
                            }}>
                            {popupContent.event_name}
                          </h1>
                          <div
                            style={{
                              paddingBottom: 5,
                            }}>
                            <h3
                              style={{
                                fontSize: 40,
                              }}>
                              Duration : 1.30 hrs
                            </h3>
                          </div>
                          <div
                            style={{
                              paddingBottom: 5,
                            }}>
                            <h3
                              style={{
                                fontSize: 30,
                              }}>
                              Timing : 10am to 12.30pm
                            </h3>
                          </div>
                          <div
                            style={{
                              paddingBottom: 5,
                            }}>
                            {/* <p style={{fontSize: 20}}>
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Inventore beatae
														debitis, officia labore
														cupiditate accusamus.
														Explicabo totam quisquam
														earum quibusdam minus
														dolores facere dolorum,
														fugiat omnis, dicta
														facilis iure cum?
													</p>
													<p style={{fontSize: 20}}>
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Inventore beatae
														debitis, officia labore
														cupiditate accusamus.
														Explicabo totam quisquam
														earum quibusdam minus
														dolores facere dolorum,
														fugiat omnis, dicta
														facilis iure cum?
													</p> */}
                            <pre
                              style={{
                                fontSize: 20,
                                whiteSpace: "pre-wrap",
                              }}>
                              {popupContent.event_description}
                            </pre>
                          </div>
                          <div>
                            <h2
                              style={{
                                fontSize: 20,
                              }}>
                              Student Co-ordinators
                            </h2>
                            <div>
                              {/* <p
															style={{
																fontSize: 20,
															}}
														>
															Name : Prasanna
														</p>
														<p
															style={{
																fontSize: 20,
															}}
														>
															Phone No :
															9994999995
														</p> */}
                              <p
                                style={{
                                  fontSize: 20,
                                }}>
                                {popupContent.event_coordinators}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div
                    className="section-col"
                    onClick={() => {
                      setPopupContent(event);
                      setPopBox(true);
                    }}>
                    <div className="section">
                      <div className="section-in">
                        <img src={event.event_photo} alt="" />
                        <p className="image-title">{event.event_name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hover-text">
                    <h2>{event.event_name}</h2>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default EventsDetails;
