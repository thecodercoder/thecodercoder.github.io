// 10k-50k
// Get 1
const group1 = [
    '#codingdays',
    '#javascriptdeveloper',
    '#programminglanguage',
    '#stackoverflow',
    '#uxuidesign',
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
    '#codingisfun',
    '#nodejs',
    '#mysql',
    '#worldcode',
    '#techgeek',
]

// 500k-1m
// Get 1
const group4 = [
    '#softwaredeveloper',
    '#computerscience',
    '#uxdesign',   
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
]

// Setup pics -- <100k
// Get 3
const setupSmall = [
    '#deskinspiration',
    '#cleansetups',
    '#setupinspiration',
    '#minimalsetups',
    '#officeinspiration',
    '#desksituation',
    '#designyourworkspace',
    '#workspaceinspo',
    '#workdesk',
    '#techlovers',    
    '#freelancerlife',
    '#remoteworker',
]

// Setup pics -- 100k+
// Get 4
const setupBig = [
    '#gearporn',
    '#deskgoals',
    '#workspacegoals',
    '#instatech',
    '#desktop',
    '#workstation',
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
]

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

    if (document.getElementById('chkSetup').checked){
        hashtags = hashtags + getHashtags(group1, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group2, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(group3, 5);
        hashtags = hashtags + '&nbsp;' + getHashtags(group4, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group5, 5);
        hashtags = hashtags + '&nbsp;' + getHashtags(group6, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(wit, 1);

        hashtags = hashtags + '&nbsp;' + getHashtags(setupSmall, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(setupBig, 4);
    }
    else {
        hashtags = hashtags + getHashtags(group1, 1);
        hashtags = hashtags + '&nbsp;' + getHashtags(group2, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(group3, 8);
        hashtags = hashtags + '&nbsp;' + getHashtags(group4, 2);
        hashtags = hashtags + '&nbsp;' + getHashtags(group5, 6);
        hashtags = hashtags + '&nbsp;' + getHashtags(group6, 3);
        hashtags = hashtags + '&nbsp;' + getHashtags(wit, 1);
    }

    if (document.getElementById('chkInfo').checked){
        hashtags = hashtags + '&nbsp;' + getHashtags(infoPost, 2);
    }
    
    document.getElementById('result').innerHTML = hashtags;

    document.getElementById('count').innerHTML = "Hashtag Count: " + hashtags.trim().split(/\&nbsp;+/).length;
}