import React from 'react'
import {Button2} from "../../Buttons/ButtonElement";
import html_meeting1 from "../../../images/Courses/HTML_course/HTML_1.PNG"
import html_meeting2 from "../../../images/Courses/HTML_course/HTML_2.PNG"

export const HTML_meeting = () => {
    return(
        <>
            <div className="train_container">
                <h1 className="chaptertopic">HTML - это ...</h1>
                <div className="buttons">
                    <div className="buttonleft">
                        <Button2 to="/aboutcourses/html_chapters/html_is">Домой...</Button2>
                    </div>
                    <div className="buttonright">
                        <Button2 to="/aboutcourses/html_chapters/html_redactors">Далее...</Button2>
                    </div>
                </div>
                <hr/>
                <div className='info'>

                    <div className="baseinfo">
                        <p>HTML — это стандартный язык разметки для создания веб-страниц.</p>
                        <br/>
                        <hr/>
                    </div>

                    <div className="baseinfo">
                        <h1 className="infotopic">Что такое HTML?</h1>
                        <br/>
                        <div className="list"><ul className="infolist">
                            <li>HTML расшифровывается как язык гипертекстовой разметки.</li>
                            <li>HTML — это стандартный язык разметки для создания веб-страниц.</li>
                            <li>HTML описывает структуру веб-страницы.</li>
                            <li>HTML состоит из набора элементов</li>
                            <li>Элементы HTML сообщают браузеру, как отображать содержимое.</li>
                            <li>Элементы HTML помечают фрагменты контента, такие как «это заголовок», «это абзац», «это ссылка» и т. д.</li>
                        </ul></div>
                        <br/>
                        <hr/>
                    </div>

                    <div className="baseinfo">
                        <h1 className="infotopic">Самый простой HTML документ.</h1>
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
                        <p className="listtitle">Объяснение примера</p><br/>
                        <div className="list"><ul className="infolist">
                            <li>Объявление <code>&lt;!DOCTYPE html&gt;</code> определяет, что этот документ является документом HTML5.</li>
                            <li>Элемент <code>&lt;html&gt;</code> является корневым элементом HTML-страницы.</li>
                            <li>Элемент <code>&lt;head&gt;</code> содержит метаинформацию о HTML-странице.</li>
                            <li>Элемент <code>&lt;title&gt;</code> указывает заголовок HTML-страницы (который отображается в строке заголовка браузера или на вкладке страницы).</li>
                            <li>Элемент <code>&lt;body&gt;</code> определяет тело документа и является контейнером для всего видимого содержимого,
                            такого как заголовки, абзацы, изображения, гиперссылки, таблицы, списки и т. д.</li>
                            <li>Элемент <code>&lt;h1&gt;</code> определяет большой заголовок</li>
                            <li>Элемент <code>&lt;p&gt;</code> определяет абзац</li>
                        </ul></div>
                        <br/>
                        <hr/>
                    </div>

                    <div className="baseinfo">
                        <h1 className="infotopic">Что такое элемент HTML?</h1>
                        <br/>
                        <p>Элемент HTML определяется начальным тегом, некоторым содержимым и конечным тегом:</p>
                        <br/>
                        <div className='infoexample'>
                            <code>
                                &lt;tagname&gt;Содержимое идет сюда...&lt;/tagname&gt;
                            </code>
                        </div>
                        <p>Элемент HTML определяется начальным тегом, некоторым содержимым и конечным тегом:</p>
                        <br/>
                        <div className='infoexample'>
                            <code>
                                &lt;h1&gt;Содержимое идет сюда...&lt;/h1&gt;
                            </code>
                        </div>
                        <div className='infoexample'>
                            <code>
                                &lt;p&gt;Содержимое идет сюда...&lt;/p&gt;
                            </code>
                        </div>
                        <div className="infonote">
                            <p><b>Примечание. </b>Некоторые элементы HTML не имеют содержимого (например, элемент &lt;br&gt;).
                                Эти элементы называются пустыми элементами. Пустые элементы не имеют закрывающего тега!</p>
                        </div>
                        <br/>
                        <hr/>
                        <div className="baseinfo">
                            <h1 className="infotopic">Веб-браузеры</h1>
                            <br/>
                            <p>Целью веб-браузера (Chrome, Edge, Firefox, Safari) является чтение HTML-документов и их правильное отображение.</p>
                            <br/>
                            <p>Браузер не отображает теги HTML, но использует их, чтобы определить, как отображать документ:</p><br/>
                            <img width="500px" height="300px" src={html_meeting1} alt="Веб-браузер"/>
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                        <div className="baseinfo">
                            <h1 className="infotopic">Структура HTML-страницы</h1>
                            <br/>
                            <p>Ниже представлена визуализация структуры HTML-страницы:</p><br/>
                            <img width="1000px" height="600px" src={html_meeting2} alt="Структура HTML-страницы"/>
                            <br/>
                            <br/>
                            <div className="infonote">
                                <p><b>Примечание. </b>Содержимое раздела &lt;body&gt; (белая область выше) будет отображаться в браузере. Содержимое элемента &lt;title&gt;
                                    будет отображаться в строке заголовка браузера или на вкладке страницы.</p>
                            </div>
                            <hr/>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}