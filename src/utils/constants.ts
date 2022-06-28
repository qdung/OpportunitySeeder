export const HOST = 'https://nooto.zen-s.com';
export const API = HOST + '/api/v1';
// export const emailReg004 = /^w+([.-]?w+)*@w+([.-]?w+)*(.ww+)+$/;
export const emailReg004 = /^[a-zA-Z09\-.-_]+$/g;
export const MAXLENGTH_255 = 255;

export const DATETIME_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  ':',
  /\d/,
  /\d/,
];
