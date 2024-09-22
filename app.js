

// Make an array of objects that store question,choices of question and answer

var questions = [

    {
        question:'Q1:which of the following is not a css box model property?',
        Option1:'margin',
        Option2:'padding',
        Option3:'border-collapse',
        correctOption:"border-collapse"
    },

   

    {
        question:'Q2:which of the following is not a javascript data type?',
        Option1:'string',
        Option2:'boolean',
        Option3:'float',
        correctOption:"float"
    },

    {
    question:'Q3:where is the correct place to insert  a javascript ',
    Option1:'Both The <body> and <head> section',
    Option2:'The <body> section',
    Option3:'The <head> section',
    correctOption:"The <body> section"
    },

    {
        question:'Q4:Inside which html element do we put the javascript? ',
        Option1:'<js>',
        Option2:'<script>',
        Option3:'<javascript>',
        correctOption:"<script>"
        },


        {
            question:'Q5:How to write an if statement in javascript?',
            Option1:'if i==5 then',
            Option2:'if(i==5)',
            Option3:'if i==5',
            correctOption:"if (i==5)"
            }
   
    
       

   
];

var ques = document.getElementById('ques')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var index = 0
var btn = document.getElementById('btn')
var score = 0





function nextQuestion(){

    var getOptions = document.getElementsByName('options')
    for(var i=0; i<getOptions.length; i++){
       if(getOptions[i].checked){
        var selectedValue = getOptions[i].value 
        var selectedQues = questions[index-1]['question']
        var selectedAns = questions[index-1][`option${selectedValue}`]
        var correctOption = questions[index-1][`correctOption`]
        if(selectedAns==correctOption){
            score++
        }
       }
        getOptions[i].checked = false

    }
    btn.disabled = true

    if(index > questions.length -1){
        console.log('your percentage is'+((score/questions.length) * 100).toFixed(2))

    }
    else{

    ques.innerText = questions[index].question
    opt1.innerText = questions[index].Option1
    opt2.innerText = questions[index].Option2
    opt3.innerText = questions[index].Option3
    index++
}


}


nextQuestion()

function clicked(){
    
    btn.disabled = false
}


