import React, {useState, forwardRef, useRef} from 'react';
import Marquee from 'react-fast-marquee';
import About from './About';
import AboutSecond from './AboutSecond';
import AboutThird from './AboutThird';
import AboutFourth from './AboutFourth';
import ReviewCard from './ReviewCard';
import BottomToTop from './BottomToTop';
import Corousel from './Corousel'
import "./HomePage.css";



const yellowInitial = { backgroundColor: "#FDBA2F", color: "#000000" };
const yellowMid = {backgroundColor: "#FDBA2F" ,color: "#ffffff"};
const yellowFinal = {backgroundColor: "#000000" ,color: "#ffffff", borderColor: "#FDBA2F", borderRadius: "7px"};
const transparentInitial = { backgroundColor: "transparent", color: "#ffffff", borderColor: "#ffffff", borderRadius: "7px" };
//const transparentMid = { backgroundColor: "transparent", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };
const transparentFinal = { backgroundColor: "#FDBA2F", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };
const greenInitial = { backgroundColor: "#008000", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };
const greenMid = { backgroundColor: "#008000", color: "#ffffff", borderColor: "#008000", borderRadius: "7px" };
const greenFinal = { backgroundColor: "#000000", color: "#ffffff", borderColor: "#008000", borderRadius: "7px" };
const bgColorFirstInitial = {color:"#ffffff", backgroundColor:"transparent", height:"50px", width:"165px", padding:"0", borderColor:"#626262"};
const bgColorFirstFinal = {color:"#FFDD96", backgroundColor:"#000000", height:"50px", width:"165px", padding:"0", borderColor:"#FDBA2F"};
const bgColorSecondInitial = {color:"#ffffff", backgroundColor:"transparent", height:"50px", width:"165px",  padding:"0", borderColor:"#626262"};
const bgColorSecondFinal = {color:"#FFDD96", backgroundColor:"#000000", height:"50px", width:"165px", padding:"0", borderColor:"#FDBA2F"};
const bgColorThirdInitial = {color:"#ffffff", backgroundColor:"transparent", height:"50px", width:"165px", padding:"0", borderColor:"#626262"};
const bgColorThirdFinal = {color:"#FFDD96", backgroundColor:"#000000", height:"50px", width:"165px", padding:"0", borderColor:"#FDBA2F"};
const bgColorFourthInitial = {color:"#ffffff", backgroundColor:"transparent", height:"50px", width:"165px", padding:"0", borderColor:"#626262"};
const bgColorFourthFinal = {color:"#FFDD96", backgroundColor:"#000000", height:"50px", width:"165px", padding:"0", borderColor:"#FDBA2F"};

