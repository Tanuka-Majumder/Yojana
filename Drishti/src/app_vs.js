'use strict'



window.addEventListener('beforeunload', function (e) {

    e.preventDefault();

    e.returnValue = 'Do you sure';
});



document.getElementById("speak-document").addEventListener("click", function () {
    speakDocument();
});
document.getElementById("speak-by-line").addEventListener("click", function () {
    speakByLineFunc();
});
document.getElementById("stop-speaking").addEventListener("click", function () {
    doStop();
    musicIndex = false;
});
document.getElementById("search-cursor-position").addEventListener("click", function () {
    cursorPosition();
});
document.getElementById("cursor-jump-to-line").addEventListener("click", function () {
    clickJumpToLine();
});
document.getElementById("backward").addEventListener("click", function () {
    backward();
});
document.getElementById("play").addEventListener("click", function () {
    play();
});
document.getElementById("forward").addEventListener("click", function () {
    forward();
});
document.getElementById("hide-header").addEventListener("click", function () {
    hideHeader();
});
document.getElementById("find-deleted-files").addEventListener("click", function () {
    findDeletedFiles();
});
document.getElementById("load-demo").addEventListener("click", function () {
    loadDemo();
});
document.getElementById("night-mode-input").addEventListener("click", function () {
    if (document.getElementById("night-mode-input").checked == true) {
        monaco.editor.setTheme('vs-dark');
        document.getElementById("toolbar").style.background = "#333";
        document.getElementById("toolbar").style.color = "#FFFFF0";
        document.getElementById("console-bar").style.background = "#333";
        var btn_bar = document.getElementById('console-button-bar');
        for (var i = 0; i < btn_bar.children.length; i++) {
            btn_bar.children[i].style.color = "#FFF";
        }
    } else {

        monaco.editor.setTheme('myTheme');
        document.getElementById("toolbar").style.background = "#F5F5F5";
        document.getElementById("toolbar").style.color = "#000000";
        document.getElementById("console-bar").style.background = "#F5F5F5";
        var btn_bar = document.getElementById('console-button-bar');
        for (var i = 0; i < btn_bar.children.length; i++) {
            btn_bar.children[i].style.color = "inherit";
        }
    }
});
document.getElementById("console-button").addEventListener("click", function () {
    hideConsole();
    if (consoleToggle == "s") {
        run();
    }
});
document.getElementById("console-button-run").addEventListener("click", function () {
    run();
});
document.getElementById("console-button-open-tab").addEventListener("click", function () {
    openInNewTab();
});
document.getElementById("console-button-open-window").addEventListener("click", function () {
    openInNewWindow();
});
document.getElementById("character-mode-input").addEventListener("click", function () {
    document.getElementById("code-mode-input").checked = false;
    document.getElementById("overview-mode-input").checked = false;
    document.getElementById("music-mode-input").checked = false;
    if (document.getElementById("character-mode-input").checked === true) {
        modeController = 'charSpeak';
    } else {
        modeController = 'easySpeak';
    }

});
document.getElementById("code-mode-input").addEventListener("click", function () {
    document.getElementById("character-mode-input").checked = false;
    document.getElementById("overview-mode-input").checked = false;
    document.getElementById("music-mode-input").checked = false;
    if (document.getElementById("code-mode-input").checked === true) {
        modeController = 'codeSpeak';
    } else {
        modeController = 'easySpeak';
    }

});
document.getElementById("music-mode-input").addEventListener("click", function () {
    document.getElementById("code-mode-input").checked = false;
    document.getElementById("character-mode-input").checked = false;
    document.getElementById("overview-mode-input").checked = false;
    if (document.getElementById("music-mode-input").checked === true) {
        modeController = 'musicSpeak';
    } else {
        modeController = 'easySpeak';
    }

});
document.getElementById("overview-mode-input").addEventListener("click", function () {
    document.getElementById("code-mode-input").checked = false;
    document.getElementById("character-mode-input").checked = false;
    document.getElementById("music-mode-input").checked = false;
    if (document.getElementById("overview-mode-input").checked === true) {
        modeController = 'overSpeak';
    } else {
        modeController = 'easySpeak';
        musicToggle = false;
    }

});
document.getElementById("result-area-input").addEventListener("click", function () {
    document.getElementById("log-area-input").checked = false;
    if (document.getElementById("result-area-input").checked === true) {
        document.getElementById("console-result").style.width = '0';
        document.getElementById("console-log").style.left = '0';
    } else {
        document.getElementById("console-result").style.width = 'calc((100vw - 50px)*0.6)';
        document.getElementById("console-log").style.left = 'calc((100vw - 50px)*0.6)';
    }
});
document.getElementById("log-area-input").addEventListener("click", function () {
    document.getElementById("result-area-input").checked = false;
    if (document.getElementById("log-area-input").checked === true) {
        document.getElementById("console-log").style.left = '100vw';
        document.getElementById("console-result").style.width = '100%';
    } else {
        document.getElementById("console-result").style.width = 'calc((100vw - 50px)*0.6)';
        document.getElementById("console-log").style.left = 'calc((100vw - 50px)*0.6)';
    }
});
document.getElementById("voice-feedback-input").addEventListener("click", function () {
    if (document.getElementById("voice-feedback-input").checked === true) {
        voiceFbToggole = true;
    } else {
        voiceFbToggole = false;
    }
});
document.getElementById("audio-tutorial").addEventListener("click", function () {

    var val = "Welcome to Monaco Speech Editor! If you want to stop this audio, please press control, alt, and S, in windows system, or press control, option and S, on mac system. Monaco Speech Editor is an online code editor for visually impaired people. It provides several built-in functions to make it easy to read, edit and compile code. If you want to explore these features, please press control, option, and I, to open linear index.  Linear index is a feature list. When you open linear index,  please press arrow, up, or arrow down key to select the feature. Once a feature is selected, It will tell you the feature name and hotkey automatically. If you want to explore the setting of Monaco speech editor, please press control, option, and space to open spotlight. Spotlight is a list of setting. When you open spotlight, you can press arrow, up, or arrow down key to select different setting, press arrow left or arrow right key to toggle the switch. Considering that the spotlight won't tell you the status of a setting automatically when you toggle the switch. My advice is to open the voice cue. If you want to open voice cue, please open spotlight first, then press arrow left or arrow right key. If you want to quit spotlight or linear index, please press any key except direction keys. This is the end of the quick start, please enjoy yourself!";
    easySpeak(val);
});
document.getElementById("open-console-input").addEventListener("click", function () {
    document.getElementById('console-button').click();
});
document.getElementById("speak-console-result").addEventListener("click", function () {
    var doc = getIframeDocument('result-iframe');
    var content = doc.body.innerText;

    if (content == '') {
        easySpeak('console result is empty');
    } else {
        easySpeak(content);
    }
});
document.getElementById("speak-console-log").addEventListener("click", function () {
    var doc = getIframeDocument('log-iframe');
    var logger = doc.getElementById('logger');
    if (logger == null) {
        easySpeak('console log is empty');
    } else {
        easySpeak(logger.innerText);
    }
});
var mute = false;
document.getElementById("mute-input").addEventListener("click", function () {
    if (document.getElementById("mute-input").checked === true) {
        mute = true;
    } else {
        mute = false;
    }
});


