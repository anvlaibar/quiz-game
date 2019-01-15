/* questions = (answer) => {
  question = [{}
    "Test" = [{
      "a",
      "b",
      "c",
      "d"
    ]},
}]
} */

// TODO: Randomize questions
// TODO: Randomize choices


var questions = [
  
  {
    question: "Hvor er det kaldest: Sydpolen eller Nordpolen?",
    choices: ["Nordpolen","Sydpolen"],
    answer: 2
  },
  
  {
    question: "Hva er en enklere måte å si 1048576 byte på?",
    choices: ["1 megabyte","1 kilobyte","1 gigabyte","1 petabyte"],
    answer: 1
  },

  {
    question: "I desember 2018 har det vært voldsomme demonstrasjoner i Frankrike. Hva kaller demonstrantene seg?",
    choices: ["De røde vestene","De sorte vestene","De oransje vestene","De gule vestene"],
    answer: 4
  },

  {
    question: "Hva er en substring?",
    choices: ["En del av en string", "En kodesnutt", "En seksjon i en string", "En annen string"],
    answer: 1
  },

  {
    question: "Et lav-nivå programmeringsspråk er..?",
    choices: ["Ikke portabelt", "Maskinorientert","Alle er riktige","Vanskelig for mennesker å lese og forstå"],
    answer: 3
  },

  {
    question: "Hva er maskin-kode?",
    choices: ["Hexadesimale instruksjoner brukt av CPUen","Binære instruksjoner brukt av CPUen","Instruksjoner i maskin-kode brukt av CPUen"],
    answer: 2
  },

  {
    question: "Hvem var den første personen i verdensrommet?",
    choices: ["Neil Armstrong","Yuri Gagarin","Alexey Leonov","John Glenn"],
    answer: 2
  },

  {
    question: "Hva studerer man i vexillologi",
    choices: ["Frimerker", "Flagg", "Ordenes opphav", "Samfunn"],
    answer: 2
  },

  {
    question: "Hvilken farge representerer hexadesimalet #ff0000",
    choices: ["Sort","Grønn","Gul","Hvit","Rød"],
    answer: 4
  },
]

answer = (answer) => {

}

questions.forEach(function(item,index,array) {
  //console.log(item,index)
})

let num = Math.floor((Math.random() * questions.length));

let val = questions[num].choices


// val = val.forEach(function (val, index) {
// 	return val[index];
// });




function shuffle(array) {
  var currentIndex = array.length, 
    temporaryValue, 
    randomIndex;

  while(0 !== currentIndex) {
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }
  return array;
}

questions = shuffle(questions);
//console.log(questions)


var id = 1
choiceWrap = (choice) => `<li><input type="checkbox" name="${id}" value="${choice}" 
                class="input"><span> Test ${choice}<span></li>`

let html = (elmId, value) => {
  document.getElementById(elmId).innerHTML = value;
}

html("choices",null);

choices = val.forEach(function (value, index) {
	return html("choices",choiceWrap(value));
});

// const choiceWrap = (val) = {

// }

