// 10k-50k
// Get 1
const group1 = [
    '#codingdays',
    '#javascriptdeveloper',
    '#programminglanguage',
    '#stackoverflow',
    '#uxuidesign',
    '#uidesign',
    '#webprogramming',
    '#htmlcss',
    '#vscode'
]

// 50k-100k
// Get 3
const group2 = [
    '#instacode',
    '#100daysofcode',
    '#vuejs',
    '#websitedeveloper',
    '#responsivewebdesign',
    '#programmerrepublic',
    '#developerslife',
    '#fullstackdeveloper',
    '#programmingisfun',
    '#fullstack',
    '#codelife',
    '#learntocode',
]

// 100k-500k
// Get 5
const group3 = [
    '#webdev',
    '#frontenddeveloper',
    '#html5',
    '#reactjs',
    '#programminglife',
    '#jquery',
    '#codinglife',
    '#github',
    '#coderlife',
    '#programmers',
    '#css3',
    '#responsivedesign',
    '#responsive',
    '#digitalworld',
    '#developerlife',
    '#devlife',
    '#coder',
    '#coders',
    '#codingisfun',
    '#nodejs',
    '#mysql',
    '#worldcode',
    '#techgeek',
    '#desksetup',
    '#backend',
    '#prototyping',
    '#programmerlife',
    '#webdevelopers'
]

// 500k-1m
// Get 1
const group4 = [
    '#softwaredeveloper',
    '#computerscience',
    '#uxdesign',
    '#webdesigner',
    '#dev'

]

// 1m-2m
// Get 3
const group5 = [
    '#css',
    '#html',
    '#websitedesign',    
    '#javascript',
    '#js',
    '#webdeveloper',
    '#programmer',
    '#webdevelopment',
    '#ux',
    '#computers', 
]

// 2m+
// Get 3
const group6 = [
    '#developer',
    '#website',    
    '#computer',
    '#code',
    '#coding',
    '#programming',
    '#software',
    '#contentcreator',
    '#webdesign',
    '#development',
    '#web',

]

// Setup pics -- <100k
const setupSmall = [
    '#deskinspiration', // 37k
    '#cleansetups', // 25k
    '#minimalsetups', // 94k
    '#officeinspiration', // 97k
    '#desksituation', // 51k
    '#designyourworkspace', // 55k
    '#workspaceinspo', // 60k
    '#workdesk', // 91k
    '#techlovers', // 28k  
    '#thedreamsetup', // 3k
]

const setupMed = [
    '#pcbuild', // 350k
    '#workspacegoals', // 120k
    '#workfromwherever', // 115k
    '#setupinspiration', // 100k
    '#deskgoals', // 170k
    '#techlife', // 338k
    '#desktop', // 580k
    '#workstation', // 670k
]

// Setup pics -- 100k+
// Get 4
const setupBig = [
    '#gearporn', // 900k
    '#instatech', // 1.3m
    '#homeoffice', // 2m
    '#workspace', // 2m
    '#desk', // 1.7m
    '#technology', // 12m
    '#ux', // 1.7m
    '#ui', // 2.1m
]

// Women in Tech
// Get 2
const wit = [
    '#girlswhocode',
    '#womenwhocode',
    '#girlprogrammer',
    '#womeninstem',
    '#womenintech',    
]

// Info Gallery posts
// Get 1
const infoPost = [
    '#digitalcontent',
    '#adobexd',
    '#uiux',
    '#uxui',
    '#userinterface',
    '#interface',
    '#educateyourself',
    '#selftaught',
    '#onlinelearning',
    '#ux', // 1.7m
    '#ui', // 2.1m
]

// Person in shot
const person = [
    '#peoplewithlaptops',
    '#workingremotely',
    '#freelancerlife',
    '#remoteworker',
    '#remotelife',
    '#workingfromhome',
    '#workfromhomelife',
    '#ilovemyjob',
];

// Fisher-Yates Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Shuffle Array, return first X items
function getItems(array, x){
    let shuffledItems = shuffle(array);
    //console.log(shuffledItems);

    let selectedItems = shuffledItems.slice(0, x);
    //console.log(selectedItems);

    return selectedItems;
}

// Replaces commas with spaces
function parseArray(array){
    return array.toString().replace(/,/g, '&nbsp;');
}

// Return X number of hashtags from array
function getHashtags(array, x){
    let arrHashtags = [], result = "";
    arrHashtags.push(getItems(array, x));

    result = parseArray(arrHashtags);
    return result;
}

function getAllHashtags(){
    let hashtags = '';

    // Computer Setup shot
    if (document.getElementById('chkSetup').checked){
        hashtags = getHashtags(group1, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group2, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group3, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(group4, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group5, 4);
        hashtags = hashtags + '&nbsp;' + getHashtags(group6, 5);
        hashtags = hashtags + '&nbsp;' + getHashtags(wit, 1);

        hashtags = hashtags + '&nbsp;' + getHashtags(setupSmall, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(setupMed, 5);
        hashtags = hashtags + '&nbsp;' + getHashtags(setupBig, 5);
    }

    // Setup + person
    if (document.getElementById('chkPerson').checked){
        hashtags = getHashtags(person, 3);
        
        hashtags = hashtags + '&nbsp;' + getHashtags(group1, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group2, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group3, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(group4, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group5, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(group6, 4);
        hashtags = hashtags + '&nbsp;' + getHashtags(wit, 1);

        hashtags = hashtags + '&nbsp;' + getHashtags(setupSmall, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(setupMed, 5);
        hashtags = hashtags + '&nbsp;' + getHashtags(setupBig, 5);
    }

    // Info gallery
    if (document.getElementById('chkInfo').checked){
        hashtags = getHashtags(infoPost, 7);
        
        hashtags = hashtags + '&nbsp;' + getHashtags(group1, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group2, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group3, 4);
        hashtags = hashtags + '&nbsp;' + getHashtags(group4, 2);
        hashtags = hashtags + '&nbsp;' + getHashtags(group5, 6);
        hashtags = hashtags + '&nbsp;' + getHashtags(group6, 6);
    }
    
    document.getElementById('result').innerHTML = hashtags;

    document.getElementById('count').innerHTML = "Hashtag Count: " + hashtags.trim().split(/\&nbsp;+/).length;
}

document.getElementById('chkSetup').click();
getAllHashtags();