import React from 'react';
import {
    Column1, Column2,
    Heading, Img, ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper, Subtitle,
    TextWrapper,
    TopLine
} from "../AboutWebSection/AboutWebElements";


export const ActivationSuccess = ({lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img,
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