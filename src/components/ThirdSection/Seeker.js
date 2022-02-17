import seekerPreview from "../../images/seeker_preview.png";
function Seeker() {
  return (
    <>
      {" "}
      <div className="inner">
        <div className="links">
          <a href="https://github.com/kvh8899/seeker">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <a href="https://gseeker-app.herokuapp.com/">
          <img
            src={seekerPreview}
            alt="Seeker"
            className="projectPreviewRed"
          ></img>
        </a>
      </div>
      <a href="https://gseeker-app.herokuapp.com/" style={{ color: "black" }}>
        <h3>Seeker - A Forum for Video Games</h3>
      </a>
    </>
  );
}

export default Seeker;
