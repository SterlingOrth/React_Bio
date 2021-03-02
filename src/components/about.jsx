import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "65%", value: "65" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "75%",
          value: "75"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "10%", value: "10" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "40%",
          value: "40"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "5%",
          value: "5"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "15%",
          value: "15"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "A well-seasoned Restaurant Manager, shifting into the wonderful world of web development. With over a decade in management, I am in process of learning full stack coding and web development. "
        },
        {
          id: "second-p-about",
          content:
            "Taking a full stack web coding boot camp through the University of Denver, I am currently seeking an entry level position into the tech industry. I've always had an interest in how web pages were created and maintained, now finally taking the plunge and eager to learn all I can about this whole new world!"
        },
        {
          id: "third-p-about",
          content:
            "After graduating from Johnson & Wales University with a AS in Culinary Arts and a BS in Business Management, I moved to California to pursue opportunities within the industry. My journey also took me to Georgia and to Florida before finally returning to my home-state of beautiful Colorado, where I currently reside. Now I am excited to pursue my goal of becoming a full stack web developer!"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
