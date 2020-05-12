// this is were the questions, options and the correct answers are stored then later retrieved
const qBank = [
  {
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionId: "099099"
  },
  {
    question:
      'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
    answers: ["Wales", "Moldova", "Czech Republic", "Denmark"],
    correct: "Wales",
    questionId: "183452"
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "What's the name of Batman's parents?",
    answers: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "496293"
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: ["Watch", "Money", "Keys", "Notebook"],
    correct: "Watch",
    questionId: "1174154"
  },
  {
    question: "Area 51 is located in which US state?",
    answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
    correct: "Nevada",
    questionId: "1226535"
  },
  {
    question: "How would one say goodbye in Spanish?",
    answers: ["Adiós", " Hola", "Au Revoir", "Salir"],
    correct: "Adiós",
    questionId: "1310938"
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Skin", "Heart", "large Intestine", "Liver"],
    correct: "Skin",
    questionId: "1436873"
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answers: ["Subscriber", "Single", "Secure", "Solid"],
    correct: "Subscriber",
    questionId: "1747256"
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ],
    correct: "George Washington",
    questionId: "195075"
  },
  {
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    answers: ["Gorilla", "Tiger", "Panda", "Crocodile"],
    correct: "Gorilla",
    questionId: "2379831"
  },
  {
    question: "What is the nickname of the US state of California?",
    answers: ["Golden State", "Sunshine State", "Bay State", "Treasure State"],
    correct: "Golden State",
    questionId: "2510086"
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answers: ["Pink", "Yellow", "Blue", "Green"],
    correct: "Pink",
    questionId: "2838900"
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answers: [
      "Benjamin Franklin",
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "Benjamin Franklin",
    questionId: "3182461"
  },
  {
    question: "What do the letters in the GMT time zone stand for?",
    answers: [
      "Greenwich Mean Time",
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ],
    correct: "Greenwich Mean Time",
    questionId: "3239112"
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: ["Truth", "Answer", "Cause", "Source"],
    correct: "Truth",
    questionId: "3410327"
  },
  {
    question: "The New York Times slogan is, “All the News That’s Fit to…”",
    answers: ["Print", "Digest", "Look", "Read"],
    correct: "Print",
    questionId: "3667517"
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answers: [
      "John F. Kennedy",
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "John F. Kennedy",
    questionId: "4442286"
  },
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["Almond Joy", "M&M's", "Twix", "Snickers"],
    correct: "Almond Joy",
    questionId: "4811162"
  }
];

/* exporting a function that randomly picks
5 questions and returns it back to its caller.
Returns result as a promise. */
export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
