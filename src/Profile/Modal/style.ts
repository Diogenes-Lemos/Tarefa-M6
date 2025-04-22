import styled from 'styled-components'
import { baseColors } from '../../mainStyles'

export const Sitem = styled.div`
  &.open {
    display: block;
  }
  &.close {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;

  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`
export const Sdescription = styled.div`
  position: absolute;
  width: 1024px;
  height: 344px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${baseColors.componentColor};
  z-index: 1;
  display: flex;
  color: white;
  #btnClose {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
  }
  #imgarea {
    height: 280px;
    width: 280px;
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 32px;
  }
  #itemdescription {
    margin-top: 32px;
    margin-left: 24px;
    #itemtitle {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }
    #itemtext {
      font-size: 14px;
      font-weight: 400;
      max-width: 656px;
    }
  }
`
