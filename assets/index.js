const keys = [
    ["ESC", "°", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "¡", "< X |"],
    ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "´", "+", "ENTRAR"],
    ["BLOQ MAY", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["MAYUS", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "_"],
    ["&nbsp&nbsp"]
];
const ids = [
    ["ESC", "DEGREES", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "SIMPLEQUOUTE", "CLOSEADMIRATION", "DELETE"],
    ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "INCLINEDQUOUTE", "PLUS", "ENTRAR"],
    ["BLOQ MAY", "A", "S", "D", "F", "G", "H", "J", "K", "L", "ENE"],
    ["MAYUS", "Z", "X", "C", "V", "B", "N", "M", "COMMA", "DOT", "STRIPEFLOOR"],
    ["SPACE"]
];
let scrWords = document.getElementById('screen');
const write = (btn) => {
    switch (btn) {
        case "< X |":

            break;
        case "ESC":

            break;
        case "TAB":

            break;
        case "BLOQ MAY":

            break;
        case "MAYUS":

            break;
        case "ENTRAR":
            let div = document.getElementById('btns');
            let br = document.createElement("br");
            div.appendChild(br);
            break;
        default:
            scrWords.innerHTML += btn;
            break;
    }
}
const draw = () => {
    for (const [indexArray, arrayEle] of keys.entries()) {
        let div = document.getElementById('btns');
        for (const [index, element] of arrayEle.entries()) {
            let btn = document.createElement('button');
            btn.setAttribute("id", `${ids[indexArray][index]}`)
            btn.innerHTML = `${element}`;
            btn.addEventListener("click", () => {
                write(element);
            });
            div.appendChild(btn);
        }
        let br = document.createElement("br");
        div.appendChild(br);
    }
}
draw();