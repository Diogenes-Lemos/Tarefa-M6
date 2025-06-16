import styled from 'styled-components'
import { baseColors } from '../../mainStyles'

export const Scartarea = styled.div`
  &.openCart {
    display: block;
  }
  &.closedCart {
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
export const Scart = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 360px;
  height: 100%;
  padding-top: 24px;
  background-color: ${baseColors.componentColor};
  #cartprice {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    margin-inline: 8px;
    margin-bottom: 16px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: ${baseColors.bckColor1};
  }
  #btnarea {
    margin-inline: 8px;
    button {
      width: 100%;
      height: 24px;
      border: none;
      background-color: ${baseColors.bckColor1};
      color: ${baseColors.componentColor};
      &:hover {
        cursor: pointer;
      }
    }
  }
  #noitem {
    text-align: center;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: ${baseColors.bckColor1};
  }
`
