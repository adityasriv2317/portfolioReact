import React from 'react'
import './projects.css'

const projects = () => {
  return (
    <div className='projects'>
        <hr />
        <div className="moto">My Projects</div>

        <div className="data">
            I have gained very relevent experiences from my projects and I have seemingly improved user experience for my target audience; provideng
            them with ease of access. Meanwhile I have also helped my clients
            in managing with the efficiency of the products.
            My best projects are listed here:            
        </div>

        <div className="myProjects">
            <ul>
                <li>
                    <h3><b>FlyUp</b> - Tourism Website</h3>
                    <div className="pdata">
                        A website for exploring various places and purchasing travel packages and services online. Allowing users to gather
                        information.

                        <div className="mid">
                            <div className="tch">
                                Technologies Used:
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>

                            <div className="ref">
                                <img className='active' src="../src/assets/flyup/f1.png" alt="" />
                                <img src="../src/assets/flyup/f3.png" alt="" />
                                <img src="../src/assets/flyup/f4.png" alt="" />
                                <img src="../src/assets/flyup/f5.png" alt="" />
                                <img src="../src/assets/flyup/f6.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <span>Project Links:</span>
                    <div className="links">
                        <i class="fa-brands fa-github" onClick={()=>window.open('https://github.com/adityasriv2317/TourismWebsite')}></i>
                        <i class="fa-solid fa-globe" onClick={()=>
                            window.open('https://flyup.vercel.app')
                        }></i>
                    </div>
                </li>

                <li>
                    <h3><b>XERO</b> - Game Store Website</h3>
                    <div className="pdata">
                        An online game purchasing website that displays top games. The website also allows users to rate games and create
                        their account on the website. The game store has a password and email validity system to ensure security on both ends.

                        <div className="mid">
                            <div className="tch">
                                Technologies Used:
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>

                            <div className="ref">
                                <img className='active' src="../src/assets/xero/x1.png" alt="" />
                                <img src="../src/assets/xero/x2.png" alt="" />
                                <img src="../src/assets/xero/x3.png" alt="" />
                                <img src="../src/assets/xero/x4.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <span>Project Links:</span>
                    <div className="links">
                        <i class="fa-brands fa-github" onClick={()=>window.open('https://github.com/adityasriv2317/GamingWebsite')}></i>
                        <i class="fa-solid fa-globe" onClick={()=>window.open('https://xerogaming.vercel.app')}
                        ></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default projects