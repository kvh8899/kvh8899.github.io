import "./firstsection.css";
import me from "../../images/profile_img.jpeg";
function FirstSection() {
  return (
    <div className="section" id="home">
      <div className="outer background-purple">
        <div className="content">
          <div className="about">
            <h2>Hi, my name is Kyle.</h2>
            <h2>I am a full-stack software engineer.</h2>
          </div>
          <div>
            <img className="profile-img" src={me} alt="me"></img>
          </div>
        </div>
        <div className="bott" id="about"></div>
      </div>
    </div>
  );
}

export default FirstSection;
