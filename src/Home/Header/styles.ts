import styled from 'styled-components'

import { baseColors } from '../../mainStyles'

export const Hdr = styled.header`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #imgarea {
    width: 125px;
    height: 57.5px;
    margin-top: 64px;
    margin-bottom: 138.5px;
  }

  #title {
    text-align: center;
    color: ${baseColors.componentColor};
    font-size: 36px;
    font-weight: 900;
  }
`
