import React from "react";
import {Link} from "react-router-dom";
import {Cards} from "./Cards";
import {htmlCertification} from "./Cards/Data";
import {cssCertification} from "./Cards/Data";
import {javascriptCertification} from "./Cards/Data";
import {typescriptCertification} from "./Cards/Data";
import {jqueryCertification} from "./Cards/Data";
import {reactCertification} from "./Cards/Data";
import {angularCertification} from "./Cards/Data";
import {sqlCertification} from "./Cards/Data";
import {phpCertification} from "./Cards/Data";
import {nodejsCertification} from "./Cards/Data";
import {pythonCertification} from "./Cards/Data";
import {javaCertification} from "./Cards/Data";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper
} from "./Cards/CardsElements";


export const CertificationSection = (props) => {

    return(
        <>
            <ServicesContainer id='cards'>
                <ServicesH1>По какому курсу вы бы хотели быть сертифицированы?</ServicesH1>
                <ServicesWrapper>
                    <Cards {...htmlCertification}/>
                    <Cards {...cssCertification}/>
                    <Cards {...javascriptCertification}/>
                    <Cards {...typescriptCertification}/>
                    <Cards {...jqueryCertification}/>
                    <Cards {...reactCertification}/>
                    <Cards {...angularCertification}/>
                    <Cards {...sqlCertification}/>
                    <Cards {...phpCertification}/>
                    <Cards {...nodejsCertification}/>
                    <Cards {...pythonCertification}/>
                    <Cards {...javaCertification}/>
                </ServicesWrapper>
            </ServicesContainer>


        </>
    )
}