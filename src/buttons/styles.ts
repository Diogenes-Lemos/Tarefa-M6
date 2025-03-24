import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { baseColors } from '../mainStyles'

export const Sbtn = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: ${baseColors.bckColor2};
  padding: 4px 6px;
  background-color: ${baseColors.componentColor};
`
