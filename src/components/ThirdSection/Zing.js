import zingPreview from "../../images/zing_preview.png";
function Zing() {
  return (
    <>
      <div className="inner">
        <div className="links">
          <a href="https://github.com/kvh8899/slack-clone">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <a href="https://app-zing.herokuapp.com/">
          <img
            src={zingPreview}
            alt="Zing"
            className="projectPreviewDark"
          ></img>
        </a>
      </div>
      <a href="https://app-zing.herokuapp.com/" style={{ color: "black" }}>
        <h3>Zing - An Instant Messaging App</h3>
      </a>
    </>
  );
}

export default Zing;
