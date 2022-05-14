import React, {useState} from "react";
import Video from "../../videos/video.mp4"
import {HeroContainer, TitleSpan} from "./HeroElements";
import {HeroBg} from "./HeroElements";
import {VideoBg} from "./HeroElements";
import {HeroContent} from "./HeroElements";
import {HeroH1} from "./HeroElements";
import {HeroP} from "./HeroElements";
import {HeroBtnWrapper} from "./HeroElements";
import {ArrowRight} from "./HeroElements";
import {ArrowForward} from "./HeroElements";
import {Button} from "../Buttons/ButtonElement";
import {useSelector} from "react-redux";



export const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth


    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Изучи "Web-технологии" вместе с <TitleSpan>ybrayevweb.</TitleSpan></HeroH1>
                {isLogged ? <HeroP>Добро пожаловать к нам уважаемый, будущий IT-специалист! Спасибо что выбрали нас!</HeroP> :
                    <HeroP>Для того что бы приступить к занятиям вы должны зарегистрироваться.</HeroP>}

                <HeroBtnWrapper>
                    {isLogged ? <Button to = "services"
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                        primary='true'
                                        dark='true'
                                        smooth={true} duration={500} spy={true}
                                        exact ='true'>Перейти к курсам {hover ? <ArrowForward /> : <ArrowRight />}
                                                                            </Button> : <Button to = "signup" onMouseEnter={onHover}
                                                                            onMouseLeave={onHover}
                                                                            primary='true'
                                                                            dark='true'>
                                                                            Зарегистрироваться {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>}

                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}