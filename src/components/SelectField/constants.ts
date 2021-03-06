import { CSSProperties } from 'react';
import {
  BEKK_SORT,
  OVERSKYET,
  REGN_KONTRAST,
  REGN
} from '../../constants/styles';
import { Theme } from 'react-select/lib/types';

const control = (base: CSSProperties) => ({
  ...base,
  '& input': {
    'font-family': 'FFDINWebProLight',
    'font-size': '18px',
    'line-height': '24px'
  },
  '&:focus-within': {
    'background-size': '100% 1px',
    border: 'none',
    'box-shadow': 'none',
    outline: 0,
    transition: 'all 0.1s linear'
  },
  '&:hover': {
    'background-size': '100% 1px',
    border: 'none',
    'box-shadow': 'none',
    outline: 0,
    transition: 'all 0.1s linear'
  },
  'line-height': '24px',
  background: OVERSKYET,
  'background-image': 'linear-gradient(0deg, #777, #777)',
  'background-position': '0 100%',
  'background-repeat': 'no-repeat',
  'background-size': '0% 1px',
  border: 'none',
  'border-radius': 0,
  'box-shadow': 'none',
  'box-sizing': 'border-box',
  color: BEKK_SORT,
  height: '44px',
  outline: 0,
  transition: 'all 0s linear',
  width: '100%',
  'font-family': 'FFDINWebProLight',
  'padding-top': '6px',
  'padding-left': '10px'
});

export const customStylesSingleSelect = {
  control,
  menuContainer: (base: CSSProperties) => ({
    '&:focus': { border: 'none', outline: 0, 'box-shadow': 'none' },
    border: 'none',
    'box-shadow': 'none',
    outline: 0
  }),
  placeholder: (base: CSSProperties, state: any) => ({
    color: state.isDisabled ? 'hsl(0, 0%, 60%)' : base.color
  }),
  menuList: (base: CSSProperties) => ({
    padding: 0,
    'max-height': '500px',
    overflow: 'auto',
    zIndex: 998
  })
};

export const customStylesMultiSelect = {
  control,
  menuPortal: (base: CSSProperties) => ({
    ...base,
    zIndex: 20
  }),
  menu: (optionBase: CSSProperties) => ({
    zIndex: 3
  }),
  menuList: (base: CSSProperties) => ({
    padding: 0,
    'max-height': '500px',
    overflow: 'auto',
    zIndex: 998,
    '< div': { zIndex: 40 }
  })
};

export const themeTransform = (theme: Theme): Theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: REGN_KONTRAST,
    primary25: REGN,
    primary50: REGN_KONTRAST
  }
});
