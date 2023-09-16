import { Link } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";

const MainPage = () =>{
    return(
        <>
        <section id="hero-section-container">
            <div id="hero-section">
                <div id="hero-left-side">
                <img src="" alt="" />

            </div>
            <div id="hero-right-side">
                <div id="heading-text-hero-right">A New Way to Learn</div>
                <div id="subheading-text-hero-right">Leetcode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</div>
                <div id="create-account-div-hero-right"><button id="create-account-button-hero">Create Account</button></div>

            </div>
            </div>


            <div id="below-hero-container">
                <div id="below-hero-container-left" >
                    <div id="below-hero-container-left-top">
                        <div>Start exploring</div>
                        <div><img src="leetcode-clone\src\assets\main-page-assets\scholar.png" alt=""  id="scholar-cap"/></div>

                    </div>
                    <div id="below-hero-container-left-middle">
                        Explore is a well-organized tool that helps you get the most out of LeetCode
                        by providing structure to guide your progress towards the next step in your programming career.
                        
                    </div>
                    <div id="below-hero-container-left-bottom">
                        Get Started  <img src="leetcode-clone\src\assets\main-page-assets\Forward.png" alt="" />
                        
                    </div>


                </div>
                <div id="below-hero-container-right">
                    <div id="card-animation">
                        card animation lol, will add later

                    </div>
                </div>

            </div>


            <div id="below-hero-container-2">
                <div id="below-hero-container-2-childs">
                    <div id="symbols">
                        <img src="" alt="" />
                    </div>
                    <div id="below-hero-container-2-childs-heading">
                        Questions, Community & Contests
                    </div>
                    <div id="below-hero-container-2-childs-subheading">
                        Over 3050 questions for you to practice. Come and join one of the largest tech
                         communities with hundreds of thousands of active users and participate in our
                          contests to challenge yourself and earn rewards.
                    </div>

                    <div id="call-to-action-below-hero-2">
                        <Link>View Question</Link>
                    </div>

                </div>

                <div id="below-hero-container-2-childs">
                    <div id="symbols">
                        <img src="" alt="" />
                    </div>
                    <div id="below-hero-container-2-childs-heading">
                       Companies & Candidates
                    </div>
                    <div id="below-hero-container-2-childs-subheading">
                        Not only does LeetCode prepare candidates for technical interviews,
                         we also help companies identify top technical talent. 
                         From sponsoring contests to providing online assessments and training, 
                         we offer numerous services to businesses.


                    </div>

                    <div id="call-to-action-below-hero-2">
                        <Link>Business Opportunities</Link>
                    </div>

                </div>
            
            </div>

            <div id="below-hero-container-3">
                <div id="below-hero-container-3-logo">

                </div>
                <div id="below-hero-container-3-logo-heading">

                </div>
                <div id="below-hero-container-3-logo-details">
                    We now support 14 popular coding languages. At our core, LeetCode is about developers.
                     Our powerful development tools such as Playground help you test,
                      debug and even write your own projects online.

                </div>

                <div id="code-editor-main">
                    <div id="acutal-code-editor">
                        <CodeEditor/>
                        
                        
                        
                    </div>
                    <div id="extra-options">
                        
                    </div>

                </div>


            </div>

            <section id="footer">
                <div id="footer1">
                    <img src="" alt="" id="san-francisco" />
                    <div id="san-francisco-text">Made with  love symbol in SF</div>
                    <div id="san-francisco-text-below">
                        At LeetCode, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies.
                         In the past few years, our users have landed jobs at top companies around the world.
                    </div>

                    <div id="company-section">
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                        <img src="" alt="" id="company-logo" />
                    </div>

                </div>
                <div id="footer2">
                    <div id="join-team-text">If you are passionate about tackling some of the most interesting problems around, 
                    we would love to hear from you.</div>
                    <div id="call-to-action-join-team"><Link>Join our team</Link></div>

                </div>
                <div id="footer3">
                    <div id="footer3-left">
                        Copyright © 2023 c-o-d-e-y-o-d-a

                    </div>
                    <div id="footer3-right">
                        <Link>Help Center</Link>
                        <Link>Students</Link>
                        <Link>Terms</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Help center</Link>
                        <Link>bug bounty</Link>
                        <img src="" alt="" id="logo-country-bottom" />

                    </div>

                </div>
            </section>





        </section>
        </>
    )
};

export default MainPage;