window.addEventListener('resize', () => {
    myEditor.layout();
    setTimeout(() => { myEditor.layout() }, 300);
});
document.getElementById("left-nav-button-1").addEventListener("click", e => {
    clickLeftNav(e, 'sidebar-1');
    for (i = 0; i < 250; i = i + 1) {
        setTimeout(() => { myEditor.layout() }, i);
    }
});
document.getElementById("left-nav-button-2").addEventListener("click", e => {
    clickLeftNav(e, 'sidebar-2');
    for (i = 0; i < 250; i = i + 1) {
        setTimeout(() => { myEditor.layout() }, i);
    }
});
document.getElementById("left-nav-button-3").addEventListener("click", e => {
    clickLeftNav(e, 'sidebar-3');
    for (i = 0; i < 250; i = i + 1) {
        setTimeout(() => { myEditor.layout() }, i);
    }
});
document.getElementById("left-nav-button-4").addEventListener("click", e => {
    clickLeftNav(e, 'sidebar-4');
    for (i = 0; i < 250; i = i + 1) {
        setTimeout(() => { myEditor.layout() }, i);
    }
});



var SLNameArray = ['voice-cue-input', 'character-mode-input', 'code-mode-input', 'music-mode-input', 'overview-mode-input', 'voice-feedback-input', 'night-mode-input', 'open-console-input', 'log-area-input', 'result-area-input'];

var topPos;
var innerElementHeight;
var innerElementNumber;
var elementVisibleNumber = 3;
var selectElemIndex = 1;
var scrollDownDistance = 0;
var spotLightToggle = false;
var activePosi = null;

document.getElementById("spot-light-input").addEventListener("click", function () {
    if (document.getElementById("spot-light-input").checked === true) {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("spot-light-canvas").style.display = "block";


        activePosi = document.activeElement;
        activePosi.blur();


        selectElemIndex = 1;
        scrollDownDistance = 0;
        updateSLColor(1);
        speakSL(1);
        updateSLStatus();
        document.getElementById('spot-light-canvas').scrollTop = 0;


        spotLightToggle = true;



    } else {

        spotLightToggle = false;
    }
});


document.addEventListener("keydown", (e) => {
    if (spotLightToggle === true) {

        SLReact(e);
    } else if (LinearIndexToggle === true) {

        LIReact(e);
    }
});


function SLReact(e) {


    topPos = document.getElementById('spot-light-1').offsetTop;
    innerElementHeight = document.getElementById('spot-light-1').offsetHeight;
    innerElementNumber = SLNameArray.length;



    if (e.which == 37) {

        document.getElementById(SLNameArray[selectElemIndex - 1]).click();
        updateSLStatus();
    } else if (e.which == 38) {



        if (selectElemIndex > 1) {
            scrollDownDistance -= innerElementHeight;

            selectElemIndex -= 1;
        }


        updateSLColor(selectElemIndex);
        speakSL(selectElemIndex);


        document.getElementById('spot-light-canvas').scrollTop = topPos + scrollDownDistance;
    } else if (e.which == 39) {



        document.getElementById(SLNameArray[selectElemIndex - 1]).click();
        updateSLStatus();
    } else if (e.which == 40) {


        if (selectElemIndex <= (innerElementNumber - 1)) {
            scrollDownDistance += innerElementHeight;

            selectElemIndex += 1;
        }


        updateSLColor(selectElemIndex);
        speakSL(selectElemIndex);

        document.getElementById('spot-light-canvas').scrollTop = topPos + scrollDownDistance;


    } else {

        document.getElementById('overlay').click();
    }
}



var SLArray;
function createSLMember(SLNameArray) {


    var SoptLightMember = {
        name: "",
        status: false
    }
    var SLArray = [];


    var div = document.createElement('DIV');
    var newMember = Object.create(SoptLightMember);
    newMember.name = '';
    newMember.status = false;
    SLArray.push(newMember);

    for (var i = 0; i < SLNameArray.length; i++) {
        var SLName = document.getElementById(SLNameArray[i]).parentElement.parentElement.innerText;
        var SLStatus = document.getElementById(SLNameArray[i]).checked;
        var newMember = Object.create(SoptLightMember);
        newMember.name = SLName;
        newMember.status = SLStatus;
        SLArray.push(newMember);
    }


    var div = document.createElement('DIV');
    var newMember = Object.create(SoptLightMember);
    newMember.name = "";
    newMember.status = false;
    SLArray.push(newMember);




    for (var i = 0; i < SLArray.length; i++) {
        var div = document.createElement('DIV');
        div.className = 'spot-light-div';
        div.id = 'spot-light-' + (i + 1).toString(10);
        if (i != 0 && i != SLArray.length - 1) {
            div.innerText = SLArray[i].name + (SLArray[i].status ? ":  on" : ": off");
        }

        if (i == 1) {
            div.style.backgroundColor = "#b1b1b1";
            div.style.fontSize = "28px";
        }
        document.getElementById('spot-light-canvas').appendChild(div);
    }

    return SLArray;
}



function updateSLColor(index) {
    var allDiv = document.getElementById('spot-light-canvas').children;

    for (var i = 0; i < allDiv.length; i++) {
        allDiv[i].style.backgroundColor = 'transparent';
        allDiv[i].style.fontSize = "25px";
    }
    allDiv[index].style.backgroundColor = '#b1b1b1';
    allDiv[index].style.fontSize = "28px";
}


function speakSL(index) {
    if (!mute) {
        var allDiv = document.getElementById('spot-light-canvas').children;
        easySpeak(allDiv[index].innerText);
    }
}



function updateSLStatus() {

    for (var i = 1; i < SLArray.length - 1; i++) {
        var SLStatus = document.getElementById(SLNameArray[i - 1]).checked;
        SLArray[i].status = SLStatus;
    }


    var allDiv = document.getElementById('spot-light-canvas').children;
    for (var i = 1; i < allDiv.length - 1; i++) {
        allDiv[i].innerText = SLArray[i].name + (SLArray[i].status ? ":  on" : ": off");
    }
}


document.getElementById("overlay").addEventListener("click", function () {
    document.getElementById("spot-light-canvas").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("spot-light-input").checked = false;
    spotLightToggle = false;

    if (activePosi != null) {
        activePosi.focus();
    }
    activePosi = null;
});

var topPosLI;
var innerElementHeightLI;
var innerElementNumberLI;
var elementVisibleNumberLI = 3;
var selectElemIndexLI = 1;
var scrollDownDistanceLI = 0;
var LinearIndexToggle = true;


document.getElementById("linear-index-input").addEventListener("click", function () {
    if (document.getElementById("linear-index-input").checked === true) {
        document.getElementById("overlay-2").style.display = "block";
        document.getElementById("linear-index-canvas").style.display = "block";



        activePosi = document.activeElement;
        activePosi.blur();


        selectElemIndexLI = 1;
        scrollDownDistanceLI = 0;
        updateSLColorLI(1);
        speakLI(1);
        document.getElementById('linear-index-canvas').scrollTop = 0;

        LinearIndexToggle = true;

    } else {
        LinearIndexToggle = false;
    }
});



