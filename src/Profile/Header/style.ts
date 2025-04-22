import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { baseColors } from '../../mainStyles'

export const ProfileHdr = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 900;
  color: ${baseColors.componentColor};
`
export const SLink = styled(Link)`
  text-decoration: none;
  color: ${baseColors.componentColor};
`
