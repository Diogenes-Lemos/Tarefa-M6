import styled from 'styled-components'
import { baseColors } from '../../mainStyles'
import { ProductBtn } from '../../components/buttons'

export const FormArea = styled.div`
  width: 344px;
  max-width: 100%;
  display: block;
  font-family: Roboto, sans-serif;
  color: ${baseColors.bckColor1};
  margin-bottom: 8px;
  #Stitle {
    font-size: 16px;
    font-weight: 700;
    margin-top: 32px;
    margin-left: 8px;
    margin-bottom: 16px;
  }
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
  label {
    margin-bottom: 8px;
  }
  input {
    padding: 8px;
    margin-bottom: 8px;
    height: 32px;
    background-color: ${baseColors.bckColor1};
    border: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #4b4b4b;
  }
`
export const DoubleInputArea = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
`
export const HalfForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
  }
  input {
    width: 155px;
    height: 32px;
    border: none;
    background-color: ${baseColors.bckColor1};
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #4b4b4b;
  }
`
export const BtnArea = styled.div`
  width: 344px;
  margin-left: 8px;
`
