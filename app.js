$(document).ready(function () {

    let diceArray = [];

    class Die {
        constructor() {
            this.roll();
            //creates a new die
            this.div = $('<div class="dice-box"></div>');
            $("#dice-container").append(this.div);
            $(this.div).text(this.value);
            //adds die to array
            diceArray.push(this);
            $(this.div).click(() => {
                this.reRoll();
            })
            $(this.div).dblclick(() => {
                let index = (diceArray.indexOf(this));
                //removes from array
                diceArray.splice(index, 1)
                //removes div
                this.div.remove();
            })
        }

        //gives value to die on initial roll
        roll() {
            this.value= Math.floor(Math.random() * 6 + 1);
        }

        //gives new value to each die
        reRoll() {
            this.roll();
            $(this.div).text(this.value);
        }
    }


    //generates a new die class object and assigns it a value
    $("#btn-generateDie").click(() => {
        new Die();
    })


    //assigns new value to all dice on screen
    $("#btn-rollDie").click(() => {
        diceArray.forEach(die => die.reRoll());
        // for (let i = 0; i < diceArray.length; i++) {
        //     diceArray[i].reRoll();
        // }
    })

    //adds up the value of all dice created
    $("#btn-sum").click(() => {
        let sum = 0;
        for (let i = 0; i < diceArray.length; i++) {
            sum += diceArray[i].value;
        }
        alert(`The sum of all dice is ${sum}.`)
    });

});