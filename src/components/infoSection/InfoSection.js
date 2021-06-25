import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import Image from '../../images/svg-1.svg'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Subtitle,
  Subtitle1,
  ImgWrapper,
  Img,
  Input,
  SelectBTC,
  Subtitle2,
  SelectAbove,
  Subtitle3,
  InputNumber,
} from './InfoSection.elements'

function InfoSection({
  primary,
  topLine,
  lightTextDesc,
  description,
  description2,
  description3,
  description4,
  description5,
  buttonLabel,
  alt,
  imgStart,
}) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description2}
                </Subtitle>
                <Subtitle1 lightTextDesc={lightTextDesc}>
                  {description3}
                </Subtitle1>
                <Input placeholder='Email' />
                <SelectBTC>
                  <option value='' hidden>
                    BTC
                  </option>
                  <option value='1'>BTC</option>
                  <option value='2'>BTC</option>
                  <option value='3'>BTC</option>
                  <option value='4'>BTC</option>
                </SelectBTC>
                <Subtitle2 lightTextDesc={lightTextDesc}>
                  {description4}
                </Subtitle2>
                <SelectAbove>
                  <option value='' hidden>
                    Above
                  </option>
                  <option value='1'>Under</option>
                </SelectAbove>
                <Subtitle3 lightTextDesc={lightTextDesc}>
                  {description5}
                </Subtitle3>
                <InputNumber placeholder='0.00 $' />
              </TextWrapper>
              <Link to='/'>
                <Button big primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={Image} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
