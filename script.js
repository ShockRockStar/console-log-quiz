// function contructor

// immediately invoked function expression
(function(){


    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i=0; i<this.answers.length; i++){
            console.log(i + ": " + this.answers[i])
        }
    }
    
    Question.prototype.checkAnswer = 
    function(ans, callback){
        var sc; 
    
        if(ans === this.correct){
            console.log("Correct Answer");
            sc = callback(true);
        } else {
            console.log("Wrong answer, try again!")
    
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score){
        console.log("Your current score is: " + score);
        console.log("--------------------");
    }
    
    
    // questions and answers
    var q1 = new Question("Is JavaScript the coolest programming langauge in the world?, ", ["yes", "no"], 0);
                                                                                        
    var q2 = new Question("What is the name of the website markup language?", ["css", "python", "HTML"], 2);
    
    var q3 = new Question("What best describes coding?", ["Boring", "Hard", "Interesting", "Tedius"], 2);
    
    // store them all inside an array
    
    var questions = [q1, q2, q3];
    
    //the return functions job is to increase the current players score
    //closure
    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    
    function nextQuestion(){
        
    
        var n = Math.floor(Math.random() * questions.length);
    
        // now we'll get a random question
    
        questions[n].displayQuestion();
    
        var answer = (prompt("Play in Dev Tools. Please select the correct answer. Type, exit , to leave the game."));
    
    
        if(answer!== "exit"){
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
            //calling nextQuestion after every question until the user types 'exit'.
        }
    }
    // call the nextQuestion every time at the beginning and...
    nextQuestion();
    
    })();