function makeAbbr(words) {
  words = words.trim();
  let abbreviation = words[0];
  for ( let i = 0; i < words.length; i++) {
    if (words[i] === ' ' ) {
      abbreviation += words[i + 1];
    }
  }
  return abbreviation.toLocaleUpperCase();
}

makeAbbr(' клуб особо опасних')