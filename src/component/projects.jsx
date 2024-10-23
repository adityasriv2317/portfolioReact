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
                    </div>

                </li>

                <li>
                    <h3><b>XERO</b> - Game Store Website</h3>
                    <div className="pdata">
                        An online game purchasing website that displays top games. The website also allows users to rate games and create
                        their account on the website. The game store has a password and email validity system to ensure security on both ends.
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default projects