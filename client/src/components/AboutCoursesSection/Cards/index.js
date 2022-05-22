import React from "react";
import {ServicesIcon} from "./CardsElements";
import {ServicesCard} from "./CardsElements";
import {ServicesH2} from "./CardsElements";
import {ServicesP} from "./CardsElements";
import {Button2} from "../../Buttons/ButtonElement";


export const Cards = ({id, img, cardtitle, carddescription, alt, btnroute}) => {
    return(
        <>
            <ServicesCard id={id}>
                <ServicesIcon src={img} alt={alt}/>
                <ServicesH2>{cardtitle}</ServicesH2>
                <ServicesP>{carddescription}</ServicesP>
                <Button2 to={btnroute}>Перейти</Button2>
            </ServicesCard>
        </>
    )
}