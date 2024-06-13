let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 10000);
console.log(number);

let options = ["1", "2", "3", "4", "5", "6"];
let sectionAngle = 360 / options.length;

btn.addEventListener('click', () => {
    let rotation = number % 360;
    let selectedIndex = Math.floor((rotation + sectionAngle / 2) / sectionAngle) % options.length;
    let selectedOption = options[selectedIndex];

    container.style.transform = "rotate(" + number + "deg)";
    
    setTimeout(() => {
        alert(`Parabéns, você ganhou: ${selectedOption}`);
    }, 3500);  // Espera 3 segundos antes de exibir o alerta

    number += Math.ceil(Math.random() * 10000);
    console.log(number);
});
