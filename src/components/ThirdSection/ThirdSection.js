import "./thirdsection.css";
import Zing from "./Zing";
import Seeker from "./Seeker";
import Codex from "./Codex";
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
                <Zing />
              </div>
              <div className="b">
                <Seeker />
              </div>
              <div className="c">
                <Codex />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
