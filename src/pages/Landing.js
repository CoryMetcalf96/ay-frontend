// Landing page / home page -> default for a non-user

function Landing(props) {
  return (
    <div className="main-landing">
      {/* Cohort name and quote */}
      <div className="landing">
        <div className="landing-text">
          <h2 className="landing-name">SEIR "Avatar"</h2>
          <h3 className="landing-date">April 25 - July 20, 2022 Cohort</h3>
        </div>
        <h4 className="landing-quote">
          “Sometimes life is like this tunnel. You can’t always see the light at
          the end of the tunnel, but if you keep moving, you will come to a
          better place.” —Iroh, Episode 2.20 “The Crossroads of Destiny”
        </h4>
      </div>
      {/* Welcome statement */}
      <div className="landing-welcome">
        <h4>
          {" "}
          Welcome to our yearbook. We created this app as a tool to help each
          other stay connected. Please feel free to add and update your details
          within.{" "}
        </h4>
      </div>
    </div>
  );
}

export default Landing;
