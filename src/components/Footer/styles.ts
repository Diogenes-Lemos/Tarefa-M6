import styled from 'styled-components'
import { baseColors } from '../../mainStyles'

export const Farea = styled.footer`
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${baseColors.bckColor1};

  #logoarea {
    width: 125px;
    height: 57.5px;
    margin-top: 40px;
  }

  #iconsarea {
    display: flex;
    margin-top: 32px;
    gap: 8px;
  }

  #legal {
    margin-top: 80px;
    margin-bottom: 40px;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    color: ${baseColors.componentColor};
  }
`
