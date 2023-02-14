// Evan Hiltzik

let selectMenus = selectInfo.menus; // array of all choice objects
let recInfo = dataInfo.info; // array of all recommendation objects
let selectDiv = $("selectDiv");
let key = "";

var collection = [];

createNextSelect("Main");  

function $(id) {
    return document.getElementById(id);
}

function $$(tag, index) {
    return document.getElementsByTagName(tag)[index];
}

// Creates next select based on the key (not the depth) of the previous select
function createNextSelect(key) {

    for (let i = 0; i < selectMenus.length; i++) {
        if (selectMenus[i].key == key) { // 

            let div = document.createElement("div");
            // div.className = selectMenus[i].depth;
            selectDiv.append(div);

            let hdng = document.createElement("h2");
            hdng.appendChild(document.createTextNode(selectMenus[i].description));
            div.append(hdng);

            let select = document.createElement("select");
            div.append(select);

            let option = document.createElement("option");
            option.value = selectMenus[i].key;
            option.textContent = "Make A Selection";
            select.append(option);

            selectMenus[i].options.forEach(element => {
                let optionA = document.createElement("option");
                optionA.value = element;
                optionA.textContent = element;
                select.append(optionA);
            });

            select.onchange = reloadSelect;
        }
    } 
}

// Re-creates the select elements based on previous choice
function reloadSelect() {

    if(this.className == 0){
        collection.pop();

        // removeElementsByClass(1);
        // removeElementsByClass(2);
        createNextSelect(this.value);
    }
    else if(this.className == 1){
            // removeElementsByClass(2);  
            createNextSelect(this.value);          
    }
    else {
        createNextSelect(this.value);
    }

    collection.push(this.value);
    console.log(collection);

};

// Removes elements based on the depth of the question
// function removeElementsByClass(className){
//     let elements = document.getElementsByClassName(className);
//     while(elements.length > 0){
//         elements[0].parentNode.removeChild(elements[0]);
//     }
// }

// Validates user input from form
function validate(){
    
    if($("name").value.length == 0) {
        alert("Please enter a name!");
    }

    else { saveData(); }

}

function saveData(){
    //get info
    let inputName = $("name");

    //set local storage
    localStorage.setItem("inputName", inputName.value);

    //retrieve local storage
    let name = localStorage.getItem("inputName");

    //output
    let text = document.createTextNode("Hello, " + name + "!");
    $("hello").appendChild(text);
}

function reset() {
    rmo
    createNextSelect("Main");
    collection.length = 0;
}

// readBack sets the text of the title
// tag depending on the final select 
// choice, then calls getRecs
function readBack() {

    key = collection[(collection.length - 1)];
    var head = $("displayHead");
    let title = "";

    // would a switch statement be better for this?
    if (key == "(SF) 1990s") {
        title = "1990s Sci-Fi Horror Flicks"
    }
    else if (key == "(SF) 2000s") {
        title = "2000s Sci-Fi Horror Flicks";   
    }
    else if (key == "(SF) 2010s") {
        title = "2010s Sci-Fi Horror Flicks";
    }
    else if (key == "(Z) 1990s") {
        title = "1990s Zombie Horror Flicks"
    }
    else if (key == "(Z) 2000s") {
        title = "2000s Zombie Horror Flicks";   
    }
    else if (key == "(Z) 2010s") {
        title = "2010s Zombie Horror Flicks";
    }
    else if (key == "(S) 1990s") {
        title = "1990s Zombie Horror Flicks"
    }
    else if (key == "(S) 2000s") {
        title = "2000s Slasher Horror Flicks";   
    }
    else if (key == "(S) 2010s") {
        title = "2010s Slasher Horror Flicks";
    }
    else if (key == "(T) 1990s") {
        title = "1990s Thriller Flicks"
    }
    else if (key == "(T) 2000s") {
        title = "2000s Thriller Flicks";   
    }
    else if (key == "(T) 2010s") {
        title = "2010s Thriller Flicks";
    }
    else if (key == "(M) 1990s") {
        title = "1990s Mystery Flicks"
    }
    else if (key == "(M) 2000s") {
        title = "2000s Mystery Flicks";   
    }
    else if (key == "(M) 2010s") {
        title = "2010s Mystery Flicks";
    }
    else if (key == "(A) 1990s") {
        title = "1990s Adventure Flicks"
    }
    else if (key == "(A) 2000s") {
        title = "2000s Adventure Flicks";   
    }
    else if (key == "(A) 2010s") {
        title = "2010s Adventure Flicks";
    }
    else if (key == "(HC) 1990s") {
        title = "1990s Horror Comedy Flicks"
    }
    else if (key == "(HC) 2000s") {
        title = "2000s Horror Comedy Flicks";   
    }
    else if (key == "(HC) 2010s") {
        title = "2010s Horror Comedy Flicks";
    }
    else if (key == "(RC) 1990s") {
        title = "1990s Romantic Comedy Flicks"
    }
    else if (key == "(RC) 2000s") {
        title = "2000s Romantic Comedy Flicks";   
    }
    else if (key == "(RC) 2010s") {
        title = "2010s Romantic Comedy Flicks";
    }
    else if (key == "(AC) 1990s") {
        title = "1990s Action Comedy Flicks"
    }
    else if (key == "(AC) 2000s") {
        title = "2000s Action Comedy Flicks";   
    }
    else if (key == "(AC) 2010s") {
        title = "2010s Action Comedy Flicks";
    }
    
    head.innerText = title;
    getRecs(key);
}

// getRecs uses the final select choice
// as a key for the movie recommendation
// array in ChoiceData.js
function getRecs(key) {

    var text = $("displayText");
    var name = $("displayName");
    var userName = localStorage.getItem("inputName");

        for (let i = 0; i <= recInfo.length; i++) {
            if (recInfo[i].key == key) {

                // set text of tags using data
                name.appendChild(document.createTextNode("Here are your recommendations, " + userName + ". Enjoy!"));

                var data = recInfo[i].text;
                text.append(data);

            }
        }
    // let nameEle = document.createElement('p');
    // nameEle.setAttribute('class', 'nameP');    
}