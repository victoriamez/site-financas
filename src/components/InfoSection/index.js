import React from 'react';
import { Button } from "react-scroll";
// import { ImgWrap } from './InfoElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine,
        Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Empréstimo</TopLine>
                <Heading>A partir de R$X,00</Heading>
                <Subtitle>Simule agora</Subtitle>
                <BtnWrap>
                  <Button to='home' />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>

      </InfoContainer>

    </>
  )
}

export default InfoSection