const HomePage = forwardRef((props, ref) => {

  const callNowHomeRef = useRef(null);
  const callNowHomeRippleRef = useRef(null);

  const callNowHomeHandleClick = (event) => {
    const callNowHome = callNowHomeRef.current;
    const callNowHomeRipple = callNowHomeRippleRef.current;
    const callNowHomeRect = callNowHome.getBoundingClientRect();
    const {left, top} = callNowHomeRect;
    const callNowHomeLeftPosition = event.clientX - left;
    const callNowHomeTopPosition = event.clientY - top;
    callNowHomeRipple.style.left = callNowHomeLeftPosition + "px";
    callNowHomeRipple.style.top = callNowHomeTopPosition + "px";
    callNowHomeRipple.classList.add("callNowHomeActive");
    setTimeout(() => {
      callNowHomeRipple.classList.remove("callNowHomeActive");
    },1000);
    setColor(yellowMid);
    setTimeout(() => {
      setColor(yellowFinal);
    },600);
  }

  const callNowHomeHandleClickRemove = () => {
    const callNowHomeRipple = callNowHomeRippleRef.current;
    setColor(yellowInitial);
    callNowHomeRipple.classList.remove("callNowHomeActive");
  }

  const callNowHomeClick = () => {
    setColor(yellowMid);
    setTimeout(() => {
      setColor(yellowInitial);
    },600);
  }

  const callNowHomeClickRemove = () => {
    setColor(yellowInitial);
  }


  const whatsappHomeRef = useRef(null);
  const whatsappHomeRippleRef = useRef(null);

  const whatsappHomeHandleClick = (event) => {
    const whatsappHome = whatsappHomeRef.current;
    const whatsappHomeRipple = whatsappHomeRippleRef.current;
    const whatsappHomeRect = whatsappHome.getBoundingClientRect();
    const {left, top} = whatsappHomeRect;
    const whatsappHomeLeftPosition = event.clientX - left;
    const whatsappHomeTopPosition = event.clientY - top;
    whatsappHomeRipple.style.left = whatsappHomeLeftPosition + "px";
    whatsappHomeRipple.style.top = whatsappHomeTopPosition + "px";
    whatsappHomeRipple.classList.add("whatsappHomeActive");
    setTimeout(() => {
      whatsappHomeRipple.classList.remove("whatsappHomeActive");
    },1000);
    setColorr(greenMid);
    setTimeout(() => {
      setColorr(greenFinal);
    },600);
  }

  const whatsappHomeHandleClickRemove = () => {
    const whatsappHomeRipple = whatsappHomeRippleRef.current;
    setColorr(greenInitial);
    whatsappHomeRipple.classList.remove("whatsappHomeActive");
  }

  const whatsappHomeClick = () => {
    setColorr(greenMid);
    setTimeout(() => {
      setColorr(greenInitial);
    },600);
    
  }

  const whatsappHomeClickRemove = () => {
    setColorr(greenInitial);
  }

  const letsWorkTogetherRef = useRef(null);
  const letsWorkTogetherRippleRef = useRef(null);

  const letsWorkTogetherHandleClick = (event) => {
    const letsWorkTogether = letsWorkTogetherRef.current;
    const letsWorkTogetherRipple = letsWorkTogetherRippleRef.current;
    const letsWorkTogetherRect = letsWorkTogether.getBoundingClientRect();
    const {left, top} = letsWorkTogetherRect;
    const letsWorkTogetherLeftPosition = event.clientX - left;
    const letsWorkTogetherTopPosition = event.clientY - top;
    letsWorkTogetherRipple.style.left = letsWorkTogetherLeftPosition + "px";
    letsWorkTogetherRipple.style.top = letsWorkTogetherTopPosition + "px";
    letsWorkTogetherRipple.classList.add("letsWorkTogetherActive");
    setTimeout(() => {
      letsWorkTogetherRipple.classList.remove("letsWorkTogetherActive");
    },1000);
    setColour(transparentInitial);
    setTimeout(() => {
      setColour(transparentFinal);
    },600);
  }

  const letsWorkTogetherHandleClickRemove = () => {
    const letsWorkTogetherRipple = letsWorkTogetherRippleRef.current;
    setColour(transparentInitial);
    letsWorkTogetherRipple.classList.remove("letsWorkTogetherActive");
  }


  const joinUsRef = useRef(null);
  const joinUsRippleRef = useRef(null);

  const joinUsHandleClick = (event) => {
    const joinUs = joinUsRef.current;
    const joinUsRipple = joinUsRippleRef.current;
    const joinUsRect = joinUs.getBoundingClientRect();
    const {left, top} = joinUsRect;
    const joinUsLeftPosition = event.clientX - left;
    const joinUsTopPosition = event.clientY - top;
    joinUsRipple.style.left = joinUsLeftPosition + "px";
    joinUsRipple.style.top = joinUsTopPosition + "px";
    joinUsRipple.classList.add("joinUsActive");
    setTimeout(() => {
      joinUsRipple.classList.remove("joinUsActive");
    },1000);
    setColor(yellowMid);
    setTimeout(() => {
      setColor(yellowFinal);
    },600);
  }

  const joinUsHandleClickRemove = () => {
    const joinUsRipple = joinUsRippleRef.current;
    setColor(yellowInitial);
    joinUsRipple.classList.remove("joinUsActive");
  }

  const dropUsADmRef = useRef(null);
  const dropUsADmRippleRef = useRef(null);

  const dropUsADmHandleClick = (event) => {
    const dropUsADm = dropUsADmRef.current;
    const dropUsADmRipple = dropUsADmRippleRef.current;
    const dropUsADmRect = dropUsADm.getBoundingClientRect();
    const {left, top} = dropUsADmRect;
    const dropUsADmLeftPosition = event.clientX - left;
    const dropUsADmTopPosition = event.clientY - top;
    dropUsADmRipple.style.left = dropUsADmLeftPosition + "px";
    dropUsADmRipple.style.top = dropUsADmTopPosition + "px";
    dropUsADmRipple.classList.add("dropUsADmActive");
    setTimeout(() => {
      dropUsADmRipple.classList.remove("dropUsADmActive");
    },1000);
    setColour(transparentInitial);
    setTimeout(() => {
      setColour(transparentFinal);
    },600);
  }

  const dropUsADmHandleClickRemove = () => {
    const dropUsADmRipple = dropUsADmRippleRef.current;
    setColour(transparentInitial);
    dropUsADmRipple.classList.remove("dropUsADmActive");
  }

  const handleFirstClick = ()=>{
    setHidden(false);
    setBgColorFirst(bgColorFirstFinal);
    setBgColorSecond(bgColorSecondInitial);
    setBgColorThird(bgColorThirdInitial);
    setBgColorFourth(bgColorFourthInitial);
  }

  const handleSecondClick = ()=>{
    setHidden("second");
    setBgColorFirst(bgColorFirstInitial);
    setBgColorSecond(bgColorSecondFinal);
    setBgColorThird(bgColorThirdInitial);
    setBgColorFourth(bgColorFourthInitial);
  }

  const handleThirdClick = ()=>{
    setHidden("third");
    setBgColorFirst(bgColorFirstInitial);
    setBgColorSecond(bgColorSecondInitial);
    setBgColorThird(bgColorThirdFinal);
    setBgColorFourth(bgColorFourthInitial);
  }

  const handleFourthClick = ()=>{
    setHidden("fourth");
    setBgColorFirst(bgColorFirstInitial);
    setBgColorSecond(bgColorSecondInitial);
    setBgColorThird(bgColorThirdInitial);
    setBgColorFourth(bgColorFourthFinal);
  }


  const [color, setColor] =useState(yellowInitial)
  const [colorr, setColorr] =useState(greenInitial)
  const [colour, setColour] =useState(transparentInitial)
  const [hidden, setHidden] =useState(false)
  const [bgColorFirst, setBgColorFirst] = useState(bgColorFirstInitial)
  const [bgColorSecond, setBgColorSecond] = useState(bgColorSecondInitial)
  const [bgColorThird, setBgColorThird] = useState(bgColorThirdInitial)
  const [bgColorFourth, setBgColorFourth] = useState(bgColorFourthInitial)
  
  
  return (
    <>
      <div style={{width:"100vw"}}>

        <div className="page1 gradient1">
          <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="hide" style={{backgroundColor:"#ffffff", color:"#000000", borderRadius:"5px"}}>
              <img className="hideImg" src="plus.jpg" alt="plusstar" style={{margin:"0px"}}/>
              <span className="hideSpan">We help brands go viral on the internet</span>
            </div>
          </div>

          <div className=" page1mainheadingContainer" style={{backgroundColor:"transparent", color:"#ffffff", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
              <h1 className="page1mainheading">The Ultimate Social Media Growth Engine <br/> for Fast-Growing Startups</h1>
          </div>

          <div className=" page1subheadingContainer" style={{backgroundColor:"transparent", color:"#ffffff", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <p><h5 className="page1subheading">Next-Gen Content Marketing Agency<br></br>Empowering Brands Worldwide</h5></p>
          </div>

          <div className="container page1buttons">
            <button className="btn button1 callNowHome" ref={callNowHomeRef} type="button" onMouseEnter={callNowHomeHandleClick} onMouseLeave={callNowHomeHandleClickRemove} style={color}>
              <strong><h5 className="button1h5">Call Now</h5></strong>
              <span ref={callNowHomeRippleRef} className="callNowHomeRippleEffect"></span>
            </button>

            <button className="btn button1 whatsappHome" ref={whatsappHomeRef} type="button" onMouseEnter={whatsappHomeHandleClick} onMouseLeave={whatsappHomeHandleClickRemove} style={colorr}>
              <strong><h5 className="button1h5">Whatsapp</h5></strong>
              <span ref={whatsappHomeRippleRef} className="whatsappHomeRippleEffect"></span>
            </button>
          </div>

          <div className="container page1buttonsSmall">
            <button className="btn button1" type="button" onMouseEnter={callNowHomeClick} onMouseLeave={callNowHomeClickRemove} style={color}>
              <strong><h5 className="button1h5">Call Now</h5></strong>
            </button>

            <button className="btn button1" type="button" onMouseEnter={whatsappHomeClick} onMouseLeave={whatsappHomeClickRemove} style={colorr}>
              <strong><h5 className="button1h5">Whatsapp</h5></strong>
            </button>
          </div>

          <div style={{marginTop:"0px", paddingBottom:"70px"}}>
            <Marquee pauseOnHover={false} play={true}>
              <Corousel heading="Marketing Stories" subHeading="825K followers"/>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="two.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="three.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="four.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="five.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="six.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="seven.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="eight.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="nine.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="ten.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="eleven.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="twelve.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="thirteen.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="fourteen.jpg" alt="one" />
              </div>

              <div style={{margin: "0px 0px"}}>
                <img className="corousel1" src="fifteen.jpg" alt="one" />
              </div>
            </Marquee>
          </div>
  
      </div>



      <div className="page2" ref={ref} style={{backgroundColor:"transparent"}}>

        <div className="container page2headingcontainer" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
          <div className="container my-2" style={{backgroundColor:"transparent", color:"#ffffff", display:"block"}}>
            <p><h1 className="page2heading" style={{color:"#000000"}}>What’s hyperContent All About?</h1></p>
            <p><h3 className="page2subheading" style={{color:"#2a2a2a"}}>Fueling brands' organic growth</h3></p>
          </div>
        </div>

        <div className="container button2Container" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
          <button className="btn button2Btn" type="button" onClick={handleFirstClick} style={bgColorFirst}><h3 className="button2" style={{color:"#898989"}}>Zero-Cost Upskilling</h3></button>
          <button className="btn button2Btn" type="button" onClick={handleSecondClick} style={bgColorSecond}><h3 className="button2" style={{color:"#898989"}}>Futurense US Pathway</h3></button>
          <button className="btn button2Btn" type="button" onClick={handleThirdClick} style={bgColorThird}><h3 className="button2" style={{color:"#898989"}}>Futurense Uni</h3></button>
          <button className="btn button2Btn" type="button" onClick={handleFourthClick} style={bgColorFourth}><h3 className="button2" style={{color:"#898989"}}>Futurense Campus</h3></button>
        </div>

        <div>
          {
            !hidden?<About colour="#1F1F1F" logoUrl="vertical.jpg" heading="Amplifying your brand with engaging content" subHeading="The Only Indian Company that provides FREE Upskilling and Salary!" firstIcon="about1.png" firstFeature="Guaranteed boost in reach and engagement" secondIcon="about2.png" secondFeature="Acceleratig growth and sales with impactful content" thirdIcon="about3.png" thirdFeature="Strenthening brand connection with your target audience" fourthIcon="about4.png" fourthFeature="Free Accommodation & Food" aboutImage="about13.png"/>:null
          }
        </div>

        <div>
          {
            hidden === "second"?<AboutSecond logoUrl="uspathway.png" heading="An Innovative Pathway to Master’s in the US" subHeading="The Only Pathway Builders between IITs/IIMs and Top US Universities!" firstIcon="about5.png" firstFeature="Up to 65% Guaranteed Scholarships" secondIcon="about6.png" secondFeature="Save 6 Months in Duration" thirdIcon="about7.png" thirdFeature="Waiver on GMAT/GRE/IELTS" fourthIcon="about2.png" fourthFeature="3 Year OPT & On-Site Career Assistance" aboutImage="about14.png"/>:null
          }
        </div>

        <div>
          {
            hidden === "third"?<AboutThird logoUrl="uni.png" heading="Second Shot at your IIT Dream!" subHeading="The Only Program That Earns You an IITian Status From Home!" firstIcon="about8.png" firstFeature="Academic PG Programs by TOP IITs" secondIcon="about6.png" secondFeature="Campus Immersions" thirdIcon="about9.png" thirdFeature="Become A Part of IIT Alumni network" fourthIcon="about2.png" fourthFeature="Masterclasses by MAANG Leaders" aboutImage="about15.png"/>:null
          }
        </div>

        <div>
          {
            hidden === "fourth"?<AboutFourth logoUrl="campus.png" heading="Transforming Tech Education" subHeading="The Only B.Tech That Guarantees Placement in Top Fortune 500 Companies." firstIcon="about10.png" firstFeature="Advanced Laboratories" secondIcon="about11.png" secondFeature="Industry Integrated Multidisciplinary Curriculum" thirdIcon="about8.png" thirdFeature="Guaranteed Internships" fourthIcon="about12.png" fourthFeature="Mentorship By Industry Leaders" aboutImage="about16.png"/>:null
          }
        </div>



      </div>


      <div className="page3 gradient6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="page3Container" style={{backgroundColor:"#2E3233", borderRadius:"20px"}}>
        <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="page3SubHeading1" style={{backgroundColor:"transparent", borderRadius:"5px"}}>
            <span className="page3SubHeading1Span1" style={{color:"#888586"}}>Trusted by</span>
            <span className="page3SubHeading1Span2" style={{color:"#ffffff"}}>30+ brands</span>
          </div>
        </div>

          <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className="container page3HeadingContainer" style={{backgroundColor:"transparent", color:"#ffffff", display:"block"}}>
              <p><h1 className="page3Heading">Futurense Understands The Importance Of Branding & Digital Marketing in this new age economy</h1></p>
            </div>
          </div>

          <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className="container" style={{backgroundColor:"transparent", display:"block"}}>
              <p><h3 className="page3SubHeading2span1" style={{color:"#888586"}}>We help your brand outshine your competitors</h3></p>
              <p><h3 className="page3SubHeading2span2" style={{color:"#ffffff"}}>in 90 Days!</h3></p>
            </div>
          </div>



          <div className="container page3Features">

            <div className="container page3fFeature1" style={{display:"flex", alignItems:"center"}}>
              <div className="page3fFeature" style={{borderRadius:"5px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                {/*<i className="fa-solid fa-dollar-sign page3fFeatureimg" style={{marginLeft:"2px", color:"white"}}></i>*/}
                <img src="plus.jpg" alt="page3fFeature" className="page3fFeatureimg" style={{marginLeft:"2px"}}></img>
                <span className="page3fFeaturespan" style={{color:"white", display:"flex", alignItems:"start", justifyContent:"center"}}>Work with a team of skilled creative experts</span>
              </div>
            </div>

            <div className="container page3fFeature2" style={{display:"flex", alignItems:"center"}}>
              <div className="page3fFeature" style={{borderRadius:"5px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                {/*<i className="fa-solid fa-users page3fFeatureimg" style={{marginLeft:"2px", color:"white"}}></i>*/}
                <img src="plus.jpg" alt="page3fFeature" className="page3fFeatureimg" style={{marginLeft:"2px"}}></img>
                <span className="page3fFeaturespan" style={{color:"white", display:"flex", alignItems:"start", justifyContent:"center"}}>Amplify your social presence</span>
              </div>
            </div>

            <div className="container page3fFeature3" style={{display:"flex", alignItems:"center"}}>
              <div className="page3fFeature" style={{borderRadius:"5px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                {/*<i className="fa-solid fa-user page3fFeatureimg" style={{marginLeft:"2px", color:"white"}}></i>*/}
                <img src="plus.jpg" alt="page3fFeature" className="page3fFeatureimg" style={{marginLeft:"2px"}}></img>
                <span className="page3fFeaturespan" style={{color:"white", display:"flex", alignItems:"start", justifyContent:"center"}}>Save yourself the hassle by outsourcing your digital marketing to us</span>
              </div>
            </div>
          </div>



          <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className="container page3ButtonContainer" style={{backgroundColor:"transparent"}}>

              <button className="btn btn-lg page3Button letsWorkTogether" ref={letsWorkTogetherRef} type="button" onMouseEnter={letsWorkTogetherHandleClick} onMouseLeave={letsWorkTogetherHandleClickRemove} style={colour}>
                <h5 className="page3ButtonText"><strong>Lets work together</strong></h5>
                <span ref={letsWorkTogetherRippleRef} className="letsWorkTogetherRippleEffect"></span>
              </button>

            </div>
          </div>


          <div className="corousel2Container">
            <Marquee pauseOnHover={true} play={true} speed={40}>
              <div className="corousel2ImgContainer">
                <img src="sixteen.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="seventeen.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="eighteen.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="nineteen.jpg" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="twenty.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="twentyfour.jpg" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="twentysix.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="twentyseven.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="thirty.jpg" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="thirtyone.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="thirtytwo.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="thirtythree.png" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="thirtyfour.jpg" alt="one" className="corousel2Img"/>
              </div>

              <div className="corousel2ImgContainer">
                <img src="thirtyfive.jpg" alt="one" className="corousel2Img"/>
              </div>

            </Marquee>
          </div>  




          <div style={{marginTop:"25px", paddingBottom:"70px"}}>
            <Marquee pauseOnHover={true} play={true} speed={60}>

              <ReviewCard ratingImg="fourstar.png" review="I really like the hire, train, deploy model presented by Futurense as it always ensures you get access to the best talent, because many times, companies are in a rush to hire employees to save time and resources but end up onboarding underqualified talent and that’s where I feel Futurense saves the day." personImg="thirtysix.png" name="Supria Dhanda" designation="Managing Partner, WYSER"/>

              <ReviewCard ratingImg="fourandhalfstar.png" review="The Futurense team is associated with us in our platform related initiatives assisting in driving the process and timelines through precision and expertise. The organizational value of Futurense is aligned with our plan of action in the next three years towards sustainable success." personImg="thirtyseven.png" name="Pankaj Rai" designation="Group Chief Data and Analytics Officer, Aditya Birla Group"/>

              <ReviewCard ratingImg="fourandhalfstar.png" review="Your expertise in identifying and attracting top candidates is evident in the exceptional individuals who have joined our team. Each new hire has showcased a remarkable combination of skills, experience, and cultural fit that aligns seamlessly with our organisational goals and values. Their contributions have already proven invaluable, and we anticipate even greater achievements as they settle into their roles." personImg="thirtyeight.png" name="Akshay Kumar" designation="Research & Analytics Leader, Gallagher Service Center LLP"/>

              <ReviewCard ratingImg="fivestar.png" review="Futurense deployed some of the most collaborative and enthusiastic candidates, that are now working as full time employees at Ola." personImg="thirtynine.jpg" name="Alok Tiwari" designation="Analytics Director, Ola Electric"/>

              <ReviewCard ratingImg="fourandhalfstar.png" review="Futurense is plugging a key gap in talent upskilling with a unique blend of academia, talent development and industry demand. I am impressed with Futurense and Raghav’s commitment to this cause and believe this space has immense potential to grow." personImg="fortyone.jpg" name="Pankaj Srivastava" designation="SVP - Head of Credit Analysis Unit Offshore, HSBC"/>

              <ReviewCard ratingImg="fivestar.png" review="Futurense is a best in class recruitment partner for scaling a business. They have cracked the code on the supply chain and providing a finishing school type training of hard and soft skills very tuned to hiring needs. This is what sets them apart and makes them very successful." personImg="fortytwo.png" name="Aditya Khandekar" designation="President, Corridor Platforms"/>

              <ReviewCard ratingImg="fourandhalfstar.png" review="What most organizations grapple with today is the challenge of limited availability of good talent. On the flip side, the talent in the market faces an equally wicked challenge of limited access to knowledge & guidance to become employable and future ready." personImg="fortyfour.jpg" name="Nithya Subramanian" designation="Head of Data & Analytics - AMEA, Kellanova"/>

              <ReviewCard ratingImg="fourstar.png" review="Futurense is on a fantastic mission and opening the AI and Analytics career opportunity to a spectrum of talent that has been untapped to date due to various reasons. Futurense is also providing an amazing platform with a wide reach to leaders and experts in AI and analytics to share their learnings and life experiences. I have a personal sense of gratification to have been part of Futurense initiatives and contribute to their mission." personImg="fortyfive.png" name="A V Rahul" designation="Director, Analytics, Freshworks"/>

              <ReviewCard ratingImg="fourandhalfstar.png" review="Futurense has been very quick in understanding the hiring needs of tech startup and provide talent which understands the complexity of a digital native company like Swiggy. They are also ready to take feedback and work on the same to ensure seamless integration of the talent." personImg="fortysix.jpg" name="Ishu Jain" designation="Head Of Central Analytics, Swiggy"/>

              <ReviewCard ratingImg="fourstar.png" review="We hired a talent pool from Futurense and to my amazement, they were highly instrumental, collaborative, and very quick to adapt to the company's requirements." personImg="fortyseven.png" name="Vivek Sinha" designation="Data Engineering Manager, Anko"/>

              <ReviewCard ratingImg="fourandhalfstar.png" review="Futurense has a keen understanding of the hiring needs of organizations today. Their industry know-how, coupled with nurturing talent that fills those needs with the right tech talent is exactly what the industry needs." personImg="fortyeight.jpg" name="Kaushik Das" designation="Managing Director, JCPenney"/>

              <ReviewCard ratingImg="fivestar.png" review="Futurense not only provided us with a talent pool that ramps upon technology but also brought the kind of attributes the company was looking for." personImg="fortynine.jpg" name="Srini Oduru" designation="Senior Director of IT Operations and Delivery, Cervello"/>

              <ReviewCard ratingImg="fourstar.png" review="The impact of your efforts is already being felt across the team and beyond. The new hires have seamlessly integrated into their respective roles, contributing fresh perspectives, innovative ideas, and valuable expertise that has sparked enthusiasm and invigorated our collective drive for success. Thank you for your unwavering dedication, professionalism, and remarkable accomplishments. Your work has made a tangible difference, and it is a privilege to have you as a valued partner." personImg="fifty.jpg" name="Anirban Nandi" designation="Vice President, AI Products & Business Analytics, Rakuten India"/>


            </Marquee>
          </div>
        </div>



        


      


      </div>




      <div className="page4" style={{backgroundColor:"transparent"}}>
        <div className="row" style={{margin:"0", backgroundColor:"transparent"}}>
          <div className="col-3" style={{backgroundColor:"transparent"}}>


            <div className="page4Container1Div1" style={{backgroundColor:"transparent"}}>
              <p><h1 className="page4Container1Heading">Our Work Flow</h1></p>
              <p><h5 className="page4Container1SubHeading">We follow an efficient workflow for every brand.</h5></p>
              
              <button className="btn btn-lg joinUs" ref={joinUsRef} type="button" onMouseEnter={joinUsHandleClick} onMouseLeave={joinUsHandleClickRemove} style={color}>
                Join Us
                <span ref={joinUsRippleRef} className="joinUsRippleEffect"></span>
              </button>

              <div className="page4Container1LinkContainer" style={{color:"#ffffff", display:"flex", alignItems:"center"}}>
                <div>
                  <img className="page4Container1LinkImg" src="instagramimg.jpg" alt="nstagramimg" style={{alignSelf:"center"}}/>
                </div>
                <div>
                  <h3 className="page4Container1LinkText" style={{color:"#000000"}}><u style={{color:"#000000"}}>Follow us on Instagram</u></h3>
                </div> 
             </div>
            </div>


            <div className="page4Container1ImgContainer" style={{backgroundColor:"transparent"}}>
              <img src="futurenselife1.jpg" className="page4Container1Img" alt="futurenselife1"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="page4Container2ImgContainer" style={{backgroundColor:"transparent"}}>
              <img src="futurenselife2.jpg" className="page4Container2Img" alt="futurenselife2"/>
            </div>
          </div>

          <div className="col-md-3">

            <div className="page4Container3Img1Container" style={{backgroundColor:"transparent"}}>
              <img src="futurenselife3.jpg" className="page4Container3Img1" alt="futurenselife3"/>
            </div>

            <div className="page4Container3Img2Container" style={{backgroundColor:"transparent"}}>
              <img src="futurenselife4.jpg" className="page4Container3Img2" alt="futurenselife4"/>  
            </div>

          </div>

        </div>
      </div>

      <div className="page5">
        <div className="page5Container">
          <div className="page5Container1">
            <div><h1 className="page5Container1Heading">Our Work Flow</h1></div>
            <div><h5 className="page5Container1SubHeading">We follow an efficient workflow for every brand.</h5></div>
          </div>

          <div className="page5Container2">
            <img src="futurenselife3.jpg" className=" page5Container2Img" alt="futurenselife3"/>
          </div>
        </div>

      </div>

      <BottomToTop/>




      <div className="page6 gradient7">

        <div style={{backgroundColor:"transparent"}}>

          <div className="container page6TopContainerDiv1BigScreen" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className="container page6HeadingContainer" style={{color:"#ffffff"}}>
              <p><h1 className="page6Heading"><span className="page6HeadingSpan1" style={{color:"white"}}>Ready to unleash the</span><span className="page6HeadingSpan2" style={{color:"#FFFF51"}}>Godfather's Family?</span></h1></p>
            </div>
          </div>

          <div className="container page6TopContainerDiv1SmallScreen" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className="container page6HeadingContainer" style={{color:"#ffffff"}}>
              <p><h1 className="page6Heading"><span className="page6HeadingSpan1" style={{color:"white"}}>Ready to unleash the </span><span className="page6HeadingSpan2" style={{color:"#FFFF51"}}>Godfather's Family?</span></h1></p>
            </div>
          </div>

          <div className="container page6TopContainerDiv2" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className="container page6ButtonContainer" style={{backgroundColor:"transparent"}}>
              
              <button className="btn page6Button dropUsADm" ref={dropUsADmRef} type="button" onMouseEnter={dropUsADmHandleClick} onMouseLeave={dropUsADmHandleClickRemove} style={colour}>
                <h5 className="page6ButtonText"><strong>Drop us a DM now</strong></h5>
                <span ref={dropUsADmRippleRef} className="dropUsADmRippleEffect"></span>
              </button>

            </div>
          </div>

        </div>


        <div className="page6BottomContainer" style={{backgroundColor:"#170F37"}}>
          <div className="page6BottomContainerDiv">

            <div className="page6BottomLogoContainer" style={{display:"flex"}}>
              <img className="page6BottomLogo" src="vertical.jpg" alt="logo"></img>
            </div>

            <div className="page6BottomDetails1" style={{color:"#ffffff", display:"flex", alignItems:"center"}}>
              <div>
                <i className="fa-solid fa-location-dot page6BottomDetailsImg" style={{alignSelf:"center", cursor:"pointer"}}></i>
              </div>
              <div className="page6BottomDetails1ContentContainer">
                <h3 className="page6BottomDetailsContent" style={{cursor:"pointer"}}>Incubex HSR20 4th Floor, Teacher's Colony, Santhosapuram, HSR Layout 5th Sector, Bengaluru, Karnataka 560034</h3>
              </div> 
            </div>

            <div className="page6BottomDetails2" style={{color:"#ffffff", display:"flex", alignItems:"center"}}>
              <div>
                <i className="fa-solid fa-envelope page6BottomDetailsImg" style={{alignSelf:"center", cursor:"pointer"}}></i>
              </div>
              <div>
                <h3 className="page6BottomDetailsContent" style={{cursor:"pointer"}}>Shubham@hypercontent.xyz</h3>
              </div> 
            </div>

            <div className="page6BottomDetails3" style={{color:"#ffffff", display:"flex", alignItems:"center"}}>
              <div>
                <i className="fa-solid fa-phone page6BottomDetailsImg" style={{alignSelf:"center", cursor:"pointer"}}></i>
              </div>
              <div>
                <h3 className="page6BottomDetailsContent" style={{cursor:"pointer"}}>+91 7827111656</h3>
              </div> 
            </div>

            <div className="page6BottomIconsContainer" style={{color:"#ffffff", display:"flex", alignItems:"center"}}>
              <img className="page6BottomIcon" src="img1.jpg" alt="plusstar" style={{alignSelf:"center"}}/>
              <img className="page6BottomIcon" src="img2.png" alt="plusstar" style={{alignSelf:"center"}}/>
              <img className="page6BottomIcon" src="img3.png" alt="plusstar" style={{alignSelf:"center"}}/>
              <img className="page6BottomIcon" src="img4.png" alt="plusstar" style={{alignSelf:"center"}}/>
            </div>

            <div className="page6BottomButtonsBigScreen">
              <div className="page6BottomButtonsBigScreenRow1" style={{color:"#ffffff"}}>
                <button className="btn page6BottomButtonsBigScreenButton1" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0"}}><h3 className="page6BottomButtonsBigScreenButtonText">About Us</h3></button>
                <button className="btn page6BottomButtonsBigScreenButton2" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0"}}><h3 className="page6BottomButtonsBigScreenButtonText">Hire Now</h3></button>
                <button className="btn page6BottomButtonsBigScreenButton3" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0"}}><h3 className="page6BottomButtonsBigScreenButtonText">Terms & Conditions</h3></button>
              </div>

              <div className="page6BottomButtonsBigScreenRow2" style={{color:"#ffffff", margin:"7px 0 10px 0"}}>
                <button className="btn page6BottomButtonsBigScreenButton1" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0"}}><h3 className="page6BottomButtonsBigScreenButtonText">Refund Policy</h3></button>
                <button className="btn page6BottomButtonsBigScreenButton2" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0"}}><h3 className="page6BottomButtonsBigScreenButtonText">Cancellation Policy</h3></button>
                <button className="btn page6BottomButtonsBigScreenButton3" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0"}}><h3 className="page6BottomButtonsBigScreenButtonText">Privacy Policy</h3></button>
              </div>

            </div>

            <div className="page6BottomButtonsSmallScreen">
              <div className="page6BottomButtonsSmallScreenRow1" style={{color:"#ffffff", display:"flex", justifyContent:"space-around", alignItems:"center", textAlign:"center"}}>
                <button className="btn page6BottomButtonsSmallScreenButton" type="button" style={{color:"#ffffff", backgroundColor:"transparent", padding:"0",textAlign:"center"}}><h3 className="page6BottomButtonsSmallScreenButtonText">About Us</h3></button>
                <button className="btn page6BottomButtonsSmallScreenButton" type="button" style={{color:"#ffffff", backgroundColor:"transparent",textAlign:"center"}}><h3 className="page6BottomButtonsSmallScreenButtonText">Hire Now</h3></button>
              </div>

              <div className="page6BottomButtonsSmallScreenRow2" style={{color:"#ffffff", display:"flex", justifyContent:"space-around", alignItems:"center", textAlign:"center"}}>
                <button className="btn page6BottomButtonsSmallScreenButton" type="button" style={{color:"#ffffff", backgroundColor:"transparent", margin:"0", padding:"0",textAlign:"center"}}><h3 className="page6BottomButtonsSmallScreenButtonText">Refund Policy</h3></button>
                <button className="btn page6BottomButtonsSmallScreenButton" type="button" style={{color:"#ffffff", backgroundColor:"transparent", margin:"0", padding:"0",textAlign:"center"}}><h3 className="page6BottomButtonsSmallScreenButtonText">Cancellation Policy</h3></button>
              </div>

              <div className="page6BottomButtonsSmallScreenRow3" style={{color:"#ffffff", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                <button className="btn page6BottomButtonsSmallScreenButton" type="button" style={{color:"#ffffff", backgroundColor:"transparent", margin:"0", padding:"0",textAlign:"center"}}><h3 className="page6BottomButtonsSmallScreenButtonText">Terms & Conditions</h3></button>
              </div>

              <div className="page6BottomButtonsSmallScreenRow4" style={{color:"#ffffff", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                <button className="btn page6BottomButtonsSmallScreenButton" type="button" style={{color:"#ffffff", backgroundColor:"transparent", margin:"0", padding:"0",textAlign:"center"}}><h3 className="page6BottomButtonsSmallScreenButtonText">Privacy Policy</h3></button>
              </div>

            </div>

            <div className="page6BottomCopyrightDiv" style={{color:"#ffffff"}}>
              <h3 className="page6BottomCopyright">Copyright ©  2024 All Rights Reserved</h3>
            </div>


          </div>

        </div>

      </div>

    </div>
    </>
  )
}); 

export default HomePage;

//<div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center",padding:"0 20px"}}>
                //<button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={() => setColor(transparentInitial)} onMouseLeave={() => setColor(yellowInitial)} style={color}>Upskill Now</button>
                //<button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={() => setColour(yellowInitial)} onMouseLeave={() => setColour(transparentInitial)} style={colour}>Hire Now</button>
//</div>