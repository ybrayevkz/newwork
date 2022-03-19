import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper} from "../AboutCoursesSection/Cards/CardsElements";
import {Cards} from "../AboutCoursesSection/Cards";
import {
    cssCourse,
    htmlCourse,
    javascriptCourse,
    angularCourse,
    jqueryCourse,
    nodejsCourse,
    reactCourse, pythonCourse, javaCourse, sqlCourse
} from "./Cards/Data";

export const AboutCoursesSection = () => {
    return(
        <>
            <ServicesContainer id='cards'>
                <ServicesH1>Front-End технологии для обучения</ServicesH1>
                <ServicesWrapper>
                    <Cards {...htmlCourse}></Cards>
                    <Cards {...cssCourse}></Cards>
                    <Cards {...javascriptCourse}></Cards>
                    <Cards {...angularCourse}></Cards>
                    <Cards {...jqueryCourse}></Cards>
                </ServicesWrapper>
                <ServicesH1>Back-End технологии для обучения</ServicesH1>
                <ServicesWrapper>
                    <Cards {...nodejsCourse}></Cards>
                </ServicesWrapper>
                <ServicesH1>Front-End фреймфорки для обучения</ServicesH1>
                <ServicesWrapper>
                    <Cards {...reactCourse}></Cards>
                    <Cards {...angularCourse}></Cards>
                </ServicesWrapper>

                <ServicesH1>Языки программирования</ServicesH1>
                <ServicesWrapper>
                    <Cards {...pythonCourse}></Cards>
                    <Cards {...javaCourse}></Cards>
                </ServicesWrapper>

                <ServicesH1>Работа с базами данных</ServicesH1>
                <ServicesWrapper>
                    <Cards {...sqlCourse}></Cards>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}