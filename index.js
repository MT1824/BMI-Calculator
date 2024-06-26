import inquirer from "inquirer";
async function height() {
    let validinput = false;
    let f = null;
    let i = null;
    while (!validinput) {
        let input = await inquirer.prompt([
            {
                name: "feet",
                message: "Enter your Height\nFeet:",
                type: "input"
            },
            {
                name: "inches",
                message: "Inches:",
                type: "input"
            }
        ]);
        const a = Number(input.feet);
        const b = Number(input.inches);
        if (isNaN(a) || isNaN(b)) {
            console.log("||||||||||\n||||||||||");
            console.log("Please enter a valid number for feet and inches");
        }
        else {
            validinput = true;
            f = a;
            i = b;
        }
    }
    {
        console.log("||||||||||\n||||||||||");
        console.log("Your height is\n" + f + "ft " + i + "inch");
    }
}
height();
async function weight() {
    let validinput = false;
    let num = null;
    while (!validinput) {
        let input = await inquirer.prompt([
            {
                name: "Weight",
                message: "Enter your weight ",
                type: "input"
            }
        ]);
        const a = Number(input.Weight);
        if (isNaN(a)) {
            console.log("||||||||||\n||||||||||");
            console.log("Please enter weight in numbers");
        }
        else {
            validinput = true;
            num = a;
        }
    }
    console.log("||||||||||\n||||||||||");
    console.log("Your Weight is " + num + "Kg");
}
weight();
