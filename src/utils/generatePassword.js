export function generatePassword({
  length = 16,
  hasNumbers = true,
  hasSymbols = true,
  hasLowercase = true,
  hasUppercase = true
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
  const randomIndexForSpecial = Math.floor(Math.random() * length);
  const randomSpecialSymbol = Math.floor(Math.random() * specialSymbols.length);

  for (var i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charList.length);

    if (i === randomIndexForSpecial) {
      result += specialSymbols[randomSpecialSymbol];
    } else {
      result += charList[randomIndex];
    }
  }

  return result;
}
