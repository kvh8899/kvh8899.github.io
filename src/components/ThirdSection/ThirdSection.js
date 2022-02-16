import "./thirdsection.css";
import zingPreview from "../../images/zing_preview.png";
import seekerPreview from "../../images/seeker_preview.png";
function ThirdSection() {
  return (
    <div className="position-after-2 second">
      <div className="topSection background-lightgray"></div>
      <div className="section">
        <div className="outer background-lightgray second">
          <div className="contentc">
            <h2>Projects</h2>
            <div className="projects">
              <div className="a">
                <a href="https://app-zing.herokuapp.com/">
                  <img
                    src={zingPreview}
                    alt="Zing"
                    className="projectPreviewDark"
                  ></img>
                </a>
                <h3>Zing - An Instant Messaging App</h3>
              </div>
              <div className="b">
                <a href="https://gseeker-app.herokuapp.com/">
                  <img
                    src={seekerPreview}
                    alt="Seeker"
                    className="projectPreviewRed"
                  ></img>
                </a>
                <h3>Seeker - A Forum for Video Games</h3>
              </div>
              <div className="c">
                <a href="https://codexappaa.herokuapp.com/">
                  <img
                    src="https://github.com/kvh8899/week13-project/raw/main/docs/images/screens-readme/homepage.png"
                    alt="Codex"
                    className="projectPreviewBlack"
                  ></img>
                </a>
                <h3>Codex - Computer Science News and Articles</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
