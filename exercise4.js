let input = prompt("Enter something");
let alpha = input.charCodeAt(0);

if ((alpha >= 65 && alpha <= 90) || (alpha >= 97 && alpha <= 122)) {
    console.log("It has letters");
} else {
    console.log("It doesn't have letters");
}
