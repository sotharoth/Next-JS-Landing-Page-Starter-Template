import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const MobileCarouselDropdown = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  padding: 20px 0 0 20px;

float: left;
span{
  font-size: 22px;
    color: #ff028c;
}
`;
export const Point = styled.div`

  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 20px 0 0;
  float: right;
  color: #ff028c;

`;
const OfferPageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  padding: 100px 60px 60px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 100px 30px 60px;
  }

  @media (max-width: 1199px) {
    padding: 100px 30px 60px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: ${themeGet('colors.gray.300', '#f4f4f4')};
`;

const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;

  @media (max-width: 990px) {
    background-color: ${themeGet('colors.white', '#ffffff')};
  }
`;

const SidebarSection = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  width: 280px;

  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: calc(100% - 280px);
  height: auto;
  min-height: 100vh;
  padding: 30px 30px 50px;

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
    padding: 0px 0px 100px;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`;

const OfferSection = styled.div`
  width: 100%;
  display: block;
  padding: 60px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 20px 15px;
    .prevButton {
      left: 0;
    }

    .nextButton {
      right: 0;
    }
  }
  @media (max-width: 990px) {
    padding: 15px;
    border-bottom: 0;

    .prevButton {
      left: 5px;
    }

    .nextButton {
      right: 5px;
    }
  }
`;

const Heading = styled.h2`
  font-size: ${themeGet('fontSizes.xl', '24')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid ${themeGet('colors.primary.regular', '#009e7f')};
  width: auto;
  display: inline-block;
`;

export const ProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;

const ProductsCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1650px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 490px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
const SlidePro1 = styled.div`

    margin-bottom: 20px;


    border-radius: 10px;
    padding: 0 20px;
        width: 100%;
      img {
          border-radius: 10px;

      }

`;
const SlidePro2 = styled.div`

  margin-bottom: 20px;


    border-radius: 10px;
    background: #fbcdd9;
        width: 100%;
      img {
          border-radius: 10px;

      }

`;
const VideoMask = styled.div`


    overflow: hidden;
      border: none;
      background: #abb1bb;
    border-radius: 10px;
      img{
        border-radius: 12px 12px 0 0;
      }
`;
const VideoMask2 = styled.div`


    overflow: hidden;
      border: none;
      background: #fbcdd9;
    border-radius: 10px;
      img{
        border-radius: 12px 12px 0 0;
      }
`;
const VideoMask3 = styled.div`


    overflow: hidden;
      border: none;
      background: #f3e5dc;
    border-radius: 10px;
      img{
        border-radius: 12px 12px 0 0;
      }
`;
const VideoSize = styled.div`

    width: 100%;


`;
const ThumPro = styled.div`

    position: absolute;
    padding: 0 0 20px 20px;

    font-size: 16px;



`;
const ButtonOne = styled.button`


color: #fff;
border: 1px solid #1877f2;
background: #1877f2;

margin: 12px 20px 0 0;
width: 100%;
height: 50px;

border-radius: 10px;

`;
const ButtonTwo = styled.button`

background: #fff;
    color: #1877f2;

    margin: 0;
    border: none;
    border-radius: 8px;
    padding: 5px 13px;
    font-size: 16px;
    margin-top: 10px;

`;
const Discount = styled.div`

    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fff;

    color: #000;
    overflow: hidden;
    padding: 0.25rem 0.5rem;
    font-size: 19px;
    border-radius: 30px;
    pointer-events: none;


`;
const ButtonThere = styled.button`


color: #fff;
border: 1px solid #1877f2;
background: #1877f2;
position: absolute;
bottom: 0;
margin: 0;
width: 80%;
margin: 0 20px;

`;
const ButtonBtm = styled.div`

padding: 15px 20px;

    button{


    border-radius: 8px;
    padding: 7px 20px;

    width: 100%;
    font-weight: 700;
    font-size: 16px;
    }


`;
const ThumTitle = styled.div`
  font-weight: 700;
  float: left;
  padding-left: 10px;
  line-height: 24px;
  span{

    letter-spacing: 0;
    font-size: 16px;
    color: #6d6f70;
  }
`;
const ThumImg = styled.div`
  float: left;
  img {
    width: 60px;
    height: 60px;
  }
`;


export {

  OfferPageWrapper,
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Heading,
  ProductsCol,
  SlidePro1,
  SlidePro2,
  VideoMask,
  VideoMask2,
    VideoMask3,
  ThumPro,
  ThumTitle,
  ThumImg,
  ButtonBtm,
  VideoSize,
  ButtonOne,
  ButtonTwo,
  ButtonThere,
  Discount
};
