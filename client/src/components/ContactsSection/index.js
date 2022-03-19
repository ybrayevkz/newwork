import React, {useRef, useState} from "react";
import {ContactsContainer} from "./ContactsElements";
import {ContactsContainerBg} from "./ContactsElements";
import {ContactsInfoItemIcon} from "./ContactsElements";
import {ContactsLeftTitle} from "./ContactsElements";
import {ContactsInfo} from "./ContactsElements";
import {ContactsWrapperLeft} from "./ContactsElements";
import {ContactsContainerWrapper} from "./ContactsElements";
import {ContactsInfoItem} from "./ContactsElements";
import {ContactsWrapperRight} from "./ContactsElements";
import PhoneIcon from "../../images/ContactsPage/contacts_phone.png"
import EmailIcon from "../../images/ContactsPage/contacts_email.png"
import AddressIcon from "../../images/ContactsPage/contacts_address.png"
import {ContactsRightDescription} from "./ContactsElements";
import {ContactsRightForm} from "./ContactsElements";
import {Button3} from "../Buttons/ButtonElement";
import {ContactsRightFormInput} from "./ContactsElements";
import {ContactsRightFormTextArea} from "./ContactsElements";
import emailjs from "emailjs-com";

export const ContactsSection = () =>{

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t4xauvq', 'template_j22xya7', formRef.current, "user_cx3QVGzxNNOcvtLhdmTVY")
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return(
        <>
            <ContactsContainer>
                <ContactsContainerBg>
                </ContactsContainerBg>
                <ContactsContainerWrapper>
                    <ContactsWrapperLeft>
                        <ContactsLeftTitle>Для связи с нами:</ContactsLeftTitle>
                        <ContactsInfo>
                            <ContactsInfoItem>
                                <ContactsInfoItemIcon src={PhoneIcon} alt="Contacts Phone Icon" />
                                +7 (707) 689-12-13
                            </ContactsInfoItem>
                            <ContactsInfoItem>
                                <ContactsInfoItemIcon src={EmailIcon} alt="Contacts Email Icon" />
                                ybrayevweb@gmail.com
                            </ContactsInfoItem>
                            <ContactsInfoItem>
                                <ContactsInfoItemIcon src={AddressIcon} alt="Contacts Address Icon" />
                                Казахстан, Алматинская область, город Алматы, проспект Сатбаева, дом 22а
                            </ContactsInfoItem>
                        </ContactsInfo>
                    </ContactsWrapperLeft>
                    <ContactsWrapperRight>
                        <ContactsRightDescription>
                            <b>Хотите сотрудничать?</b> Вы можете оставить свои предложения в этой форме. Я буду рад сотрудничать с каждым.
                        </ContactsRightDescription>
                        <ContactsRightForm ref={formRef} onSubmit={handleSubmit}>
                            <ContactsRightFormInput type="text" placeholder="Введите имя" name="user_name" />
                            <ContactsRightFormInput type="text" placeholder="Тема сообщения" name="user_subject" />
                            <ContactsRightFormInput type="text" placeholder="Введите почту" name="user_email" />
                            <ContactsRightFormTextArea name="message" rows="5" placeholder="Введите сообщение"></ContactsRightFormTextArea>
                            <Button3>Отправить</Button3><br/>
                            {done && "Сообщение успешно отправлено!"}
                        </ContactsRightForm>
                    </ContactsWrapperRight>
                </ContactsContainerWrapper>
            </ContactsContainer>
        </>
    )
}