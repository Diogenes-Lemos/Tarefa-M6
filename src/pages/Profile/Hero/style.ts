import styled from 'styled-components'

export const Harea = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  #typearea {
    position: relative;
    z-index: 1;
    padding-top: 25px;
    padding-left: 170px;
    padding-bottom: 158px;
    h3 {
      font-size: 32px;
      font-weight: 100;
      text-transform: capitalize;
    }
  }

  #namearea {
    position: relative;
    z-index: 1;
    padding-left: 170px;
    h3 {
      font-size: 32px;
      font-weight: 900;
      text-transform: capitalize;
    }
  }
`
