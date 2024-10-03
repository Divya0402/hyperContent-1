import React from 'react';


function MyBlogs(props) {


  return (
    <>
    <div style={{marginLeft:"50px"}}>
      <div className="corouselContsiner">
        
          <div className="corouselImg" style={{width:"90%"}}>
            <img src="futurenselife3.jpg" alt="futurenselife3"/>
          </div>

          <div>
            <div><h1 className="corouselHeading">{props.heading}</h1></div>
            <div><h5 className="corouselSubHeading">{props.subHeading}</h5></div>
          </div>
      </div>
    </div>
    </>
  )
}

export default MyBlogs