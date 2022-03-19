import React from "react";
import {ServicesContainer} from "./ServicesElements";
import {ServicesWrapper} from "./ServicesElements";
import {ServicesH1} from "./ServicesElements";
import {ServicesIcon} from "./ServicesElements";
import {ServicesCard} from "./ServicesElements";
import {ServicesH2} from "./ServicesElements";
import {ServicesP} from "./ServicesElements";
import server_image from "../../../images/AboutWebPage/server_image.svg"
import client_image from "../../../images/AboutWebPage/client_image.svg"

export const Services = () => {
    return(
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Вы уже знаете что web делится на 2 типа:</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={server_image} />
                        <ServicesH2>Front-End</ServicesH2>
                        <ServicesH2>(Клиентская часть)</ServicesH2>
                        <ServicesP>Клиентская часть является версткой интерфейса и обеспечиват связь между компьютером
                        и человеком отсылая запросы клиента к серверу.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={client_image} />
                        <ServicesH2>Back-End</ServicesH2>
                        <ServicesH2>(Серверная часть)</ServicesH2>
                        <ServicesP>Серврная часть является программным обеспечением которое принимает и
                            обрабатывает запросы из клиентской части с помощью протокола HTTP.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}