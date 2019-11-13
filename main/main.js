let button = document.querySelector('input');

button.addEventListener('click', thijs);

function thijs(){
    let inputText = prompt("typen hacker die je bent");
    let t = document.createTextNode(inputText);
    let elem = document.createElement("div");
    let p = document.createElement("p")
    p.appendChild(t);
    elem.appendChild(p);
    document.getElementById("blogpost").appendChild(elem);
    
}
