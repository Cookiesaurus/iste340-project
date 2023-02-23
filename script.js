// Evan Hiltzik

function $(id) {
    return document.getElementById(id);
}

function $$(tag, index) {
    return document.getElementsByTagName(tag)[index];
}

var data = {
        // accessor: [???, option1, opt2, opt3, ...]
        // css: ['media/css/file.css', 'potentialOtherFileForOtherDataset.css'],
        init: ['Select a Genre', '--choose one--','Horror', 'Action', 'Comedy'],
        Horror: ['Choose a Horror Genre','--choose one--', 'Scifi', 'Zombie', 'Slasher'],
        Action: ["Choose an Action Genre", '--choose one--',"Thriller", "Mystery", "Adventure"],
        Comedy: ["Choose a Comedy Genre", '--choose one--',"Scary", "Romantic", "Exciting"],

        Scifi: ["Choose a Release Decade", '--choose one--',"(SF) 1990s", "(SF) 2000s", "(SF) 2010s"],
        Zombie: ["Choose a Release Decade", '--choose one--',"(ZH) 1990s", "(ZH) 2000s", "(ZH) 2010s"],
        Slasher: ["Choose a Release Decade", '--choose one--',"(SH) 1990s", "(SH) 2000s", "(SH) 2010s"],

        Thriller: ["Choose Thriller for Loop",'--choose one--', 'Thriller', "(TA) 1990s", "(TA) 2000s", "(TA) 2010s"],
        Mystery: ["Choose a Release Decade",'--choose one--', "(MA) 1990s", "(MA) 2000s", "(MA) 2010s"],
        Adventure: ["Choose a Release Decade", '--choose one--',"(AA) 1990s", "(AA) 2000s", "(AA) 2010s"],

        Scary: ["Choose a Release Decade", '--choose one--',"(SC) 1990s", "(SC) 2000s", "(SC) 2010s"],
        Romantic: ["Choose a Release Decade", '--choose one--',"(RC) 1990s", "(RC) 2000s", "(RC) 2010s"],
        Exciting: ["Choose a Release Decade", '--choose one--',"(EC) 1990s", "(EC) 2000s", "(EC) 2010s"]
    }

var results = {
    // Sci-fi Horror
    '(SF) 1990s': ["Event Horizon (1997)","Cube (1997)","Tremors (1990)","Body Snatchers (1993)"],
    '(SF) 2000s': ["The Mist (2007)","Cloverfield (2008)","The Happening (2008)","Pandorum (2009)"],
    '(SF) 2010s': ["The Platform (2019)","V/H/S (2012)","Color Out of Space (2019)","Circle (2015)"],

    // Zombie Horror
    '(ZH) 1990s': ["Night of the Living Dead (1990)","The Boneyard (1991)","Army of Darkness (1992)","Braindead (1992)"],
    '(ZH) 2000s': ["28 Days Later (2002)","28 Weeks Later (2007)","Slither (2006)","I Am Legend (2007)"],
    '(ZH) 2010s': ["World War Z (2013)","Train to Busan (2016)","Zombieland: Double Tap (2019)","The Cabin in the Woods (2012)"],

    // Slasher Horror
    '(SH) 1990s': ["Scream (1996)","Candyman (1992)","I Know What you did last summer (1997)","Bride of Chucky (1998)"],
    '(SH) 2000s': ["Trick 'r Treat (2007)","Halloween (2007)","Freddy vs Jason (2003)","Identity (2003)"],
    '(SH) 2010s': ["Green Room (2015)","Happy Death Day (2017)","It Follows (2014)","Haunt (2019)"],

    // Thriller Action
    '(TA) 1990s': ["Jacob's Ladder (1990)","The Game (1997)","Mission: Impossible (1996)","Leon: The Professional (1994)"],
    '(TA) 2000s': ["The Machinist (2004)","The Butterfly Effect 20(04)","1408 (2007)","Orphan (2009)"],
    '(TA) 2010s': ["Vivarium (2019)","The Call (2013)","Inception (2010)","Split (2016)"],

    // Mystery Action
    '(MA) 1990s': ["Perfect Blue (1997)","Twin Peaks: Fire Walk With Me (1990)","Se7en (1995))","The Silence of the Lambs (1991))"],
    '(MA) 2000s': ["Memento (2000)","Oldboy (2003)","Kiss Kiss, Bang Bang (2005)","Zodiac (2007)"],
    '(MA) 2010s': ["Knives Out (2019)","Annihilation (2018)","Blade Runner 2049 (2017)","Shutter Island (2010)"],

    // Adventure Action
    '(AA) 1990s': ["The Fifth Element (1997)","The Mummy (1999)","Stargate (1994)","Waterworld (1995)"],
    '(AA) 2000s': ["Casino Royale (2006)","Sunshine (2007)","Watchmen (2009)","Serenity (2005)"],
    '(AA) 2010s': ["Interstellar (2014)","Logan (2017)","Guardians of the Galaxy (2014)","The Dark Knight Rises (2012)"],

    // Scary Comedy
    '(SC) 1990s': ["Scream (1995)","Buffy the Vampire Slayer (1992)","Dracula: Dead and Loving It (1995)","Troll 2 (1990)"],
    '(SC) 2000s': ["Shaun of the Dead (2004)","Hot Fuzz (2007)","Bubba Ho-Tep (2002)","Slither (2006)"],
    '(SC) 2010s': ["Tucker and Dale vs Evil (2010)","Fright Night (2011)","Rubber (2010)","What We Do in the Shadows (2014)"],

    // Romantic Comedy
    '(RC) 1990s': ["Forrest Gump (1994)","Only You (1994)","Groundhog Day (1993)","Pretty Woman (1990)"],
    '(RC) 2000s': ["Amelie (2001)","Bridget Jones's Diary (2001)","500 Days of Summer (2009)","The 40-Year-Old Virgin (2005)"],
    '(RC) 2010s': ["Crazy, Stupid, Love (2011)","Man Up (2015)","Obvious Child (2014)","Silver Linings Playbook (2012)"],

    // Exciting Comedy
    '(EC) 1990s': ["Rush Hour (1998)","Demolition Man (1993)","Lock, Stock and Two Smoking Barrels (1998)","Men in Black (1997)"],
    '(EC) 2000s': ["Pineapple Eexpress (2008)","Hancock (2008)","The Incredibles (2004)","Tropic Thunder (2008)"],
    '(EC) 2010s': ["Guns Akimbo (2019)","Deadpool (2016)","Kingsman: The Secret Service (2014)","Sherlock Holmes (2011)"]
}

