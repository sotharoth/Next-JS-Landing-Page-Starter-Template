import css from '@styled-system/css';
import styled, { createGlobalStyle } from 'styled-components';
import { get } from 'styled-system';

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === 'ar' || lang === 'he') &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      margin: 0,
      fontFamily: 'body',
      fontWeight: 'regular',
      fontSize: 'base',
      lineHeight: '1.5',
      backgroundColor: 'white',
      transition: get(theme, 'customs.transition'),
      WebkitTextSizeAdjust: '100%',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.004)',
    },

    '.react-multiple-carousel__arrow': {
      background: '#fff',
    },
    '.react-multiple-carousel__arrow:hover': {
      background: '#e2e5ea',
    },
    '.react-multiple-carousel__arrow::before': {
      color: '#000',
    },

    '._53j5': {
      width: '100%',
      height: '660px',
    },
    '.qty': {
      width: '30px',
      float: 'left',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    '.qtydetail': {
      width: '10%',
      float: 'left',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    '.addplus': {
      width: '90%',
      float: 'left',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
    },
    '.totals': {
      width: '40px',
      float: 'left',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
      fontWeight: 600,
    },
    '.checkboxs': {
      width: '40px',
      float: 'left',
      textAlign: 'center',
      borderBottom: '1px solid #ddd',
      fontWeight: 600,
      height: 22,
    },

    '.react-multi-carousel-dot-list': {
      zIndex: '5',
    },
    '.cart-scrollbar': {
      maxHeight: 'calc(100vh - 245px) ! important',
    },
    '.Collapsible': {
      textAlign: 'center',

      color: '#000',

      width: '100%',
      bottom: '0',
      float: 'right',
    },

    '.Collapsible__trigger': {
      borderRadius: '33px',
      padding: '8px 20px',
      fontSize: '12px',
      background: '#fff',
      color: '#000',
      fontWeight: '777',
      right: '30px',
      float: 'right',
      position: 'absolute',
    },
    '.Collapsible__contentOuter': {
      textAlign: 'left',
      fontSize: '14px',
      paddingTop: '45px',
      color: '#fff',
    },

    '.Collapsible__contentInner': {
      padding: '0 20px',

      color: '#000',
    },

    h1: {
      fontFamily: 'heading',
      fontSize: '5xl',
      fontWeight: 'semiBold',
      margin: 0,
    },
    h2: {
      fontFamily: 'heading',
      fontSize: '3xl',
      fontWeight: 'semiBold',
      margin: 0,
    },
    h3: {
      fontFamily: 'heading',
      fontSize: '2xl',
      fontWeight: 'semiBold',
      margin: 0,
    },
    h4: {
      fontFamily: 'heading',
      fontSize: 'xl',
      fontWeight: 'semiBold',
      margin: 0,
    },
    h5: {
      fontFamily: 'heading',
      fontSize: 'md',
      fontWeight: 'semiBold',
      margin: 0,
    },
    h6: {
      fontFamily: 'heading',
      fontSize: 'base',
      fontWeight: 'bold',
      margin: 0,
    },
    'p,span,button,li,div': {
      fontFamily: 'body',
      margin: 0,
    },

    a: {
      fontFamily: 'body',
      textDecoration: 'none',
    },
    iframe: {
      width: '335px',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    button: {
      appearance: 'none',
    },
    img: {
      maxWidth: '100%',
    },
    '.quick-view-overlay': {
      backgroundColor: 'rgba(0,0,0,.5)',
    },

    '.add-address-modal,.add-contact-modal': {
      boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
      borderRadius: '3px !important',
      '.innerRndComponent': {
        width: '100%',
        padding: '30px',
        height: 'auto',
        backgroundColor: '#f7f8f9',
        border: 0,
        boxSizing: 'border-box',
      },
    },

    '.search-modal-mobile': {
      transform: 'none!important',
      maxWidth: 'none!important',
      maxHeight: 'none!important',
      top: '0!important',
      left: '0!important',
      background: 'transparent!important',
      borderRadius: '0!important',
    },

    '.reuseModalCloseBtn': {
      right: '10px!important',
      backgroundColor: '#ffffff!important',
      color: '#222222!important',
      borderRadius: '15px!important',
      padding: '0 9px!important',
      boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    },

    '.image-item': {
      padding: '0 15px',
    },

    '@media (max-width: 1199px) and (min-width: 991px)': {
      '.image-item': {
        paddingLeft: '10px',
        paddingRight: '10px',
      },
    },

    '@media (max-width: 768px)': {
      '.image-item': {
        paddingLeft: '7.5px',
        paddingRight: '7.5px',
      },
    },
    '.fb-video': {
      span: {
        height: '350px !important',
      },
    },
  
  })
);