var LinearIndexToggle = false;
function LIReact(e) {
    topPosLI = document.getElementById('linear-index-1').offsetTop;
    innerElementHeightLI = document.getElementById('linear-index-1').offsetHeight;
    innerElementNumberLI = document.getElementById('linear-index-canvas').children.length - 2;

    if (e.which == 38) {


        if (selectElemIndexLI > 1) {
            scrollDownDistanceLI -= innerElementHeightLI;
            selectElemIndexLI -= 1;
        }
        document.getElementById('linear-index-canvas').scrollTop = topPosLI + scrollDownDistanceLI;


        updateSLColorLI(selectElemIndexLI);

        speakLI(selectElemIndexLI);
    } else if (e.which == 40) {


        if (selectElemIndexLI <= (innerElementNumberLI - 1)) {
            scrollDownDistanceLI += innerElementHeightLI;
            selectElemIndexLI += 1;
        }
        document.getElementById('linear-index-canvas').scrollTop = topPosLI + scrollDownDistanceLI;


        updateSLColorLI(selectElemIndexLI);

        speakLI(selectElemIndexLI);
    } else if (e.which == 37) {


        speakLI(selectElemIndexLI);
    } else if (e.which == 39) {


        speakLI(selectElemIndexLI);
    } else {

        document.getElementById('overlay-2').click();
    }
}


function updateSLColorLI(index) {
    var allDiv = document.getElementById('linear-index-canvas').children;
    for (var i = 0; i < allDiv.length; i++) {
        allDiv[i].style.backgroundColor = 'transparent';
        allDiv[i].style.fontSize = "25px";
    }
    allDiv[index].style.backgroundColor = '#b1b1b1';
    allDiv[index].style.fontSize = "28px";
}


function speakLI(index) {
    if (!mute) {
        var allDiv = document.getElementById('linear-index-canvas').children;
        var fullName = allDiv[index].innerText;
        var realName = fullName.split('(').shift();
        var realhotKey = fullName.split('+').pop().replace(")", "");
        easySpeak(realName + ', hot key is control, alt and ' + realhotKey + ', In windows systems. On Mac systems, hot key is control, option and ' + realhotKey);
    }
}


document.getElementById("overlay-2").addEventListener("click", function () {
    document.getElementById("linear-index-canvas").style.display = "none";
    document.getElementById("overlay-2").style.display = "none";
    document.getElementById("linear-index-input").checked = false;
    LinearIndexToggle = false;
    doStop();

    if (activePosi != null) {
        activePosi.focus();
    }
    activePosi = null;
});




var voiceCueToggle = false;
document.getElementById("voice-cue-input").addEventListener("click", function () {
    if (document.getElementById("voice-cue-input").checked === true) {
        voiceCueToggle = true;
    } else {
        voiceCueToggle = false;
        easySpeak('close voice cue');
    }
});


document.getElementById('sidebar-4').addEventListener("click", function (evt) {
    if (voiceCueToggle == true) {
        if (evt.target.tagName == "INPUT" && evt.target.id != 'rate' && evt.target.id != 'pitch') {
            if (evt.target.checked == true) {

                easySpeak('open' + evt.target.parentElement.parentElement.innerText);
            } else if (evt.target.checked == false) {
                easySpeak('close' + evt.target.parentElement.parentElement.innerText);
            }
        }
    }
});

var allElem = document.all;
var allBtns = [];
var allSpans = [];
var allLeftNavBtms = [];
for (var i = 0; i < allElem.length; i++) {
    if (allElem[i].tagName == 'BUTTON') {

        allBtns.push(allElem[i]);
    } else if (allElem[i].tagName == 'SPAN') {
        allSpans.push(allElem[i]);
    } else if (allElem[i].className == 'left-nav-button') {
        allLeftNavBtms.push(allElem[i]);
    }
}

for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("mouseover", function (evt) {
        if (voiceCueToggle == true) {
            easySpeak(this.innerText + 'button');
        }
    });
}

for (var i = 0; i < allSpans.length; i++) {
    allSpans[i].addEventListener("mouseover", function (evt) {
        if (voiceCueToggle == true) {
            easySpeak(this.innerText);
        }
    });
}



document.getElementById('left-nav-button-1').addEventListener("click", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('you click explorer navigation button');
    }
});
document.getElementById('left-nav-button-2').addEventListener("click", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('you click upload navigation button');
    }
});
document.getElementById('left-nav-button-3').addEventListener("click", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('you click feature list navigation button');
    }
});
document.getElementById('left-nav-button-4').addEventListener("click", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('you click setting navigation button');
    }
});
document.getElementById('editable-textarea').addEventListener("dblclick", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('you can modify the file name now, click outside of the text box to submit your input.');
    }
});


document.getElementById('left-nav-button-1').addEventListener("mouseover", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('explorer navigation button');
    }
});
document.getElementById('left-nav-button-2').addEventListener("mouseover", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('upload navigation button');
    }
});
document.getElementById('left-nav-button-3').addEventListener("mouseover", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('feature list navigation button');
    }
});
document.getElementById('left-nav-button-4').addEventListener("mouseover", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('setting navigation button');
    }
});
document.getElementById('editable-textarea').addEventListener("mouseover", function (evt) {
    if (voiceCueToggle == true) {
        easySpeak('file name text area, double click to modify the file name');
    }
});





function easySpeak(val) {
    doStop();
    inputTxt = val;
    speak();
}


var modeController = 'easySpeak';


function charSpeak(val) {
    var res = '';
    for (var i = 0; i < val.length; i++) {
        var temp = val[i];
        switch (temp) {
            case ' ':
                temp = "space";
                break;
            case '!':
                temp = "exclamation mark";
                break;
            case '\"':
                temp = "quotation mark";
                break;
            case '#':
                temp = "number sign";
                break;
            case '$':
                temp = "dollar sign";
                break;
            case '%':
                temp = "percent sign";
                break;
            case '&':
                temp = "ampersand";
                break;
            case '\'':
                temp = "apostrophe";
                break;
            case '(':
                temp = "left parenthesis";
                break;
            case ')':
                temp = "right parenthesis";
                break;
            case '*':
                temp = "asterisk";
                break;
            case '+':
                temp = "plus sign";
                break;
            case ',':
                temp = "comma";
                break;
            case '-':
                temp = "hyphen";
                break;
            case '.':
                temp = "full stop";
                break;
            case '/':
                temp = "solidus";
                break;
            case ':':
                temp = "colon";
                break;
            case ';':
                temp = "semicolon";
                break;
            case '<':
                temp = "less than sign";
                break;
            case '=':
                temp = "equals sign";
                break;
            case '>':
                temp = "greater than sign";
                break;
            case '?':
                temp = "question mark";
                break;
            case '@':
                temp = "at sign";
                break;
            case 'A':
                temp = "capital a";
                break;
            case 'B':
                temp = "capital b";
                break;
            case 'C':
                temp = "capital c";
                break;
            case 'D':
                temp = "capital d";
                break;
            case 'E':
                temp = "capital e";
                break;
            case 'F':
                temp = "capital f";
                break;
            case 'G':
                temp = "capital g";
                break;
            case 'H':
                temp = "capital h";
                break;
            case 'I':
                temp = "capital i";
                break;
            case 'J':
                temp = "capital j";
                break;
            case 'K':
                temp = "capital k";
                break;
            case 'L':
                temp = "capital l";
                break;
            case 'M':
                temp = "capital m";
                break;
            case 'N':
                temp = "capital n";
                break;
            case 'O':
                temp = "capital o";
                break;
            case 'P':
                temp = "capital p";
                break;
            case 'Q':
                temp = "capital q";
                break;
            case 'R':
                temp = "capital r";
                break;
            case 'S':
                temp = "capital s";
                break;
            case 'T':
                temp = "capital t";
                break;
            case 'U':
                temp = "capital u";
                break;
            case 'V':
                temp = "capital v";
                break;
            case 'W':
                temp = "capital w";
                break;
            case 'X':
                temp = "capital x";
                break;
            case 'Y':
                temp = "capital y";
                break;
            case 'Z':
                temp = "capital z";
                break;
            case '[':
                temp = "left square bracket";
                break;
            case '\\':
                temp = "reverse solidus";
                break;
            case ']':
                temp = "right square bracket";
                break;
            case '^':
                temp = "circumflex accent";
                break;
            case '_':
                temp = "low line";
                break;
            case '`':
                temp = "grave accent";
                break;
            case '{':
                temp = "left curly bracket";
                break;
            case '|':
                temp = "vertical line";
                break;
            case '}':
                temp = "right curly bracket";
                break;
            case '~':
                temp = "tilde";
                break;
            default:
                temp = val[i];
        }
        res += temp + ' ';
    }
    return res;
}


