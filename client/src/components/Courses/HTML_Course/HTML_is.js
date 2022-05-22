import React from 'react'
import {Button2} from "../../Buttons/ButtonElement";

export const HTML_is = () => {
    return(
        <>
            <div className="train_container">
                <h1 className="chaptertopic">HTML - это ...</h1>
                <div className="buttons">
                    <div className="buttonleft">
                        <Button2 to="/aboutcourses/html_chapters/html_is">Домой...</Button2>
                    </div>
                    <div className="buttonright">
                        <Button2 to="/aboutcourses/html_chapters/html_meeting">Далее...</Button2>
                    </div>
                </div>
                <hr/>
                <div className='info'>
                    <div className="intro">
                        <p>HTML — это стандартный язык разметки для веб-страниц.</p>
                        <br/>
                        <p>С HTML вы можете создать свой собственный веб-сайт.</p>
                        <br/>
                        <p>HTML легко выучить - вам понравится!</p>

                    </div>
                    <br/>
                    <hr/>

                    <div className="baseinfo">
                        <h1 className="infotopic">Изучай практикуя!</h1>
                        <br/>
                        <p>Попробуйте выполнить все примеры с кодами на нашем редакторе и вы увидите изменения моментально!</p>
                        <br/>
                        <div className="examplewithbutton">
                            <p className="example">Пример: </p>
                            <div className="code">
                                <code>&lt;!DOCTYPE html&gt;<br/>
                                    &lt;html&gt;<br/>
                                    &lt;head&gt;<br/>
                                    &lt;title&gt;Page Title&lt;/title&gt;<br/>
                                    &lt;/head&gt;<br/>
                                    &lt;body&gt;<br/>

                                    &lt;h1&gt;This is a Heading&lt;/h1&gt;<br/>
                                    &lt;p&gt;This is a paragraph.&lt;/p&gt;<br/>

                                    &lt;/body&gt;<br/>
                                    &lt;/html&gt;<br/></code>

                            </div>
                            <div className="examplebutton"><Button2 to="asdas">Попробуйте сами...</Button2></div>
                        </div>
                        <br/>
                        <hr/>
                    </div>

                    <div className="baseinfo">
                        <h1 className="infotopic">HTML задачи</h1>
                        <br/>
                        <p>Во время изучения нового матерала предусмотрены задачи для того что бы вы запомнили материалы,
                            баллы которые вы наберете помогут вам сдать сертификацию.</p>
                        <br/>
                        <div className="examplewithbutton">
                            <p className="example">Задача: </p>
                            <div className="code">
                                <code>&lt;!DOCTYPE html&gt;<br/>
                                    &lt;html&gt;<br/>
                                    &lt;head&gt;<br/>
                                    &lt;title&gt;Page Title&lt;/title&gt;<br/>
                                    &lt;/head&gt;<br/>
                                    &lt;body&gt;<br/>

                                    &lt;h1&gt;This is a Heading&lt;/h1&gt;<br/>
                                    &lt;p&gt;This is a paragraph.&lt;/p&gt;<br/>

                                    &lt;/body&gt;<br/>
                                    &lt;/html&gt;<br/></code>

                            </div>
                            <div className="examplebutton"><Button2 to="asdas">Попробуйте сами...</Button2></div>
                        </div>
                        <br/>
                        <hr/>
                    </div>

                    <div className="baseinfo">
                        <h1 className="infotopic">HTML тест на сертификацию</h1>
                        <br/>
                        <p>Тестировка для того что бы получить сертификат.</p>
                        <br/>
                        <div className="examplewithoutbutton">
                            <div className="examplebutton"><Button2 to="asdas">Начать тест по HTML.</Button2></div>
                        </div>
                        <br/>
                        <hr/>
                    </div>

                </div>
            </div>

        </>
    )
}