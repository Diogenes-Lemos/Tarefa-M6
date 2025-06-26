import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { baseColors } from '../../mainStyles'
import { SproductBtnProps } from '../../types/types'

export const Sbtn = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: ${baseColors.bckColor2};
  padding: 4px 6px;
  background-color: ${baseColors.componentColor};
  text-decoration: none;
`
export const SproductBtn = styled(Link)<SproductBtnProps>`
  display: flex;
  width: ${({ swidth }) => swidth || '304px'};
  height: 24px;
  background-color: ${baseColors.bckColor1};
  color: ${baseColors.componentColor};
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  text-decoration: none;
`
export const ScloseBtn = styled.img`
  width: 16px;
  height: 16px;
  &:hover {
    cursor: pointer;
  }
`

export const SformBtn = styled.button`
  display: flex;
  width: 336px;
  height: 24px;
  background-color: ${baseColors.bckColor1};
  color: ${baseColors.componentColor};
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  text-decoration: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`
