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


// function titleCased() {
//   const titleCasedTutorials = tutorials.map(title => 
//     title.split(' ').map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
//   return titleCasedTutorials;
// }


// function titleCased() {
//   const newTutorials = tutorials.map(book => 
//      book.split(' ').map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

//   return newTutorials;

// }








//practice 7/5

function titleCased(){
  let newArr = tutorials.map(element => 
    element.split(' ').map(word => 
      word[0].toUpperCase() + word.slice(1)).join(' '));
  return newArr;
}
