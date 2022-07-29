import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4'
import { FinanceContainer, FinanceBg, VideoBg, FinanceContent, FinanceH1, FinanceP, FinanceBtnWrapper, ArrowForward, ArrowRight } from './FinanceElements';
// import FinanceSection from './index';


const FinanceSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    }



  return (
    <FinanceContainer id="home">
      <FinanceBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </FinanceBg>
      <FinanceContent>
        <FinanceH1>FINANÇAS</FinanceH1>
        <FinanceP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</FinanceP>
        <FinanceBtnWrapper>
          <Button to='entrar' onMouseEnter={onHover} onMouseLeave={onHover}>
            Cadastre-se aqui! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </FinanceBtnWrapper>
      </FinanceContent>

    </FinanceContainer>
  )
}

export default FinanceSection
