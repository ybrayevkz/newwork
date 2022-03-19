import React from "react";
import {InfoContainer} from "./AboutWebElements";
import {InfoWrapper} from "./AboutWebElements";
import {InfoRow} from "./AboutWebElements";
import {Column1} from "./AboutWebElements";
import {TextWrapper} from "./AboutWebElements";
import {TopLine} from "./AboutWebElements";
import {Heading} from "./AboutWebElements";
import {Subtitle} from "./AboutWebElements";
import {Column2} from "./AboutWebElements";
import {ImgWrap} from "./AboutWebElements";
import {Img} from "./AboutWebElements"


export const AboutWebSection = ({lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img,
                                alt}) => {
    return(
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {/*<BtnWrap>*/}
                                {/*    <Button4>Button</Button4>*/}
                                {/*</BtnWrap>*/}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}