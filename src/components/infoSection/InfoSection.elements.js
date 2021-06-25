import styled from 'styled-components'

export const InfoSec = styled.div`
  color: #fff;
  margin: 100px 200px;
  padding-bottom: 80px;
  background: #f2f5fd;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 20px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const TopLine = styled.div`
  color: #1b2124;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  position: absolute;
  top: 15%;
  right: 45%;
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 80%;
  vertical-align: middle;
  display: inline-block;
  height: 350px;
`

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 35px;
  color: #424242;
`
export const Subtitle1 = styled.p`
  position: absolute;
  top: 42.5%;
  left: 38%;
  font-size: 18px;
  line-height: 35px;
  color: #424242;
`

export const Input = styled.input`
  position: absolute;
  top: 42.5%;
  left: 28%;
  width: 150px;
  height: 10px;
  background: #fff;
  padding: 20px;
  border: 0.865741px solid #cccccc;
`

export const SelectBTC = styled.select`
  width: 20%;
  height: 40px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

export const Subtitle2 = styled.p`
  position: absolute;
  top: 52.5%;
  left: 24%;
  font-size: 18px;
  line-height: 35px;
  color: #424242;
`

export const SelectAbove = styled.select`
  width: 20%;
  height: 40px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 70px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

export const Subtitle3 = styled.p`
  position: absolute;
  top: 52.5%;
  left: 35%;
  font-size: 18px;
  line-height: 35px;
  color: #424242;
`

export const InputNumber = styled.input`
  position: absolute;
  top: 52%;
  left: 43%;
  width: 150px;
  height: 10px;
  background: #fff;
  padding: 20px;
  border: 0.865741px solid #cccccc;
`
