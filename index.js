// Model

const myArray = [];

// View

function view() {
    html = '';
    html = /*HTML*/`
 <h1>Oppdatert handleliste</h1>
 <h2>Skriv inn i feltet og trykk enter for å legge til i lista!</h2>
 <h3>Klikk med musa på et element for å fjerne det fra lista igjen!</h3>
 <input 
     class ="inputId" 
     id="inputId" 
     type="text" 
     placeholder="Skriv her og trykk ENTER ...."
     onkeydown="if (event.code ==='Enter') addItem(this.value)"
     required  
     required></input>
`
    html += `<div class=shoppingList>`
    for (let i in myArray) {
        let listItem = myArray[i];
        listItem = listItem.charAt(0).toUpperCase() + listItem.slice(1)
        html += `<li onclick="remove(this.innerHTML)">` + listItem + `</li>`
    }
    html += `</div>`
    let appDiv = document.getElementById('app')
    appDiv.innerHTML = html;
}

// Controller
function addItem(item) {
    myArray.push(item.toLowerCase());
    inputId.value = '';
    view();

}
function remove(clicked) {
    for (let i in myArray) {
        if (myArray[i] == clicked.toLowerCase()) {
            myArray.splice(i, 1)
        }

    }
    view();
}