function codeSpeak(val) {



    var res = '';
    for (var i = 0; i < val.length; i++) {
        var temp = val[i];
        switch (temp) {
            case '!':
                temp = " exclamation ";
                break;
            case '\"':
                temp = " quotation ";
                break;
            case '#':
                temp = " number sign ";
                break;
            case '$':
                temp = " dollar sign ";
                break;
            case '%':
                temp = " percent ";
                break;
            case '&':
                temp = " ampersand ";
                break;
            case '\'':
                temp = " apostrophe ";
                break;
            case '(':
                temp = " left parenthesis ";
                break;
            case ')':
                temp = " right parenthesis ";
                break;
            case '*':
                temp = " asterisk ";
                break;
            case '+':
                temp = " plus ";
                break;
            case ',':
                temp = " comma ";
                break;
            case '-':
                temp = " hyphen ";
                break;
            case '.':
                temp = " full stop ";
                break;
            case '/':
                temp = " solidus ";
                break;
            case ':':
                temp = " colon ";
                break;
            case ';':
                temp = " semicolon ";
                break;
            case '<':
                temp = " less than ";
                break;
            case '=':
                temp = " equals ";
                break;
            case '>':
                temp = " greater than ";
                break;
            case '?':
                temp = " question mark ";
                break;
            case '@':
                temp = " at ";
                break;
            case '[':
                temp = " left square bracket ";
                break;
            case '\\':
                temp = " reverse solidus ";
                break;
            case ']':
                temp = " right square bracket ";
                break;
            case '^':
                temp = " circumflex accent ";
                break;
            case '_':
                temp = " low line ";
                break;
            case '`':
                temp = " grave accent ";
                break;
            case '{':
                temp = " left curly bracket ";
                break;
            case '|':
                temp = " vertical line ";
                break;
            case '}':
                temp = " right curly bracket ";
                break;
            case '~':
                temp = " tilde ";
                break;
            default:
                temp = val[i];
        }
        res += temp;
    }
    return res;
}





var Word = {
    value: "",
    isSymbol: false
}

function findSymbolIndex(val) {



    var codeArray = [];
    var symbolIndex;
    var symbolIndexArr = [];
    var temp;
    for (var i = 0; i < val.length; i++) {
        temp = val[i];
        switch (temp) {
            case '(':
                symbolIndex = i;
                break;
            case ')':
                symbolIndex = i;
                break;
            case ';':
                symbolIndex = i;
                break;
            case '\"':
                symbolIndex = i;
                break;
            case '<':
                symbolIndex = i;
                break;
            case '>':
                symbolIndex = i;
                break;
            case '[':
                symbolIndex = i;
                break;
            case ']':
                symbolIndex = i;
                break;
            case '{':
                symbolIndex = i;
                break;
            case '}':
                symbolIndex = i;
                break;
            default:
                symbolIndex = -1;
        }
        if (symbolIndex != -1) {
            symbolIndexArr.push(symbolIndex);
        }
    }
    return symbolIndexArr;
}

function createWordArray(val) {
    var symbolIndexArray = findSymbolIndex(val);


    var previousIndex = 0;
    var tempStr;
    var wordArray = [];
    for (var i = 0; i < symbolIndexArray.length; i++) {

        tempStr = val.slice(previousIndex, symbolIndexArray[i]);
        if (tempStr != '') {
            var newWord = Object.create(Word);
            newWord.value = tempStr;
            newWord.isSymbol = false;
            wordArray.push(newWord);
        }


        var newWord = Object.create(Word);
        newWord.value = val[symbolIndexArray[i]];
        newWord.isSymbol = true;
        wordArray.push(newWord);


        previousIndex = symbolIndexArray[i] + 1;
    }
    return wordArray;
}


var audio_1, audio_2;
var audio_id_1, audio_id_2;
function CreateMusic(char) {
    audio_id_1 = '';
    audio_id_2 = '';

    switch (char) {
        case '(':
            audio_id_1 = 'piano-ff-1';
            audio_id_2 = 'piano-e-1';
            break;
        case ')':
            audio_id_1 = 'piano-e-1';
            audio_id_2 = 'piano-gg-1';
            break;
        case ';':
            audio_id_2 = 'Big-Rack-Tom';
            break;
        case '\"':
            audio_id_1 = 'Hi-Hat-Closed';
            audio_id_2 = 'Hi-Hat-Closed-1';
            break;
        case '<':
            audio_id_1 = 'piano-aa-1';
            audio_id_2 = 'piano-f-1';
            break;
        case '>':
            audio_id_1 = 'piano-g-1';
            audio_id_2 = 'piano-a-1';
            break;
        case '[':
            audio_id_1 = 'Snare';
            audio_id_2 = 'Hi-Hat-Closed';
            break;
        case ']':
            audio_id_1 = 'Hi-Hat-Closed';
            audio_id_2 = 'Snare';
            break;
        case '{':
            audio_id_1 = 'Snare';
            audio_id_2 = 'Kick';
            break;
        case '}':
            audio_id_1 = 'Kick';
            audio_id_2 = 'Snare';
            break;
    }
    if (audio_id_1 != '') {
        audio_1 = document.getElementById(audio_id_1);
        setTimeout(() => { audio_1.play(); }, 250)
        audio_2 = document.getElementById(audio_id_2);
        audio_2.play();
        audio_2.onended = function () {
            playNext()
        };
    } else {
        audio_2 = document.getElementById(audio_id_2);
        audio_2.play();
        audio_2.onended = function () {
            playNext()
        };
    }
}


var musicIndex = 0;
var musicToggle = false;
var wordArray;
function musicSpeak(val) {

    val = val.replace(/(\r\n|\n|\r)/gm, "");

    wordArray = createWordArray(val);


    musicIndex = 0;
    musicToggle = true;
    easySpeak(' ');

}


function playNext() {

    if (musicIndex < wordArray.length && musicToggle == true) {
        if (wordArray[musicIndex].isSymbol == false) {


            easySpeak(codeSpeak(wordArray[musicIndex].value));
        } else {
            CreateMusic(wordArray[musicIndex].value);
        }
        musicIndex++;
        if (musicIndex == wordArray.length) {
            musicToggle = false;

        }
    }
}



function overDocSpeak() {
    var index = findActiveEditor();
    var file_name = fileArray[index - 1].fileName;
    var max_line = myEditor.getModel().getLineCount();
    var char_count = myEditor.getValue().length;

    var res = 'the filename is ' + file_name + ' the row count is ' + max_line + '  and there are ' + char_count + 'characters in this file ';
    return res;
}

function overLineSpeak(line_number) {
    var char_count = myEditor.getModel().getLineContent(line_number).length;

    var res = 'This is line ' + line_number + ' This line have ' + char_count + ' characters ';
    return res;
}



