// First task
var firstDiv = document.getElementById("main-heading");
var subHeading = document.createElement("h3");
subHeading.innerHTML = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic";
firstDiv.appendChild(subHeading);

// second task
const divs = document.getElementsByTagName('div');
const sec_div = divs[1];

const para = document.createElement('p');
const p_text = document.createTextNode('Total fruits: 4');
para.appendChild(p_text);

const fruits = document.querySelector('.fruits');

sec_div.insertBefore(para, fruits);
para.id = 'fruits-total';