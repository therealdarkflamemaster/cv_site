import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Developer JavaScript of Application Web - SAP<span>Feb. 2022 – Present</span></h2>
                        <p>Application Development (JavaScript, Kafka, Java, PowerShell)</p>
                        <p>Unit Tests and UI Tests (Cypress, Sinon JS, QUnit)</p>
                        <p>Team Work CI/CD (Git, Jenkins, VM, Gradle)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Developer Web Front End - AEQUO<span>Jul.2021 – Sep.2021</span></h2>
                        <p>Development of a site and SSO System (JavaScript, TypeScript, React, Keycloak, GitLab )</p>
                        <p>Respect of development rules RGAA WCAG (W3C)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Developer of the product offer - mobySTOCK<span>Jul.2020 – Jan.2021</span></h2>
                        <p>Development of a site as a management system (React, Redux, React Router, Ant Design, APIs, Axios)</p>
                        <p>Development of a One-Page type site (PHP, Symfony-React, MySQL, Ubuntu, GIT)</p>
                        <p>Uploading of projects via the company server Ubuntu, Linux</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
