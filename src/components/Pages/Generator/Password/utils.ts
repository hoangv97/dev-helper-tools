export const OPTIONS = [
  { name: 'password_length', value: 16, type: 'number' },
  {
    name: 'begin_with_a_letter',
    value: true,
    type: 'boolean',
    desc: "don't begin with a number or symbol",
  },
  {
    name: 'no_similar_characters',
    value: true,
    type: 'boolean',
    desc: "don't use similar characters like i, l, 1, L, o, 0, O, etc.",
  },
  {
    name: 'no_duplicate_characters',
    value: true,
    type: 'boolean',
    desc: "don't use the same character more than once",
  },
  {
    name: 'no_sequential_characters',
    value: true,
    type: 'boolean',
    desc: "don't use sequential characters, e.g. abc, 789",
  },
];

export const CHAR_OPTIONS: any = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
};

const randomCharInString = (str: string) =>
  str[crypto.getRandomValues(new Uint32Array(1)).map((i) => i % str.length)[0]];

export const generatePassword = (
  length = 16,
  wishlist = '',
  beginWithALetter = false,
  noDuplicateCharacters = false,
  noSequentialCharacters = false
): string | null => {
  let ans = '';
  let i = 0;
  const maxTries = wishlist.length;
  let tries = 0;
  while (i < length) {
    let char = '';
    if (!i && beginWithALetter) {
      char = randomCharInString(wishlist.replace(/[^a-zA-Z]/g, ''));
    } else {
      char = randomCharInString(wishlist);
    }
    if (noSequentialCharacters && i) {
      const prevChar = ans[i - 1];
      if (
        /[a-zA-Z0-9]/.test(char) &&
        /[a-zA-Z0-9]/.test(prevChar) &&
        Math.abs(char.charCodeAt(0) - prevChar.charCodeAt(0)) === 1
      ) {
        // console.log('skip', char, ans);
        if (tries++ > maxTries) {
          return null;
        }
        continue;
      }
    }
    if (noDuplicateCharacters) {
      wishlist = wishlist.replace(char, '');
    }
    ans += char;
    i++;
  }
  return ans;
};