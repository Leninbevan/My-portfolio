import './Education.css'

export default function Education() {
; 
  return (
    <>
    <div>
    <div >
        <h2 className="ps-3 p-sm-0">EDUCATION</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>
      {/* ***** Eduation start ******** */}
      <div className='education pb-3'>
      <div data-aos="flip-left">
          <h5 className='year'>Jun 2023-Present</h5>
          <h4>Front-End Development</h4>
          <h5>Self-Learning on YouTube and Scaler</h5>
          <p>I've learned Web Designing,HTML, CSS, JavaScript, Bootstrap, React JS, Git and GitHub.</p>
         
        </div>
        <div data-aos="flip-right">
          <h5 className='year'>2018-2022</h5>
          <h4>B.Tech Information Technology</h4>
          <h5>Dhanalakshmi Srinivasan Engineering College</h5>
          <p> Proficient in data structures and algorithms, Java programming, computer networking, and OOPS concepts.</p>
        </div>
        <div data-aos="flip-left">
        <h5 className='year' >2017-2018</h5>
          <h4>Higher Secondary</h4>
          <h5>St.Joseph Higher Secondary School</h5>
          <p>Studied basics of biology, which combines biology and advanced mathematics. </p>
        </div>
        <div data-aos="flip-right">
          <h5 className='year' >2015-2016</h5>
          <h4>Secondary School Leaving Certificate.</h4>
          <h5>St.Joseph Higher Secondary School</h5>
          <p>I studied a diverse set of subjects including Tamil, English, Maths, Science, and Social Science. This comprehensive curriculum equipped me with language skills, mathematical proficiency, 
            scientific understanding, and a grasp of historical and social contexts.</p>
        </div>
        
      </div>
      {/* ******** Education end ********* */}
    </div> 
    </>
  );
}
