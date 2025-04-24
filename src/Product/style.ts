import styled from 'styled-components'
import { baseColors } from '../mainStyles'

export const ProductArea = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${baseColors.componentColor};
  color: ${baseColors.bckColor1};
  margin-bottom: 32px;

  #imgarea {
    width: 304px;
    height: 167px;
    margin: 8px;
    background-size: cover;
  }

  #title {
    font-size: 16px;
    font-weight: 900;
    margin-left: 8px;
  }

  #description {
    width: 304px;
    height: 84px;
    max-height: 84px;
    font-size: 14px;
    font-weight: 400;
    margin: 8px;
    line-height: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  #btnarea {
    display: flex;
    justify-content: center;
  }
`
