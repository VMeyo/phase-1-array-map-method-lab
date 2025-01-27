const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and PreventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        // Special handling for specific cases
        const exceptions = {
          'oo': 'OO',
          'api': 'API',
          'nan': 'NaN',
          'jsonp': 'JSONP',
          'stoppropagation': 'StopPropagation',
          'preventdefault': 'PreventDefault'
        };

        const lowerCasedWord = word.toLowerCase();

        // Use exception handling for special cases
        if (exceptions[lowerCasedWord]) {
          return exceptions[lowerCasedWord];
        }

        // Default case for normal words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
};

// Ensure we don't accidentally invoke native JavaScript behavior for special terms
module.exports = {
  titleCased,
};