function build(dom) {
    if (typeof(dom) == 'string') {
        // first time here, use init array
        var hold = data[dom]; // where dom might equal "Horror"

    } else { // data is a dom object, not string object ('init'), so been here before!
        var hold = data[dom.value];

        // while dom != last child of dom.parent Node, kill last child
        while (dom.parentNode != dom.parentNode.parentNode.lastChild) {
            dom.parentNode.parentNode.removeChild(dom.parentNode.parentNode.lastChild);
        }
    }

    if (hold != undefined) { // if there is still data choices, build data
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'selection');

        let hdng = document.createElement("h2");
            hdng.appendChild(document.createTextNode(hold[0]));
            newDiv.append(hdng);

        let select = document.createElement("select");
        select.onchange = function(){ build(this); };
            
        // iterates over options using hold as a key
        for(var i=1, len=hold.length;i<len;i++) {
            let option = document.createElement('option');
            option.value = hold[i];
            option.textContent = hold[i];
            select.append(option);
        }

        newDiv.append(select);
        $('selectDiv').appendChild(newDiv);

    }
    else {
        // no data left - create form!
        generateForm();
        console.log('done!');
    }
    
}

// generateForm generates a form, whose input
// is saved to localStorage for autofill later
function generateForm() {
    let formDiv = document.createElement('div');
    let finalForm = document.createElement('input');
    finalForm.type = "text";
    finalForm.id = 'firstName';
    finalForm.setAttribute('required', true);
    $('body').appendChild(formDiv);
}

// readBack reads back the recommendations
// as determined by the final selected option
function readBack() {
    if ($('selectDiv').getElementsByTagName('select').length < 3) {
        alert("Please choose from all select menus!");
    }
    else if ($('selectDiv').lastChild.lastChild.value == "--choose one--") {
        alert ("Please choose a release decade!");
    }

    else {
        var finalChoice = $('selectDiv').lastChild.lastChild.value;
        console.log("final choice: " + finalChoice);

        var recs = results[finalChoice]

        recsDiv = document.createElement('div');
        recsDiv.setAttribute('id', 'recs');

        // iteratively display recs using finalChoice as key
        for (var i=0, len=recs.length; i<len; i++) {
            console.log("index is " + i + " and value is " + recs[i]);
            recsDiv.appendChild(document.createTextNode(recs[i]));
            recsDiv.append("\n");
        }

        if (!$('recsDiv')) {
            document.body.appendChild(recsDiv);
        }

        else {$('recsDiv').remove(); document.body.appendChild(recsDiv);}
    }
}

// collectSelections collects all selected values once "Show My Recommendations!" is clicked
// and saves them to a cookie so that they can be shown upon return to the site
function collectSelections() {
    var stringHold = '';

    for (let i=0, len=$('selectDiv').getElementsByTagName('select').length; i<len; i++) {
        stringHold += $('selectDiv').getElementsByTagName('select')[i].value + "|"
    }

    stringHold = stringHold.substring(0, stringHold.length-1);
    console.log(stringHold);
}
    
// Validates user input from name
function validate(){
    var input = $('name').value;
    var letters = /^[A-Za-z]+$/;

    if(input.length == 0 || !input.match(letters)) {
        alert("Please enter a name!");
    } else { saveData(); }
}

// saveData saves form data to localStorage
function saveData(){
    //get info
    let inputName = $("name");

    //set local storage
    localStorage.setItem("inputName", inputName.value);

    //retrieve local storage
    let name = localStorage.getItem("inputName");

    //output
    let hello = document.createElement('p');
    hello.setAttribute('id', 'hello');

    let text = document.createTextNode("Hello, " + name + "!");
    
    hello.appendChild(text);

    $('heading').append(hello);
    // how to prevent multiple appends if button has already been clicked?
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