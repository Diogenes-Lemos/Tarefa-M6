import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { baseColors } from '../mainStyles'

export const Sbtn = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: ${baseColors.bckColor2};
  padding: 4px 6px;
  background-color: ${baseColors.componentColor};
  text-decoration: none;
`
export const SproductBtn = styled(Link)`
  display: flex;
  width: 304px;
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
