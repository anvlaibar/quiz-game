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
    choices: ["Nordpolen", "Sydpolen"],
    answer: 1
  },

  {
    question: "Hva er en enklere måte å si <code>1048576</code> byte på?",
    choices: ["1 megabyte", "1 kilobyte", "1 gigabyte", "1 petabyte"],
    answer: 0
  },

  {
    question:
      "I desember 2018 har det vært voldsomme demonstrasjoner i Frankrike. Hva kaller demonstrantene seg?",
    choices: [
      "De røde vestene",
      "De sorte vestene",
      "De oransje vestene",
      "De gule vestene"
    ],
    answer: 3
  },

  {
    question: "Hva er en substring?",
    choices: [
      "En del av en string",
      "En kodesnutt",
      "En seksjon i en string",
      "En annen string"
    ],
    answer: 0
  },

  {
    question: "Et lav-nivå programmeringsspråk er..?",
    choices: [
      "Ikke portabelt",
      "Maskinorientert",
      "Alle er riktige",
      "Vanskelig for mennesker å lese og forstå"
    ],
    answer: 2
  },

  {
    question: "Hva er maskin-kode?",
    choices: [
      "Hexadesimale instruksjoner brukt av CPUen",
      "Binære instruksjoner brukt av CPUen",
      "Instruksjoner i maskin-kode brukt av CPUen"
    ],
    answer: 1
  },

  {
    question: "Hvem var den første personen i verdensrommet?",
    choices: ["Neil Armstrong", "Yuri Gagarin", "Alexey Leonov", "John Glenn"],
    answer: 1
  },

  {
    question: "Hva studerer man i vexillologi",
    choices: ["Frimerker", "Flagg", "Ordenes opphav", "Samfunn"],
    answer: 1
  },

  {
    question: "Hvilken farge representerer hexadesimalet <code>#ff0000</code>?",
    choices: ["Sort", "Grønn", "Hvit", "Rød"],
    answer: 3
  }
];

questions.forEach(function(item, index, array) {
  //console.log(item,index)
});

// val = val.forEach(function (val, index) {
// 	return val[index];
// });

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

questions = shuffle(questions);
//console.log(questions)

function checkOnlyOne(id) {
  var elem = document.getElementsByClassName("input");
  var i;

  for (i = 0; i < elem.length; i++) {
    if (elem[i].value != id) elem[i].checked = false;
  }
}

const choiceWrap = (id, choice) => `
  <li>
    <label class="choice">
     <input 
      type="checkbox" 
      id="${id}" 
      value="${id}" 
      class="input" 
      onclick="checkOnlyOne(this.value);" />
      <span class="check"></span>
      <span> ${choice}</span>
    </label>
  </li>
  `;

let html = (id, value) => {
  var elem = document.createElement("li");
  //document.getElementById(elmId).innerHTML = value;
  var id = document.getElementById(id);

  elem.innerHTML = value;
  while (elem.firstChild) {
    id.appendChild(elem.firstChild);
  }
};

let num = Math.floor(Math.random() * questions.length);

let val = questions[num].choices;

var val2 = questions[num].question;

var val3 = questions[num].answer;
//html("choices",null);
// val2.forEach(function (value, index) {
// 	html("question","value.question");
// });

question = html("question", val2);
choices = val.forEach(function(value, index) {
  html("choices", choiceWrap(index, value));
});
answer = questions[num].answer;
console.log(answer);

function submitAnswer() {
  var input = document.querySelector(".input:checked");
  if (input) {
    var value = input.value;
    checkAnswer(value);
  } else {
    console.log("Noe gikk galt...");
  }
}

function checkAnswer(value) {
  if (value == answer) {
    next();
  } else {
    console.log("feil");
  }
}

function next() {
  console.log("neste");

}

