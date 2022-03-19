import styled from "styled-components";

export const ContactsContainer = styled.div`
  height: 100vh;
  margin-top: 80px;
  position: relative;
  
  @media screen and (max-width: 480px){
    margin-top: 80px;
  }
`

export const ContactsContainerBg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #01bf71;
  position: absolute;
`

export const ContactsContainerWrapper = styled.div`
  padding: 50px;
  display: flex;
  
  @media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    padding: 0 50px;
  }
`

export const ContactsWrapperLeft = styled.div`
  flex: 1;
`

export const ContactsWrapperRight = styled.div`
  flex: 1;
  display: flex;
  align-items: normal;
  justify-content: center;
  flex-direction: column;
`

export const ContactsLeftTitle = styled.h1`
  font-size: 60px;
  width: 80%;
  
  @media screen and (max-width: 480px){
    font-size: 30px;
  }
`

export const ContactsInfo = styled.div`

`

export const ContactsInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  font-weight: 300;
  width: 70%;
  
  @media screen and (max-width: 480px){
    margin: 20px 0;
    width: 100%;
  }
  
`

export const ContactsInfoItemIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

export const ContactsRightDescription = styled.p`
  font-weight: 200;
`

export const ContactsRightForm = styled.form`
  margin-top: 20px;
  
  @media screen and (max-width: 480px){
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
`

export const ContactsRightFormInput = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 3px solid #01bf71;
  margin: 10px 2px;
  font-size: 14px;
  padding-left: 10px;
  
  @media screen and (max-width: 480px){
    width: 35%;
    height: 40px;
    margin: 10px;
    margin-left: 0;
    
  }
`

export const ContactsRightFormTextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
  
`
