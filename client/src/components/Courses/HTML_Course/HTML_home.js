import React from 'react'
import './HTML_home.css'
import {Footer} from "../../Footer";

export const HTML_home = () => {
    return(
        <>
            <div className="main">
                <div className="leftblock">
                    <iframe src=
                                "http://localhost:3000/aboutcourses/html_chapters"
                            height="670px"
                            width="300px">

                    </iframe>
                </div>
                <div className="rightblock">
                    <iframe src=
                                "http://localhost:3000/aboutcourses/html_chapters"
                            height="670px"
                            width="100%"
                            name="iframe_html"
                    className="rightframe">

                    </iframe>
                </div>

            </div>
        </>
    )
}