import "./secondsection.css";
function SecondSection() {
  return (
    <div className="position-after-1">
      <div className="section">
        <div className="outer background-white">
          <div className="contentb">
            <h2>About Me</h2>
            <p>
              I am a software engineer based in San Francisco with experience in
              developing websites with React.js, Redux, PostgreSQL, and Flask. I
              graduated from UCSD in 2021 where I studied Computer Science,
              Machine Learning, Product Design, and Neuroscience. Since then, I
              have been learning new technologies, as well as working in some
              agile teams to create some amazing applications.
            </p>
          </div>
        </div>
      </div>
      <div id="projects"></div>
    </div>
  );
}

export default SecondSection;
