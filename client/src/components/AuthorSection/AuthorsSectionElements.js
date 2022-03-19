import styled from "styled-components";

export const AuthorsContainer = styled.div`
  display: flex;  
  height: 100vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const AuthorsContainerLeft = styled.div`
  flex: 0.5;  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #101522;

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`

export const AuthorsContainerRight = styled.div`
  flex: 0.5;
  margin-top: 80px;
  overflow: hidden;
`

export const LeftWrapper = styled.div`
  padding: 50px;    
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    margin-top: 100px;
    padding: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
  }
`

export const LeftWrapperH2 = styled.h2`
  font-size: 30px;
  font-weight: 300;
  color: #fff;
`

export const LeftWrapperH1 = styled.h1`
  font-size: 60px;  
  color: #fff;
`

export const LeftTitle = styled.div`
  height: 50px;
  overflow: hidden;
  padding-bottom: 20px;
`

export const LeftTitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;
  
  @keyframes move{
    25%{
      transform: translateY(-50px);
    }
    50%{
      transform: translateY(-100px);
    }
    75%{
      transform: translateY(-150px);
    }
    100%{
      transform: translateY(-200px);
    }
  }

  @media screen and (max-width: 480px) {
    margin: 20px 20px;
    align-items: center;
    

    @keyframes move{
      25%{
        transform: translateY(-60px);
      }
      50%{
        transform: translateY(-120px);
      }
      75%{
        transform: translateY(-180px);
      }
      100%{
        transform: translateY(-240px);
      }
    }
    
  }
`



export const LeftTitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #01BF71;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px){
    text-align: center;
  }
`

export const LeftDescription = styled.p`
  color: #fff;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AuthorsAboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
  }
`

export const AboutContainerLeft = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const AboutContainerRight = styled.div`
  flex: 1;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`

export const AboutLeftCard = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 30vh;
  }
  
`

export const AboutLeftCardBg = styled.div`
  position: absolute;
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  top: 50px;
  left: 50px;
  background-color: #101522;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const AboutCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AboutRightTitle = styled.h1`
  font-weight: 400;    
`

export const AboutRightSub = styled.p`
  margin: 20px 0;  
`

export const AboutRightDescription = styled.p`
  font-weight: 300;  
`

export const AboutRightAward = styled.div`
  margin-top: 50px;  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const AboutRightAwardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`

export const AboutAwardTexts = styled.div`
  width: 70%;
`

export const AwardTitle = styled.h4`
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`

export const AwardDescription = styled.p`
    
`

export const ContactsContainer = styled.div`
  height: 100vh;
  position: relative;
  
`

export const ContactsContainerBg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #01BF71;
  position: absolute;
  
`

export const ContactsContainerWrapper = styled.div`
  padding: 50px;
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px 50px;
  }
  
`

export const ContactsWrapperLeft = styled.div`
  flex: 1;  
`

export const ContactsWrapperRight = styled.div`
  flex: 1;
`

export const ContactsTitle = styled.h1`
  font-size: 50px;
  width: 80%;

  @media screen and (max-width: 480px) {
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

  @media screen and (max-width: 480px) {
    margin: 20px 0;
    width: 100%;
  }
`

export const ContactsItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`