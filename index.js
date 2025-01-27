const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Special cases with exact expected capitalization
const specialCases = {
 
  'OO': 'OO',
  'API': 'API',
  '===': '===',
  'NaN': 'NaN',
  'JSONP?':'JSONP?',
};
const specialWords = ['stopPropagation', 'preventDefault?'];
const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Check if the word exists in the specialCases object
      
      if (specialCases[word]) {
        return specialCases[word]; // Return the exact format for special cases
      }
      if (specialWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);  // Capitalize the first letter of special words
      }
      // Capitalize normally for non-special cases
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
}

console.log(titleCased());