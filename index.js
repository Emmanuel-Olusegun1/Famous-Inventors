 












// const inventors = [
//     {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
//     {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
//     {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
//     {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
//     {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
//     {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
//     {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
// ]









//  const people = [
//     'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Baddoes, Nick', 'Beacher, Henry', 'Beethoven, Ludwig', 
//     'Begin, Menachen', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 
//     'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
//     'Bent, Silas', 'Bentsen, Lloyd', 'Bell, Alexander Graham', 'Babbage, Charles', 'Benz, Karl', 
//     'Braun, Wernher von', 'Biro, László', 'Baran, Paul', 'Bose, Amar', 'Brunel, Isambard Kingdom', 
//     'Baekeland, Leo', 'Bessemer, Henry', 'Bell, John Stewart', 'Bohr, Niels', 'Blodgett, Katharine', 
//     'Brattain, Walter', 'Bush, Vannevar', 'Baumgartl, Ernst', 'Bourdon, Eugène', 'Barton, Edwin', 
//     'Boyle, Robert', 'Boole, George', 'Burgess, Charles'
//   ]
     

//   //Array.prototypee.filetr()
//   // 1. Filter the list of inventors for those who were born in the 1500's
// const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

// console.table(fifteen);  

// // Array.prototype.map()
// // 2. Give us an array of the inventors first and last names
//  const fullNames =  inventors.map(inventor => `${inventor.first} ${inventor.last}`);
//  console.log(fullNames);

//  //Array.prototype.sort()
//  // 3. Sort the inventors by birthdate, oldest to youngest
//  // const ordered = inventors.sort(function(a, b){
//     //   if(a.year > b.year){
//     //   return 1;
//     //   } else {
//     //   return -1;
//     //   }
//     // });
//   const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
//   console.table(ordered)

// // Array.prototype.reduce()
// // 4. How many years did all the inventors live?  

// const totalYears = inventors.reduce((total, inventor) => {
// return total + (inventor.passed - inventor.year);
// }, 0)
// console.log(totalYears);

// // 5. Sort the inventors by years lived
// //  const oldest = inventors.sort((a,b) => {
// //     if ((a.passed - a.year) > (b.passed - b.year)){
// //         return -1;
// //     }
// //     else {
// //         return 1;
// //     }
// //  });

// const oldest = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);

//  console.table(oldest);

//  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// //  const category = document.querySelector('.mw-category');
// //  const links = Array.from(category.querySelectorAll('a'));
// //  const de = links
// //                .map(link => link.textContent);
// //                .filter(streetName => streetName.includes('de'));
  

// // 7. sort Exercise
// // sort the people alphabetically by last name
// const alpha = people.sort( (lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(', '); 
//   const [bLast, bFirst] = nextOne.split(', '); 
//    return aLast > bLast ? 1 : -1;
// })

// console.log(alpha)

// // 8. Reduce Exercise
// // sum up the instances of each of these

// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// const transportation = data.reduce((obj, item) => {
//   if(!obj[item]){
//     obj[item] ;
//   }
//   obj[item]++;
//   return obj;
// }, {});

// console.log(transportation);

const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
  {first: 'Thomas', last: 'Edison', year: 1847, passed: 1931},
  {first: 'James', last: 'Watt', year: 1736, passed: 1819},
  {first: 'Leonardo', last: 'da Vinci', year: 1452, passed: 1519},
  {first: 'Michael', last: 'Faraday', year: 1791, passed: 1867},
  {first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943},
  {first: 'Alexander', last: 'Bell', year: 1847, passed: 1922},
  {first: 'Richard', last: 'Feynman', year: 1918, passed: 1988},
  {first: 'Enrico', last: 'Fermi', year: 1901, passed: 1954},
  {first: 'Alan', last: 'Turing', year: 1912, passed: 1954},
  {first: 'Blaise', last: 'Pascal', year: 1623, passed: 1662},
  {first: 'Louis', last: 'Pasteur', year: 1822, passed: 1895},
  {first: 'Guglielmo', last: 'Marconi', year: 1874, passed: 1937},
  {first: 'Robert', last: 'Hooke', year: 1635, passed: 1703},
  {first: 'Giordano', last: 'Bruno', year: 1548, passed: 1600},  
  {first: 'Gerolamo', last: 'Cardano', year: 1501, passed: 1576},  
  {first: 'Andreas', last: 'Vesalius', year: 1514, passed: 1564},  
  {first: 'Francisco', last: 'Sánchez', year: 1551, passed: 1623}  
];


const people = [
  'Bohr, Niels', 'Beckett, Samuel', 'Bell, Alexander Graham', 'Newton, Isaac', 'Beethoven, Ludwig',
  'Tesla, Nikola', 'Beacher, Henry', 'Darwin, Charles', 'Babbage, Charles', 'Curie, Marie',
  'Boole, George', 'Benz, Karl', 'Turing, Alan', 'Belloc, Hilaire', 'Hawking, Stephen',
  'Einstein, Albert', 'Boyle, Robert', 'Galileo, Galilei', 'Beck, Glenn', 'Becker, Carl',
  'Feynman, Richard', 'Archimedes', 'Baddoes, Nick', 'Begin, Menachen', 'Bellow, Saul'
];


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 
            'car', 'van', 'car', 'truck'];

// Toggle Raw Data Section (Shows Data in Original Order)
document.getElementById('toggleRawData').addEventListener('click', () => {
  const rawDataSection = document.getElementById('rawDataSection');
  rawDataSection.classList.toggle('hidden');

  // Show Inventors in Table (Original Order)
  document.getElementById('rawInventors').innerHTML = inventors.map(inventor => `
      <tr>
          <td class="border border-gray-400 px-4 py-2">${inventor.first} ${inventor.last}</td>
          <td class="border border-gray-400 px-4 py-2">${inventor.year}</td>
          <td class="border border-gray-400 px-4 py-2">${inventor.passed}</td>
      </tr>
  `).join('');

  // Show People in List (Original Order)
  document.getElementById('rawPeople').innerHTML = people.map(person => `<li>${person}</li>`).join('');

  // Show Transport Modes in List (Original Order)
  document.getElementById('rawTransport').innerHTML = data.map(mode => `<li>${mode}</li>`).join('');
});

// Process Data When Button is Clicked
document.getElementById('loadData').addEventListener('click', () => {
  // 1. Filter inventors born in the 1500s
  const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  document.getElementById('fifteen').innerHTML = fifteen.map(inventor => `<li>${inventor.first} ${inventor.last}</li>`).join('');

  // 2. Get full names
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  document.getElementById('fullNames').innerHTML = fullNames.map(name => `<li>${name}</li>`).join('');

  // 3. Sort by birthdate
  const ordered = [...inventors].sort((a, b) => a.year - b.year);
  document.getElementById('ordered').innerHTML = ordered.map(inventor => `<li>${inventor.first} ${inventor.last} (${inventor.year})</li>`).join('');
});

document.getElementById('loadData').addEventListener('click', () => {
  // Show People in Alphabetical Order
  document.getElementById('sortedPeople').innerHTML = [...people]
    .sort()
    .map(person => `<li>${person}</li>`)
    .join('');
});
