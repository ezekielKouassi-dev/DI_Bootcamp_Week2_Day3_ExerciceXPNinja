/**
 * @author : ezekiel kouassi
 */

/* ***************** Exercice 1 : Checking the BMI ************* */


// 1 - create two objects
// 2 - add a function key in each objects that calculate BMI

let firstPerson = {
    FullName : "Ezekiel kouassi",
    Mass : 65,
    Height : 1.85,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); // BMI formula
    }
}

let secondPerson = {
    FullName : "Charlène Cissé",
    Mass : 85,
    Height : 1.70,
    BMICalculator : function () {
        return (this.Mass/Math.pow(this.Height, 2)); // BMI formula
    }
}

// 3 - create a JS function that compares the BMI of both objects

function compareBMI(firstPerson, secondPerson) {

    /**
     * @description : cette fonction compare 2 object person et determine qui des deux
     * à le plus grand BMI.
     * @param : firstPerson
     * @param : secondPerson
     * @returns
     */
    
    if(firstPerson.BMICalculator() > secondPerson.BMICalculator()) {
        console.log(`the person who have the largest BMI is : ${firstPerson.FullName}`);
        return;
    }
    console.log(`the person who have the largest BMI is : ${secondPerson.FullName}`);
}

// 4 - call the function for display the name of the person who has the largest BMI

compareBMI(firstPerson, secondPerson);

/* ***************** End Exercice 1 ************* */

/* ***************** Exercice 2 : Grade Average ***************** */



/* ***************** End Exercice 2 ***************** */

