import styled from 'styled-components'
import { baseColors } from '../../../mainStyles'

export const RestaurantArea = styled.li`
  width: 472px;
  height: 398px;
  border: 1px solid;
  border-color: ${baseColors.componentColor};
  background-color: ${baseColors.componentBck};
  list-style: none;
  margin-bottom: 48px;

  #productimg {
    width: 100%;
    height: 217px;
    background-size: cover;
    #producttag {
      display: flex;
      justify-content: end;
      padding-top: 16px;
      padding-right: 16px;
      gap: 8px;
    }
  }

  #producttitle {
    margin: 8px 8px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    color: ${baseColors.componentColor};

    #title {
    }
    #avaliation {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  #restauranttext {
    margin: 8px 8px;
    display: flex;
    justify-content: start;
    font-size: 14px;
    color: ${baseColors.componentColor};
    font-weight: 400;
    line-height: 22px;
    max-height: 80px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  #btnarea {
    margin: 8px 8px;
    margin-top: 16px;
  }
`
