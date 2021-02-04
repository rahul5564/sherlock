var read = require("readline-sync")
var chalk = require("chalk")
var name= read.question(chalk.red("what is your name : "))
var wlcome = console.log(chalk.green( "WELCOME TO THE QUIZ " +name +" ALL THE BEST"))
console.log(chalk.blue("Please answer the following question with correct option.---------------------------------------"))



var score = 0
function quiz( question, answer)
{ 
  var userAnswer= read.question(question +" Choose one of the following option ")
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    
    console.log(chalk.red("you are right"))
    score= score+ 1
    console.log(chalk.bold("your score is " + score))
  } else{
    console.log(chalk.red("sorry you are wrong, the right answer is option :" +answer))
    score= score
    console.log(chalk.bold("your score is " + score))
  } console.log(chalk.red("-----------------------------------------"))
}
//quiz("aaaaaaaa ", "b")

var quizarr =[
  {
    question:"1. What street does Holmes and Watson live on ?(a) high street (b) Baker Street (c)Enclave street",
    answer: "b",

  },
  {  question:"2. What is Watson's official job before meeting Sherlock ? (a)Lawyer (b) Doctor (c)Professor",
    answer: "b",

  },
  { question:"3.What is name of Holme's younger brother? (a)Mylon (b) Mycon (c) Mycroft ",
    answer: "c",
  },
  {
    question:"4. What is the name of Holme's landlord(a)Ms Hudson (b)Ms. Hudley (c) Ms.Nolan ",
    answer: "a",

  },
  { question:"5.What is the name of Sherlock Holmes' arch enemy? (a)Watson (b)Henry (c) Moriarty ",
    answer: "c",
  }, 
  { question:"6. Which police inspector regularly calls on Holmes to help solve difficult cases. (a)Lestarde (b)BlackBun (c)Morage ",
    answer: "a",
  },
   { question:"7. What is the setting for Holmes and Moriarty's final, fatal encounter? (a)Stonehenge (b)Reichenbach Falls (c) The Abbey Theatre",
    answer: "b",
  },  
   { question:"8. What musical instrument did Sherlock Holmes play?(a)Guitar (b) Violin (c)cello",
    answer: "b",
  },
  { question:"9.How did Holmes describe himself professionally?(a)Private Detective (b)Urban archeaologist(c)Consulting Detective ",
    answer: "c",
  },
  { question:"10. In what drug was Holmes known to imbibe, from time to time.(a)Cocaine (b)Heroine (c)Marijuwana (d)",
    answer: "a",
  }, 

]

 for(var i=0; i< quizarr.length; i++)
  {
   var currQuestion = quizarr[i];
   quiz(currQuestion.question, currQuestion.answer)
  }
   console.log(chalk.bold.yellow.underline("your score is " + score))

]
