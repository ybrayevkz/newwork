import React from "react";
import {FooterContainer} from "./FooterElements";
import {FooterLinksContainer} from "./FooterElements";
import {FooterLink} from "./FooterElements";
import {FooterWrap} from "./FooterElements";
import {FooterLinksWrapper} from "./FooterElements";
import {FooterLinkItems} from "./FooterElements";
import {FooterLinkTitle} from "./FooterElements";
import {FaInstagram, FaTelegram, FaVk, FaYoutube} from "react-icons/fa";
import {SocialIcons} from "./FooterElements";
import {SocialMediaWrap} from "./FooterElements";
import {SocialLogo} from "./FooterElements";
import {SocialMedia} from "./FooterElements";
import {SocialIconLink} from "./FooterElements";
import {WebsiteRights} from "./FooterElements";
import {animateScroll as scroll} from "react-scroll";
import {FooterLogoIcon} from "./FooterElements";
import logo from "../../images/Logos/my_final_logo.png"
import {FooterHyperLink} from "./FooterElements";


export const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }


    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink to='/authors' onClick={toggleHome}>Автор проекта</FooterLink>
                            <FooterLink to='/policy' onClick={toggleHome}>Конфиденциальность и условия</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Для связи с нами</FooterLinkTitle>
                            <FooterLink to='/contacts' onClick={toggleHome}>Наши контакты</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterHyperLink href='https://www.instagram.com/ybrayevweb/' target='_blank'>Instagram</FooterHyperLink>
                            <FooterHyperLink href='https://vk.com/ybrayevweb' target='_blank'>VK</FooterHyperLink>
                            <FooterHyperLink href='https://t.me/ybrayevweb' target='_blank'>Telegram</FooterHyperLink>
                            <FooterHyperLink href='https://www.youtube.com/channel/UCzKB1UY0t1YgKmFxgt4FyDA' target='_blank'>Youtube</FooterHyperLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <FooterLogoIcon src={logo} alt='logo'/>ybrayevweb.</SocialLogo>
                        <WebsiteRights>ybrayevweb. © {new Date().getFullYear()} Все права защищены.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/ybrayevweb/' target='_blank' aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://vk.com/ybrayevweb' target='_blank' aria-label="VK">
                                <FaVk />
                            </SocialIconLink>
                            <SocialIconLink href='https://t.me/ybrayevweb' target='_blank' aria-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.youtube.com/channel/UCzKB1UY0t1YgKmFxgt4FyDA' target='_blank' aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}