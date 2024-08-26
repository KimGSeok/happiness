export const capitalizeFirstString = (str: string) => {
  if(typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const addZero = (str: string) => {
  return str.length < 2 ? `0${str}` : str;
}