function speakDocument() {

    if (modeController == 'easySpeak') {
        easySpeak(myEditor.getValue());
    } else if (modeController == 'charSpeak') {
        easySpeak(charSpeak(myEditor.getValue()));
    } else if (modeController == 'codeSpeak') {
        easySpeak(codeSpeak(myEditor.getValue()));
    } else if (modeController == 'overSpeak') {
        easySpeak(overDocSpeak());
    } else if (modeController == 'musicSpeak') {
        musicSpeak(myEditor.getValue());
    } else {
        console.log('Something wrong in speakDocument()');
    }
}

function speakByLine(line_number) {
    if (modeController == 'easySpeak') {
        easySpeak(myEditor.getModel().getLineContent(line_number));
    } else if (modeController == 'charSpeak') {
        easySpeak(charSpeak(myEditor.getModel().getLineContent(line_number)));
    } else if (modeController == 'codeSpeak') {
        easySpeak(codeSpeak(myEditor.getModel().getLineContent(line_number)));
    } else if (modeController == 'overSpeak') {
        easySpeak(overLineSpeak(line_number));
    } else if (modeController == 'musicSpeak') {
        musicSpeak(myEditor.getModel().getLineContent(line_number));
    } else {
        console.log('Something wrong in speakByLine()');
    }
}

function speakByLineFunc() {
    var lineNumber = prompt("Please input the line number:", "");
    if (lineNumber == null || lineNumber == "") {
        easySpeak("You didn't input anything");

    } else {
        speakByLine(lineNumber);
    }
}

function cursorPosition() {
    easySpeak("Line number is " + myEditor.getPosition().lineNumber + "and column number is " + myEditor.getPosition().column);

}


function cursorJumpToLine(line_number) {
    myEditor.setSelection(new monaco.Selection(line_number, 1, line_number, 1));
    myEditor.focus();
}



function clickJumpToLine() {
    var lineNumber = prompt("Please input the line number:", "");
    var lineNumber_int = parseInt(lineNumber, 10);
    if (lineNumber == null || lineNumber == "") {
        easySpeak("You didn't input anything");
    } else if (lineNumber_int < 1 || lineNumber_int > myEditor.getModel().getLineCount()) {
        easySpeak("Your input is out of range");
    } else {
        cursorJumpToLine(lineNumber_int);
    }
}


var languageSelect = document.querySelector('.language-picker');


function syntaxHighlight(langName) {
    var index = findActiveEditor();
    monaco.editor.setModelLanguage(window.monaco.editor.getModels()[index - 1], langName)
    fileArray[index - 1].editorLanguage = langName;

}

languageSelect.onchange = function () {
    syntaxHighlight(languageSelect.value);

}

var currentLineNumber = 1;
var currentColumnNumber = 1;
var clickNumber = 0;


function doPauseResume() {
    if (pauseResume == 'R') {
        window.speechSynthesis.pause();
        document.getElementById("play-pause").src = "./images/play-solid.svg";

        pauseResume = 'P';
    } else if (pauseResume == 'P') {
        window.speechSynthesis.resume();
        document.getElementById("play-pause").src = "./images/pause-solid.svg";

        pauseResume = 'R';
    } else {
        console.log("Unknown state...");
    }
    return false;
}


function speak() {
    pauseResume = 'R';
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }

    if (inputTxt !== '') {
        var utterThis = new SpeechSynthesisUtterance(inputTxt);
        utterThis.onend = function (event) {
            document.getElementById("play-pause").src = "./images/play-solid.svg";
            clickNumber = 0;
            pauseResume = 'R';
            if (musicToggle == true) {
                playNext();
            }

        }
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror');
        }
        var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }
        utterThis.pitch = pitch.value;
        utterThis.rate = rate.value;
        synth.speak(utterThis);
    }
}

function doStop() {
    pauseResume = 'R';
    window.speechSynthesis.cancel();
    return false;
}

function play() {
    musicToggle = false;
    var testTxt = myEditor.getModel().getLineContent(currentLineNumber);
    if (testTxt == "") {
        easySpeak("Information from monaco speech editor: " + "This line is empty");

        return -1;
    }

    clickNumber++;
    if (clickNumber == 1) {


        pauseResume = 'R';
        speakByLine(currentLineNumber);
        document.getElementById("play-pause").src = "./images/pause-solid.svg";
    } else {
        doPauseResume();

    }
}

function backward() {
    doStop();
    clickNumber = 0;

    if (currentLineNumber <= 1) {
        easySpeak("This is the first line");

        return -1;
    } else {
        currentLineNumber--;
        cursorJumpToLine(currentLineNumber);
    }
    document.getElementById("showLineNumber").value = currentLineNumber;
}

function forward() {
    doStop();
    clickNumber = 0;


    var maxLine = myEditor.getModel().getLineCount();
    if (currentLineNumber >= maxLine) {
        easySpeak("This is the last line");

        return -1;
    } else {
        currentLineNumber++;
        cursorJumpToLine(currentLineNumber);
    }
    document.getElementById("showLineNumber").value = currentLineNumber;
}

document.getElementById("showLineNumber").addEventListener("onkeyup", handleEnter);
document.getElementById("showLineNumber").addEventListener("change", jumpToLine);


function jumpToLine() {
    var x = document.getElementById("showLineNumber");
    if (x.value >= 1 && x.value <= myEditor.getModel().getLineCount()) {
        currentLineNumber = x.value;
        cursorJumpToLine(parseInt(currentLineNumber, 10));
    } else {
        x.value = currentLineNumber;
        easySpeak("Your input is out of range");

    }
}

function valueChangeWithCursor() {
    var x = document.getElementById("showLineNumber");
    x.value = currentLineNumber;
}

function updateLineColumnNumber() {
    currentLineNumber = myEditor.getPosition().lineNumber;
    currentColumnNumber = myEditor.getPosition().column;
}

function showLineColumn() {
    document.getElementById("show-line-column").innerHTML = "Line: " + currentLineNumber + ", Column: " + currentColumnNumber;
}

function updateCursorPosition() {
    updateLineColumnNumber();
    showLineColumn();
    valueChangeWithCursor();
}



document.addEventListener('keyup', (e) => {

    if (e.ctrlKey && e.altKey && (e.which == 80 || e.which == 13)) {


        play();
    } else if (e.ctrlKey && e.altKey && e.which == 83) {


        doStop();
        musicToggle = false;
    } else if (e.ctrlKey && e.altKey && e.which == 38) {


        backward();
        play();
    } else if (e.ctrlKey && e.altKey && e.which == 40) {


        forward();
        play();
    } else if (e.ctrlKey && e.altKey && e.which == 65) {


        document.getElementById('character-mode-input').click();
    } else if (e.ctrlKey && e.altKey && e.which == 79) {


        document.getElementById('code-mode-input').click();
    } else if (e.ctrlKey && e.altKey && e.which == 77) {


        document.getElementById('music-mode-input').click();
    } else if (e.ctrlKey && e.altKey && e.which == 86) {


        document.getElementById('overview-mode-input').click();
    } else if (e.ctrlKey && e.altKey && e.which == 74) {


        document.getElementById("showLineNumber").focus();
    } else if (e.ctrlKey && e.altKey && e.which == 73) {




        document.getElementById("linear-index-input").click();
    } else if (e.ctrlKey && e.altKey && e.which == 70) {


        document.getElementById('voice-feedback-input').click();
    } else if (e.ctrlKey && e.altKey && e.which == 85) {


        document.getElementById('voice-cue-input').click();
    } else if (e.ctrlKey && e.altKey && e.which == 68) {


        speakDocument();
    } else if (e.ctrlKey && e.altKey && e.which == 69) {


        document.getElementById('speak-console-result').click();
    } else if (e.ctrlKey && e.altKey && e.which == 76) {


        document.getElementById('speak-console-log').click();
    } else if (e.ctrlKey && e.altKey && e.which == 67) {


        cursorPosition();
    } else if (e.ctrlKey && e.altKey && e.which == 66) {


        document.getElementById('console-button').click();
    } else if (e.ctrlKey && e.altKey && e.which == 82) {


        document.getElementById('console-button-run').click();
    } else if (e.ctrlKey && e.altKey && e.which == 78) {


        document.getElementById('night-mode-input').click();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.which == 32) {

        document.getElementById("spot-light-input").click();
    }
});


