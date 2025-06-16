import styled from 'styled-components'
import { baseColors } from '../../../mainStyles'

export const SitemCart = styled.div`
  width: 344px;
  height: 100px;
  background-color: ${baseColors.bckColor1};
  margin: 8px;
  display: flex;
  position: relative;
  #btnarea {
    position: absolute;
    right: 8px;
    button {
      border: none;
      background-color: transparent;
    }
  }
  #txtarea {
    font-family: Roboto, sans-serif;
    h3 {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 900;
      color: ${baseColors.componentColor};
    }
    p {
      margin-top: 16px;
      font-size: 14px;
      font-weight: 400;
      color: ${baseColors.componentColor};
      margin-bottom: 9px;
    }
  }

  #imgarea {
    width: 80px;
    height: 80px;
    margin: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
