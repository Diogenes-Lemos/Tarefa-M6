import styled from 'styled-components'

import { baseColors } from '../../../mainStyles'

export const MainArea = styled.main`
  width: 100%;
  background-color: ${baseColors.bckColor2};
  display: flex;
  justify-content: center;

  #itensarea {
    margin-top: 80px;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
  }
`