function handleEnter() {
    if (e.keyCode == 13) {
        document.getElementById("showLineNumber").blur();
    }
}



function configureEditableTextarea(id, modifyClassName, readOnlyClassName) {
    var textarea = document.getElementById(id);
    textarea.ondblclick = function () {
        this.readOnly = false;
        this.className = modifyClassName;
    }
    textarea.onblur = function () {
        this.readOnly = true;
        this.className = readOnlyClassName;


        var index = findActiveEditor();



        if (document.getElementById(id).value == '') {
            document.getElementById(id).value = fileArray[index - 1].fileName;
        } else {
            fileArray[index - 1].fileName = document.getElementById(id).value;

            document.getElementById("file-list-input-" + index.toString(10)).value = fileArray[index - 1].fileName;
        }
    }

}

configureEditableTextarea("editable-textarea", "textarea-modify", "textarea-readonly");



function configureFilenameText(id, button_id, modifyClassName, readOnlyClassName) {
    var textarea = document.getElementById(id);
    var button = document.getElementById(button_id);
    button.onclick = function () {
        textarea.readOnly = false;
        textarea.className = modifyClassName;
        textarea.focus();
        closeClickSpan = "y";
    }

    textarea.onblur = function () {
        this.readOnly = true;
        this.className = readOnlyClassName;


        var index = parseInt(id.toString(10).split('-').pop());

        if (document.getElementById(id).value == '') {
            document.getElementById(id).value = fileArray[index - 1].fileName;
        } else {
            fileArray[index - 1].fileName = document.getElementById(id).value;
            var active_index = findActiveEditor();

            if (closeClickSpan == "y" & active_index == index) {
                document.getElementById("editable-textarea").value = fileArray[index - 1].fileName;
            }
        }
        closeClickSpan = "n";
    }

}



var closeClickSpan = "n";

document.getElementById("title-button-add").addEventListener("click", function () {
    addFile(noCode, "html", "");

});


var fileCounter = 1;

var trash = document.getElementsByClassName("trash");
var editable = document.getElementsByClassName("editable");
var input = document.getElementsByClassName("editable");
var inputSpan = document.getElementsByClassName("input-span");
var saveSpan = document.getElementsByClassName("save");

var list = document.querySelector('.file-list');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI' && closeClickSpan == 'n') {

        var index = parseInt(ev.target.id.toString(10).split('-').pop());
        activeEditor(index)

    }
}, false);


function addFileView() {
    var li = document.createElement("li");
    li.id = "li-" + fileCounter.toString(10);

    var file_name = fileArray[fileCounter - 1].fileName;
    var input = document.createElement("input");
    input.readOnly = true;
    input.className = "filename-readonly";
    input.id = "file-list-input-" + fileCounter.toString(10);
    input.type = "text";
    input.value = file_name;
    var input_span = document.createElement("SPAN");
    input_span.className = "input-span";
    li.appendChild(input_span);
    input_span.appendChild(input);
    document.getElementById("my-file-list").appendChild(li);

    var save_span = document.createElement("SPAN");
    save_span.className = "save";
    var img = document.createElement("IMG");
    img.src = "./images/save-solid.svg";
    img.className = "title-icon";
    save_span.appendChild(img);
    li.appendChild(save_span);

    var trash_span = document.createElement("SPAN");
    trash_span.className = "trash";
    var img = document.createElement("IMG");
    img.src = "./images/trash-alt-solid.svg";
    img.className = "title-icon";
    trash_span.appendChild(img);
    li.appendChild(trash_span);

    var edit_span = document.createElement("SPAN");
    edit_span.className = "editable";
    edit_span.id = "file-list-edit-" + fileCounter.toString(10);
    var img = document.createElement("IMG");
    img.src = "./images/pen-solid.svg";
    img.className = "title-icon";
    edit_span.appendChild(img);
    li.appendChild(edit_span);


    for (var i = 0; i < trash.length; i++) {
        trash[i].onclick = function () {

            var ThisLi = this.parentElement;
            ThisLi.style.display = "none";

            var index = parseInt(ThisLi.id.toString(10).split('-').pop());
            fileArray[index - 1].isDelete = "true";

            fileArray[index - 1].editorContent = fileArray[index - 1].editor.getValue();


            var fileIndex;
            for (var i = 0; i < fileArray.length; i++) {
                var isAllDelete = "y";
                if (fileArray[i].isDelete == "false") {
                    isAllDelete = "n";
                    fileIndex = i + 1;

                    break;
                }
            }

            if (isAllDelete == "y") {

                addFile(noCode, "html", "");

            } else {


                activeEditor(fileIndex);
            }

        }

        inputSpan[i].onclick = function () {
            if (closeClickSpan == 'n') {

                var ThisLi = this.parentElement;
                var index = parseInt(ThisLi.id.toString(10).split('-').pop());
                activeEditor(index);

            }
        }

        saveSpan[i].onclick = function () {
            var ThisLi = this.parentElement;
            var index = parseInt(ThisLi.id.toString(10).split('-').pop());
            save(index);
        }

        configureFilenameText("file-list-input-" + (i + 1).toString(10), "file-list-edit-" + (i + 1).toString(10), "filename-modify", "filename-readonly");
    }

}



var Files = {
    fileId: "",
    fileName: "",
    isDelete: "false",
    isActive: "",
    editor: null,
    editorContent: "",
    editorLanguage: ""
};

var fileArray = [];


function addFile(code, language, fn) {



    var new_container = document.createElement("DIV");
    new_container.id = "container-" + fileCounter.toString(10);

    new_container.className = "container";

    if (headerHidden == "y") {
        new_container.style.top = "28px";
    } else {
        new_container.style.top = "78px";
    }

    if (leftSidebarStatus == "o") {
        new_container.style.left = "300px";
    } else {
        new_container.style.left = "50px";
    }
    document.getElementById("monaco-speech-editor").appendChild(new_container);

    var editor = newEditor(new_container.id, code, language);


    var file = Object.create(Files);
    file.fileId = fileCounter.toString(10);
    if (fn == '') {
        file.fileName = 'Untitled-' + file.fileId;
    } else {
        file.fileName = fn;
    }
    file.editor = editor;

    file.editorContent = editor.getValue();
    file.editorLanguage = language;

    fileArray.push(file);



    addFileView();


    var index = fileCounter;
    activeEditor(index);
    fileCounter += 1;
}


function voiceFeedback(editor) {


    var row, col, char;
    myEditor.onDidChangeCursorPosition((e) => {
        row = myEditor.getPosition().lineNumber;
        col = myEditor.getPosition().column;
        char = myEditor.getModel().getValueInRange({
            startLineNumber: row,
            startColumn: col - 1,

            endLineNumber: row,
            endColumn: col,
        });

        if (voiceFbToggole === 't') {


            easySpeak(charSpeak(char));
        }
    });
}


