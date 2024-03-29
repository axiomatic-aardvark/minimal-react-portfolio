import React from 'react'
import Card from "./Card"

export default function Experience() {
    return (
        <div className="experience">
            <Card title="🙋‍♂️ whoami" content={
                <span className="whoami">
                    Passionate blockchain nerd since 2016. Full-time Advocate for The Graph protocol. Long history of organising and working with people.
                    My hobbies include magic tricks with playing cards, cardistry, cooking and hiking.
                    I'm also really into electronics and IoT, which is why I became a mentor at RoboClub.bg - a very large and active robotics club in Bulgaria.
                    In my spare time I enjoy reading history books and working on side projects. Big supporter of open source software and an avid fan of Linux (currently in love with Manjaro).
                </span>
            }/>
            <Card longMobile={true} title="👨‍💻 Work Experience" content={
                <div className="workplace_list">
                    <div className="workplaces">
                    <span className="workplace_title">
                            Founder<br/><span className="co_name">Nixum</span> <span className="time">(Oct 2021 - Now)</span>
                        </span>
                        <span className="workplace_title">
                            Rust Developer<br/><span className="co_name">The Graph</span> <span className="time">(Mar 2021 - Jan 2022)</span>
                        </span>
                        <span className="workplace_title">
                            Full Stack Developer<br/><span className="co_name">OVO Energy</span> <span className="time">(Jan 2020 - Mar 2021)</span>
                        </span>
                        <span className="workplace_title">
                            Junior Developer (Blockchain)<br/><span className="co_name">WeiChain</span> <span className="time">(Jan 2019 - Jan 2020)</span>
                        </span>
                    </div>
                </div>
            }/>
            <Card title="📚 Education" content={
                <div className="education">
                    <span className="education_title">
                        Software University, Sofia (Jun 2017 - Mar 2020)
                    </span>
                    <span className="education_text">
                        Throughout the courses at SoftUni I studied the fundamentals of programming with Java and C#,
                        along with everything needed to build full stack web applications with JavaScript. I also studied Blockchain technologies and created decentralized applications with the Solidity programming language on the Ethereum network.
                        Most of my educational projects can be found on my GitHub page.
                    </span>
                </div>
            }
            />
        </div>
    )
}
