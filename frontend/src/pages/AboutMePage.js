import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMePage() {
    return (
        <>
            <div className="container-lg box-light-grey p-md">
                <h1>About Me</h1>
                <div className="p-sm">
                    <div className="me-img">
                        <img
                            src={require("../images/me_transparent.png")}
                        />
                    </div>

                    I'm Olivér Kovács, composer, music educator, and content creator residing in Budapest.
                    My connection to music started when I was seven years old. My first instrument
                    was the violin, but at the age of 14, I picked up the guitar.
                </div>

                <p>
                    Over the years, I’ve worked as a composer on various projects, including video games 
                    such as Tales of the Laser Knights and Bean Stalker. Beyond composing, I dedicate a 
                    significant part of my work to teaching and sharing knowledge.
                </p>

                <p>
                    In 2024, I launched my YouTube channel, <a target="_blank" href="https://www.youtube.com/@ComposersCompassYT">Composer’s Compass</a>
                    , where I create weekly 
                    videos on composition, orchestration, and music theory. My goal is to make complex 
                    musical concepts clear and inspiring for a broad audience of <b>aspiring composers</b> and <b>songwriters</b>.
                </p>

                <p>
                    I’m also the creator of <a target="_blank" href="https://ear-genius.eu">Ear-Genius</a>, 
                    an interactive web application designed to help 
                    musicians improve their ear training skills. As both a composer and programmer, 
                    I enjoy combining my musical expertise with software development to create tools 
                    that make learning more effective and engaging.
                </p>

                <h2>Some of my YouTube videos</h2>
            </div>

            <div className="box-primary pt-md pb-xl text-center">
                <h1 className="color-secondary">
                    <span className="pr-xs">What you'll learn</span>
                     <FontAwesomeIcon icon="fa-solid fa-book-open" />
                </h1>

                <p style={{fontWeight:"bold"}} className="color-white">
                    Don't hesitate to reach out, whether you're an aspiring composer or songwriter.
                </p>

                <div className="container-lg row">
                    <div className="col-md-4">
                        <div className="bg-primary-lighter p-sm border-primary-darker table-cell">
                            <h3>Music Theory</h3>

                            <div className="service-img-holder d-flex jc-center">
                                <img src={require("../images/treble-clef.png")}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-secondary p-sm border-primary-darker table-cell">
                            <h3 className="color-primary-lighter">Composition</h3>

                            <div className="service-img-holder d-flex jc-center">
                                <img src={require("../images/sheet-music.png")}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-primary-lighter p-sm border-primary-darker table-cell">
                            <h3>Orchestration</h3>

                            <div className="service-img-holder d-flex jc-center">
                                <img src={require("../images/conductor.png")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-lg">
                <Contact/>
            </div>

            <Footer/>
        </>
    );
}

export default AboutMePage;