var voiceFbToggole = '';
function activeEditor(index) {



    var myList = document.getElementsByTagName("LI");
    for (var i = 0; i < myList.length; i++) {
        myList[i].className = myList[i].className.replace("active", "");
    }
    document.getElementById("li-" + index.toString(10)).classList.toggle('active');



    var allContainer = document.getElementsByClassName("container");
    for (var i = 0; i < allContainer.length; i++) {
        allContainer[i].style.display = "none";
    }

    document.getElementById("container-" + index.toString(10)).style.display = "block";


    myEditor = fileArray[index - 1].editor;


    var char;
    myEditor.onDidChangeCursorPosition((e) => {

        updateCursorPosition();

        if (voiceFbToggole === true) {
            char = myEditor.getModel().getValueInRange({
                startLineNumber: currentLineNumber,
                startColumn: currentColumnNumber - 1,

                endLineNumber: currentLineNumber,
                endColumn: currentColumnNumber,
            });
            easySpeak(charSpeak(char));
        }
    });


    for (var i = 0; i < fileArray.length; i++) {
        fileArray[i].isActive = "false";
    }
    fileArray[index - 1].isActive = "true";


    document.getElementById("editable-textarea").value = fileArray[index - 1].fileName;


    myEditor.layout();





    languageSelect.value = fileArray[index - 1].editorLanguage;
}

function findActiveEditor() {

    for (var i = 0; i < fileArray.length; i++) {
        if (fileArray[i].isActive == "true") {
            var index = i + 1;
            return index;
        }
    }
    return -1;
}




var drop_code = "";

function uploadOn(e, callback) {
    drop_code = e.dataTransfer.getData('text');

    if (drop_code) {

        callback();
    } else {
        getUploadText(e, callback);
    }
}

function getUploadText(e, callback) {
    var files = e.target.files || e.dataTransfer.files;
    var file = files[0];

    if (location.host.indexOf("sitepointstatic") >= 0) return;

    var request = new XMLHttpRequest();
    if (request.upload) {

        var reader = new FileReader();


        var ext = file.name.toString().split('.').pop();
        var filename = file.name.toString().split('.').shift();
        var type;


        if (ext === "json") {
            type = "json";
        } else if (ext === "js") {
            type = "javascript";
        } else if (ext === "php") {
            type = "php";
        } else if (ext === "html") {
            type = "html";
        } else if (ext === "java") {
            type = "java";
        } else if (ext === "py") {
            type = "python";
        } else if (ext === "go") {
            type = "go";
        } else if (ext === "css") {
            type = "css";
        } else if (ext === "cpp" || ext === "C" || ext === "cxx" || ext === "c++" || ext === "cc") {
            type = "css";
        } else if (ext === "c") {
            type = "c";
        } else if (ext === "rb") {
            type = "ruby";
        } else if (ext === "sh") {
            type = "shell";
        } else if (ext === "swift") {
            type = "swift";
        } else if (ext === "ts") {
            type = "typescript";
        } else if (ext === "R") {
            type = "r";
        } else if (ext === "md") {
            type = "markdown";
        } else if (ext === "yml") {
            type = "yaml";
        } else if (ext === "xml") {
            type = "xml";
        }

        reader.readAsText(file);

        reader.onloadend = function (e) {
            drop_code = reader.result;
            if (type != null) {
                addFile(drop_code, type, file.name.toString());

            } else {
                addFile(drop_code, "html", file.name.toString());

            }


        };
    }
}


function uploadFile(e) {
    fileDragHover(e);
    uploadOn(e, updateDropCode);
}

function fileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function updateDropCode() {
    addFile(drop_code, "html", "");


}

function configureDropZone(zone_id) {
    var filedrag = document.getElementById(zone_id);
    filedrag.addEventListener("dragover", fileDragHover, false);
    filedrag.addEventListener("dragleave", fileDragHover, false);
    filedrag.addEventListener("drop", uploadFile, false);
}

configureDropZone("myDropZone");



function handleFileSelect(e) {
    getUploadText(e, updateDropCode);
}

function configureFileSelect(id) {
    document.getElementById(id).addEventListener('change', handleFileSelect, false);
}

configureFileSelect("upload");



