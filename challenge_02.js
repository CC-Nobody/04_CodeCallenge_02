/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

/* Getränke-Challenge */

const fullName = prompt("Wie lautet Ihr Name?");
let age =parseInt(prompt("Wie als sind Sie?"));

switch (true) {
    case fullName === "":
        console.log("Entschuldigung, wie war Ihr Name nochmal?")
        break;
    case age<0:
        console.log(fullName, ",Ungeborene herhalten keine Drinks von uns.");
        break;
    case age<6:
        console.log(fullName, ",hier ist deine Milch.");
        break;
    case age<13:
        console.log(fullName, ",hier ist dein Saft.");
        break;
    case age<18:
        console.log(fullName, ",hier ist deine Cola.");
        break;
    case age>0:
        console.log(fullName, ",hier ist dein Wein.");
        break;

    default:
        console.log(fullName, ",kein Alter, keine Drinks")
        break;
}