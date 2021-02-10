import { firstLetterUppercase } from './UpperFirstLetter';

export function formatedUserName(name){
  let fn = name.split(' ').slice(0, 1);
  let ln = name.split(' ').slice(-1);

  let fullName = firstLetterUppercase(fn[0]) + ' ' + firstLetterUppercase(ln[0])

  return fullName;
}