function save(index) {
    download(fileArray[index - 1].fileName, fileArray[index - 1].editor.getValue());

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



function findDeletedFiles() {
    alert("Please open the console in your browser.");
    console.log(fileArray);
}



function loadDemo() {

    $.getJSON("./data/code.json", function (data) {
        $.each(data, function (key, val) {
            var ext = key.toString().split('.').pop();

            var type;


            if (ext === "json") {
                type = "json";
            } else if (ext === "js") {
                type = "javascript";
            } else if (ext === "php") {
                type = "php";
            } else if (ext === "html") {
                type = "html";
            } else if (ext === "java") {
                type = "java";
            } else if (ext === "py") {
                type = "python";
            } else if (ext === "go") {
                type = "go";
            } else if (ext === "css") {
                type = "css";
            } else if (ext === "cpp" || ext === "C" || ext === "cxx" || ext === "c++" || ext === "cc") {
                type = "css";
            } else if (ext === "c") {
                type = "c";
            } else if (ext === "rb") {
                type = "ruby";
            } else if (ext === "sh") {
                type = "shell";
            } else if (ext === "swift") {
                type = "swift";
            } else if (ext === "ts") {
                type = "typescript";
            } else if (ext === "R") {
                type = "r";
            } else if (ext === "md") {
                type = "markdown";
            } else if (ext === "yml") {
                type = "yaml";
            } else if (ext === "xml") {
                type = "xml";
            }

            if (type != null) {
                addFile(val, type, key);
            } else {
                addFile(val, "html", key);
            }







        });
    });
}


function run() {
    var text = myEditor.getValue();

    newIframe("result-iframe");

    document.getElementById("result-iframe").contentDocument.write(text);
    var injection = "<script" + ">(function (logger) {conso" + "le.old = console.log;console.log = function () {var output = \"\", arg, i;for (var i = 0; i < argu" + "ments.length; i++) {arg = argume" + "nts[i];output += \"<span class='log-\" + (typeof arg) + \"'>\";if (ty" + "peof arg === \"object\" \&" + "\&typeof JSON === \"object\" \&" + "\&typeof JSON.stringify === \"function\") {output += JSON.stringify(arg);   } else {output += arg;   }output += '<" + "/span>\&nbsp;';}logger.innerHTML += output + '<br>';console.old.apply(undefined, arguments);};})(document.getElementById('logger'));<" + "/script>";
    var hideAllElem = "<script" + ">var nodes = document.all;for(var i=0;i<nodes.length;i++){var o = nodes[i];o.style.display = 'none';}<" + "/script>";
    var showLog = "<script" + ">document.getElementsByTagName('html')[0].style.display = 'block';document.getElementsByTagName('body')[0].style.display = 'block';document.getElementById('logger').style.display = 'block'; var cn = document.getElementById('logger').childNodes;for (var i = 0; i < cn.length; i++) {cn[i].style = 'display: block;';}<" + "/script>";
    var logInput = "<link rel=\"stylesheet\" href=\"./src/style.css\">" + "<div id='logger'></div>" + injection + text + hideAllElem + showLog;
    newIframe("log-iframe");
    document.getElementById("log-iframe").contentDocument.write(logInput);

    document.getElementById("log-iframe").contentDocument.body.style.background = "#FFFFFF";

}

function newIframe(id) {

    var selectedIframe = document.getElementById(id);
    var parent = selectedIframe.parentNode;
    parent.removeChild(selectedIframe);


    var iframe = document.createElement("iframe");
    iframe.id = id;
    parent.appendChild(iframe);
}


function openInNewWindow() {
    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
    var text = myEditor.getValue();
    win.document.write(text);

}

function openInNewTab() {
    var win = window.open("_blank");
    var text = myEditor.getValue();
    win.document.write(text);

}

function getIframeDocument(iframe_id) {
    var iframe = document.getElementById(iframe_id);
    var doc = iframe.contentWindow.document;
    return doc;
}


var leftSidebarStatus = "c";
var leftSidebarSelected = "";
var leftSidebarSelect = "";


function openLeftSideBar() {
    document.getElementById("left-sidebar").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.getElementById("toolbar").style.marginLeft = "250px";
    document.getElementById("console-bar").style.marginLeft = "250px";
    var conta = document.getElementsByClassName("container");
    for (var i = 0; i < conta.length; i++) {
        conta[i].style.left = "300px";
    }
}

function closeLeftSideBar() {
    document.getElementById("left-sidebar").style.width = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("toolbar").style.marginLeft = "0";
    document.getElementById("console-bar").style.marginLeft = "0";
    var conta = document.getElementsByClassName("container");
    for (var i = 0; i < conta.length; i++) {
        conta[i].style.left = "50px";
    }

    var i, tablinks;
    tablinks = document.getElementsByClassName("left-nav-button");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

}

function clickLeftNav(evt, sidebarName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(sidebarName).style.display = "block";

    tablinks = document.getElementsByClassName("left-nav-button");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";


    leftSidebarSelected = leftSidebarSelect;
    leftSidebarSelect = sidebarName;
    if (leftSidebarStatus == "c") {
        openLeftSideBar();
        leftSidebarStatus = "o";
    } else if (leftSidebarSelected == leftSidebarSelect) {
        closeLeftSideBar();
        leftSidebarStatus = "c"
        leftSidebarSelect = "";
    }
}


function init() {

    SLArray = createSLMember(SLNameArray)


    addFile(htmlCode, "html", "");


    document.getElementById("code-mode-input").click();
}
init();



function hideSection(evt, section_id, icon_id) {
    var selectedElement = document.getElementById(section_id);
    var selectedIcon = document.getElementById(icon_id);
    if (evt.currentTarget.className.toString().split(' ').pop() != "hidden") {
        selectedElement.style.display = "none";
        evt.currentTarget.className += " hidden";
        selectedIcon.style = "-webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg);-o-transform: rotate(-90deg);-ms-transform: rotate(-90deg);transform: rotate(-90deg);";
    } else {
        selectedElement.style.display = "block";
        evt.currentTarget.className = evt.currentTarget.className.replace(" hidden", "");
        selectedIcon.style = "";
    }
}


var headerHidden = "y"
function hideHeader() {
    if (headerHidden == "n") {
        document.getElementById("header").style.display = "none";
        document.getElementById("toolbar").style.top = "0px";

        var conta = document.getElementsByClassName("container");
        for (var i = 0; i < conta.length; i++) {
            conta[i].style.top = "28px";
        }
        headerHidden = "y";
    } else {
        document.getElementById("header").style.display = "block";
        document.getElementById("toolbar").style.top = "50px";

        var conta = document.getElementsByClassName("container");
        for (var i = 0; i < conta.length; i++) {
            conta[i].style.top = "78px";
        }
        headerHidden = "n";
    }
}


var consoleToggle = "h";
function hideConsole() {
    if (consoleToggle == "h") {


        document.getElementById("console-button-run").style.display = "inline-block";
        document.getElementById("console-button-open-window").style.display = "inline-block";
        document.getElementById("console-button-open-tab").style.display = "inline-block";

        var btn_bar = document.getElementById('console-button-bar');
        for (var i = 0; i < btn_bar.children.length; i++) {
            btn_bar.children[i].style.height = '29px';
            btn_bar.children[i].style.fontSize = '14px';
        }

        console_border_style = "1px solid";
        document.getElementById("console-bar").style.borderTop = console_border_style + console_border_color;

        document.getElementById("console-bar").style.WebkitTransform = "translateY(-310px)";

        document.getElementById("console-bar").style.msTransform = "translateY(-310px)";

        document.getElementById("console-bar").style.transform = "translateY(-310px)";
        consoleToggle = "s";

        document.getElementById('open-console-input').checked = true;
    } else {


        document.getElementById("console-button-run").style.display = "none";
        document.getElementById("console-button-open-window").style.display = "none";
        document.getElementById("console-button-open-tab").style.display = "none";

        var btn_bar = document.getElementById('console-button-bar');
        for (var i = 0; i < btn_bar.children.length; i++) {
            btn_bar.children[i].style.height = '20px';
            btn_bar.children[i].style.fontSize = '12px';
        }

        console_border_style = "0px none";
        document.getElementById("console-bar").style.borderTop = console_border_style + console_border_color;

        document.getElementById("console-bar").style.WebkitTransform = "translateY(0)";

        document.getElementById("console-bar").style.msTransform = "translateY(0)";

        document.getElementById("console-bar").style.transform = "translateY(0)";
        consoleToggle = "h";

        document.getElementById('open-console-input').checked = false;
    }
}

var console_border_style = "0px none";
var console_border_color = "#bbbbbb";

document.getElementById("night-mode-input").addEventListener("click", function () {

    if (document.getElementById("night-mode-input").checked === true) {
        console_border_color = "#000000";



        document.getElementById("console-bar").style.borderTop = console_border_style + console_border_color;
    } else {
        console_border_color = "#bbbbbb";



        document.getElementById("console-bar").style.borderTop = console_border_style + console_border_color;
    }

});




function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function (path, callback) {
    this.routes[path] = callback || function () { };
};
Router.prototype.refresh = function () {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();

Router.route('/', function () {


});
Router.route('load-demo', function () {
    document.getElementById("load-demo").click();
});
Router.route('dark', function () {
    document.getElementById("night-mode-input").click();
});
Router.route('full-screen', function () {
    document.getElementById("left-nav-button-1").click();
    document.getElementById("hide-header").click();
});
Router.route('run', function () {
    document.getElementById("console-button").click();
});
Router.route('tutorial', function () {
    setTimeout(() => { document.getElementById("audio-tutorial").click(); }, 1000);
});
Router.route('spotlight', function () {
    document.getElementById("spot-light-input").click();
});
Router.route('linear-index', function () {
    document.getElementById("linear-index-input").click();
});
Router.route('character-mode', function () {
    document.getElementById("character-mode-input").click();
});
Router.route('code-mode', function () {
    document.getElementById("code-mode-input").click();
});
Router.route('overview-mode', function () {
    document.getElementById("overview-mode-input").click();
});
Router.route('voice-feedback', function () {
    document.getElementById("voice-feedback-input").click();
});
Router.route('voice-cue', function () {
    document.getElementById("voice-cue-input").click();
});
Router.route('mute', function () {
    document.getElementById("mute-input").click();
});
Router.route('dark&run', function () {
    document.getElementById("night-mode-input").click();
    document.getElementById("console-button").click();
});
Router.route('dark&mute', function () {
    document.getElementById("night-mode-input").click();
    document.getElementById("mute-input").click();
});