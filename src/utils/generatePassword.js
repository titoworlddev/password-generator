export function generatePassword({
  passwordLength = 16,
  hasNumbers = false,
  hasSymbols = false,
  hasLowercase = false,
  hasUppercase = false
} = {}) {
  const symbols = '!@#$%^&*()_-+={}[]|:"\'<>.?\\/`~';
  const specialSymbols = ',;';
  const numbers = '0123456789';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let characters = '';
  let result = '';

  if (hasNumbers) characters += numbers;
  if (hasSymbols) characters += symbols;
  if (hasLowercase) characters += lowercase;
  if (hasUppercase) characters += uppercase;
  const charList = characters.split('');
  const randomIndexForSpecial = Math.floor(Math.random() * passwordLength);
  const randomSpecialSymbol = Math.floor(Math.random() * specialSymbols.length);

  for (var i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charList.length);

    if (i === randomIndexForSpecial && hasSymbols) {
      result += specialSymbols[randomSpecialSymbol];
    } else {
      result += charList[randomIndex];
    }
  }

  return result;
}

export function generateCustomPassword({
  customText = '',
  fillWithSymbols = false
} = {}) {
  const symbols = '!@#$%^&*()_-+={}[]|:"\'<>.?\\/`~';
  const specialSymbols = ',;';

  customText = customText
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  if (fillWithSymbols) {
    let hasSpecialSymbol = false;
    customText = customText
      .split('')
      .map(char => {
        if (char === ' ' && !hasSpecialSymbol) {
          hasSpecialSymbol = true;
          return specialSymbols[
            Math.floor(Math.random() * specialSymbols.length)
          ];
        } else {
          return char === ' '
            ? symbols[Math.floor(Math.random() * symbols.length)]
            : char;
        }
      })
      .join('');
  } else {
    customText = customText.replace(/\s/g, '');
  }

  return customText;
}
