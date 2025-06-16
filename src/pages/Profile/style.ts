import styled from 'styled-components'

import { baseColors } from '../../mainStyles'

export const ListArea = styled.main`
  width: 100%;
  background-color: ${baseColors.bckColor2};
  display: flex;
  justify-content: center;

  #itensarea {
    margin-top: 56px;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }
`
