var meows = 0
var meowss = 0;
var words = document.getElementById("words")
var button = document.querySelectorAll("#note");
var mousedownID = [];  //Global ID of mouse down interval
let counterDown = 0;
let text = ""
var fullWidth = window.innerWidth;
var fullHeight = window.innerHeight;
var content = document.getElementsByClassName("white-notes")[0];
var whiteNotes = content.getElementsByTagName("button");
var nextcontent = document.getElementsByClassName("black-notes")[0];
var blackNotes = nextcontent.getElementsByTagName("button");
document.body.style.backgroundColor = "#ffffff"
docBackground = document.body.style.backgroundColor;
poemColor = whiteNotes[0].style.backgroundColor;
document.body.style.fontFamily = "Times New Roman";
var poemFont = document.body.style.fontFamily;
var noise = 15;
var windowNO = 15;
var letsgo;
var anime = 15;
var timer = 0; 
var bigeyes = 15;



const poemOne = "If the psychological response to mourning is an appropriation of the lost thing then this project is a response"
const poemTwo = "A subversive laughter in the idea of the original becoming a parody"
const poemThree = "Can seduction addiction or temptation rely on verifying a truth or suspicion"
const poemFour = "The veil of beauty is observable and understandable"
const poemFive = "Are you ever going to ship my order"
const poemSix = "A couple months back I watched Sybil for a couple days I was excited that I taught her to meow back when I called her name or spoke to her while making eye contact Now, I'm embarassed. I'm still speaking to her in English when we have something better that exists outside language"
const poemSeven = "Girl and that fly in her room"
const poemEight = "Facebook blue"
const poemNine = "Felinization of self"
const poemTen = "White musk"
const poemElen = "Inside every woman is a Norweigan"
const poemTwel = "What if my one true love is LA"
const poemThir = "Thank you Zeke for help with the coding"
const poemFourt = "Offer expired"
const poemFift = "Abrahamic faith in that girl from the video"
const poemSixt = "We the People"
const poemSevt = "Another trepanation nightmare where my grandma does it to live longer"
const poemEigh = "California. Find me."
var context = new AudioContext();



const graduallyWritePoem = (button, poem) => {
    let offset = 0
    //words.innerHTML = ""
    const p = document.createElement("p")
    for (let word of poem.split(' ')) {
       
        window.document.body.appendChild(p)
        mousedownID.push(setTimeout((w) => p.innerHTML += w, offset, word+' '))
        offset += 250
        p.id = "truism"
        p.style.position = "absolute"
        p.style.left = Math.round(Math.random() * (fullWidth)) + "px";
        p.style.top = Math.round(Math.random() * (fullHeight)) + "px";
        p.style.margin = Math.round(Math.random() + "px");
        p.style.backgroundColor = docBackground;
        p.style.color = poemColor;
        p.style.fontFamily = poemFont;
        p.style.zIndex = "1";
    }
}

const cancelWriting = (button) => {
    for (let id of mousedownID)
        clearTimeout(id)
    mousedownID = []

}
for (var i = 0; i < button.length; i++) {
    const meow = i
    
    button[i].onmousedown = function() {
        button.forEach(function (btn) {
            btn.style.webkitFilter = "brightness(1)";            
        });
        this.style.webkitFilter = "brightness(50%)";
        if (meow==0)
            graduallyWritePoem(button[meow], poemOne)
        if (meow==3)
            graduallyWritePoem(button[meow], poemTwo)
        if (meow==7)
            graduallyWritePoem(button[meow], poemThree)
        if (meow==9)
            graduallyWritePoem(button[meow], poemFour)
        if (meow==1)
            graduallyWritePoem(button[meow], poemFive)
        if (meow==2)
            graduallyWritePoem(button[meow], poemSix)
        if (meow==4)
            graduallyWritePoem(button[meow], poemSeven)
        if (meow==5)
            graduallyWritePoem(button[meow], poemEight)
        if (meow==6)
            graduallyWritePoem(button[meow], poemNine)
        if (meow==8)
            graduallyWritePoem(button[meow], poemTen)
        if (meow==10)
            graduallyWritePoem(button[meow], poemElen)
        if (meow==11)
            graduallyWritePoem(button[meow], poemTwel)
        if (meow==12)
            graduallyWritePoem(button[meow], poemThir)
        if (meow==13)
            graduallyWritePoem(button[meow], poemFourt)
        if (meow==14)
            graduallyWritePoem(button[meow], poemFift)
        if (meow==15)
            graduallyWritePoem(button[meow], poemSixt)
        if (meow==16)
            graduallyWritePoem(button[meow], poemSevt)
        if (meow==17)
            graduallyWritePoem(button[meow], poemEigh)
        if (meow==18){
            var p = document.getElementsByTagName("p")
            docBackground = "#8b0000"
            poemColor = "#ffffe0"
            if(document.body.style.backgroundColor == "white"){
            document.body.style.backgroundColor = "#8b0000"
            for (i =0; i<p.length; i++){
            p[i].style.backgroundColor = "#8b0000"
            p[i].style.color = "#ffffe0"
            
            }
            for (i = 0; i < whiteNotes.length; i++){
                whiteNotes[i].style.backgroundColor = '#ffffe0';
              
            }
            for (i = 0; i<blackNotes.length; i++){
                if (blackNotes[i].style.backgroundColor !== 'transparent'){
                    blackNotes[i].style.backgroundColor = 'pink';
                }
            }
        }
            else{
                document.body.style.backgroundColor = "white"
                docBackground = "white"
                poemColor = '#aaa'
                for (i =0; i<p.length; i++){
                    p[i].style.backgroundColor = "white"
                    p[i].style.color = poemColor
                    }
            
            for (i = 0; i < whiteNotes.length; i++){
                whiteNotes[i].style.backgroundColor = '#aaa';
            }
            for (i = 0; i<blackNotes.length; i++){
                if (blackNotes[i].style.backgroundColor !== 'transparent'){
                    blackNotes[i].style.backgroundColor = 'black';
                }
            }
            }
        }
        if (meow==19){
            var p = document.getElementsByTagName("p")
            poemFont = "KRKindaFlakey"
            
            if (document.body.style.fontFamily === '"Times New Roman"'){
            for (i =0; i<p.length; i++){
                p[i].style.fontFamily = poemFont
                document.body.style.fontFamily = poemFont
                console.log(document.body.style.fontFamily)
                }} 
               
            else {
                poemFont = "Times New Roman"
                for (i =0; i<p.length; i++){
                    p[i].style.fontFamily = poemFont
                    document.body.style.fontFamily = "Times New Roman"
                    }}
            }
        
        if (meow==21){
            var p = document.getElementsByTagName("p")
            var dataText = [];
            document.querySelector("#text").style.fill = "none";
            var piano = document.getElementById("piano")
            piano.style.backgroundColor = "transparent";

            for (i = 0; i<p.length; i++){
                p[i].style.color = "transparent"
                p[i].style.backgroundColor = "transparent"
                let spiralText = p[i].innerHTML.split(" , ")
                dataText.push(...spiralText)
            }
            console.log(dataText)
            if (document.querySelector("#text").style.fill === 'none'){
                for (i = 0; i< whiteNotes.length; i++){
                    whiteNotes[i].style.display = "none"
                }
                for (i = 0; i< blackNotes.length; i++){
                    blackNotes[i].style.display = "none"
                }
            console.log(dataText)
    
                  function type(text, i, fnCallback) {
                    if (i < (text.length)) {
                        console.log(poemColor)
                      document.querySelector("#text").style.fill = poemColor;
                      document.querySelector("#text").style.backgroundColor = docBackground;
                      document.querySelector("#text").textContent = text.substring(0,i+1);
                      setTimeout(function() {
                        type(text, i + 1, fnCallback)
                      }, 70);
                    }
                    else if (typeof fnCallback == 'function') {
                      setTimeout(fnCallback, 1500);
                    }
                  }

                  
                   function StartAnimation(i) {
                     if (typeof dataText[i] == 'undefined'){
                         clearTimeout()
                         document.querySelector("#text").style.fill = "none";
                        for (i = 0; i<p.length; i++){
                        p[i].style.color = poemColor
                        p[i].style.backgroundColor = docBackground}
                        console.log("sup")
                        for (i = 0; i< whiteNotes.length; i++){
                            whiteNotes[i].style.display = 'block'
                        }
                        for (i = 0; i< blackNotes.length; i++){
                            blackNotes[i].style.display = 'block'
                        }
                        }
                    if (i < dataText.length) {
                      type(dataText[i], 0, function(){
                              StartAnimation(i + 1);
                     });
                    }
                    
              
                } console.log("first") 
                StartAnimation(0)
            
                }
                  
        }
        if (meow==22){
            let x 
            let y 
            var p = document.getElementsByTagName("p")
            if (onmousemove === null) {
                onmousemove = (event) => {
                    let x = event.clientX;
                    let y = event.clientY;
                    for (i = 0; i< p.length; i++){
                        p[i].style.left = x + "px"
                        p[i].style.top = y  + "px"
                    }
                }
            } else {
                for (i = 0; i< p.length; i++){
                    p[i].style.left = Math.round(Math.random() * (fullWidth)) + "px";
                    p[i].style.top = Math.round(Math.random() * (fullHeight)) + "px";
                }
                onmousemove = null
            } 
    }
        if (meow == 23){
            var p = document.getElementsByTagName("p")
            
            if (noise !== null) {
            const synth = new Tone.Synth().toDestination();
            const seq = new Tone.Sequence((time, note) => {
	        synth.triggerAttackRelease(note, 0.4, time);
            }, ["C4", ["E4", "D4"], "G4", "A4", "G4"]).start(0);
            Tone.Transport.start();
           
            noise = null
            var letters = '0123456789ABCDEF';
            var newColor = '#';

            function changingColor(){
            for (var l = 0; l < 6; l++) {
            newColor += letters[Math.floor(Math.random() * 16)];
            }
            for (i = 0; i<p.length; i++){
                    p[i].style.color = poemColor;
                    p[i].style.backgroundColor = newColor;
                    }
                    newColor = '#';
            }
            letsgo = setInterval(changingColor, 600)

        }

        else{
                Tone.Transport.stop("+0.3")
                noise = 15
                clearInterval(letsgo)
                for (i = 0; i<p.length; i++){
                    p[i].style.color = poemColor
                    p[i].style.backgroundColor = docBackground}
                    }
        }
    
        if (meow == 25){
            if (windowNO !== null){   
                console.log("hi")         
               const myWindow = () => window.open("catonpiano.html", "",  "width=530, height=270 ,titlebar=no, top=400, left=430"); 
                myWindow()
                windowNO = null;
        }
            else{
                windowNO = 15;
                myWindow.close()
            }
        }
        if (meow == 26){
            var p = document.getElementsByTagName("p")
            docBackground = "#7d6d41"
            poemColor = "#ded978"
            if(document.body.style.backgroundColor == "white"){
            document.body.style.backgroundColor = "#7d6d41"
            for (i =0; i<p.length; i++){
            p[i].style.backgroundColor = "#7d6d41"
            p[i].style.color = "#ded978"
            
            }
            for (i = 0; i < whiteNotes.length; i++){
                whiteNotes[i].style.backgroundColor = '#ded978';
              
            }
            for (i = 0; i<blackNotes.length; i++){
                if (blackNotes[i].style.backgroundColor !== 'transparent'){
                    blackNotes[i].style.backgroundColor = '#42412a';
                }
            }
        }
            else{
                document.body.style.backgroundColor = "white"
                docBackground = "white"
                poemColor = '#aaa'
                for (i =0; i<p.length; i++){
                    p[i].style.backgroundColor = "white"
                    p[i].style.color = poemColor
                    }
            
            for (i = 0; i < whiteNotes.length; i++){
                whiteNotes[i].style.backgroundColor = '#aaa';
            }
            for (i = 0; i<blackNotes.length; i++){
                if (blackNotes[i].style.backgroundColor !== 'transparent'){
                    blackNotes[i].style.backgroundColor = 'black';
                }
            }
            }
        
        }
        if (meow == 28){
            var p = document.getElementsByTagName("p")
            poemFont = "Shoes"
            
            if (document.body.style.fontFamily === '"Times New Roman"'){
            for (i =0; i<p.length; i++){
                p[i].style.fontFamily = poemFont
                document.body.style.fontFamily = poemFont
                console.log(document.body.style.fontFamily)
                }} 
               
            else {
                poemFont = "Times New Roman"
                for (i =0; i<p.length; i++){
                    p[i].style.fontFamily = poemFont
                    document.body.style.fontFamily = "Times New Roman"
                    }}
        }
        if (meow == 29){
            var p = document.getElementsByTagName("p")
            var piano = document.getElementById("piano")
            var container = document.getElementById("Layer_1-2")
            var dataText = [];
            if (anime !== null){
                anime = null;
                startTimer = setInterval(() => {
                    timer++;

                    if (timer > 3){
                        clearInterval(startTimer)
                        restartPage()
                        }
                        }, 1000)
                    }
                    document.addEventListener("mousemove", myFunction)

                function myFunction(event){
                let x = event.clientX;
                let y = event.clientY;
                let leftPupil = document.getElementById("leftPupil");
                leftPupil.style.fill = "black";
                let rightPupil = document.getElementById("rightPupil");
                rightPupil.style.fill = "black";
                let leftEye = document.querySelector("#leftEye");
                let rightEye = document.querySelector("#eyesPath2");
                let leftpupilCenter = {x: +leftEye.getAttribute('cx'), y:+leftEye.getAttribute('cy') };
                eyeArea_left = leftEye.getBoundingClientRect();
                pupilArea_left = leftPupil.getBoundingClientRect();
                leftPupil.style.transformOrigin = `${200 +"px"} center`;
                piano.style.backgroundColor = "transparent"
             
                document.getElementById("rightLashFill").style.fill = docBackground;
                document.getElementById("leftLashFill").style.fill = docBackground;
                            for (i = 0; i< whiteNotes.length; i++){
                whiteNotes[i].style.display = "none"
                whiteNotes[i].style.backgroundColor = "transparent"
            }
            for (i = 0; i< blackNotes.length; i++){
                blackNotes[i].style.display = "none"
                blackNotes[i].style.backgroundColor = "transparent"
            }
            for (i = 0; i<p.length; i++){
                p[i].style.color = "transparent"
                p[i].style.backgroundColor = "transparent"
                let spiralText = p[i].innerHTML.split(" , ")
                dataText.push(...spiralText)
                document.querySelector("#eyes1").textContent += dataText[i];
                document.querySelector("#eyes1").style.fill = poemColor;
                document.querySelector("#eyes2").textContent += dataText[i];
                document.querySelector("#eyes2").style.fill = poemColor;
                document.querySelector("#lash1").textContent += dataText[i];
                document.querySelector("#lash1").style.fill = poemColor;
                document.querySelector("#lash2").textContent += dataText[i];
                document.querySelector("#lash2").style.fill = poemColor;
                document.querySelector("#eye1").textContent += dataText[i];
                document.querySelector("#eye1").style.fill = poemColor;
                document.querySelector("#eye2").textContent += dataText[i];
                document.querySelector("#eye2").style.fill = poemColor;
                console.log("working3")

            }
        }
    
    
    function restartPage(){    
    for (i = 0; i<p.length; i++){
        p[i].style.color = poemColor
        p[i].style.backgroundColor = docBackground
        timer = 0;
        anime = 15;
        bigeyes = null;
        document.removeEventListener("mousemove", myFunction)

    }

    document.querySelector("#eyes1").style.fill = "none";
    document.querySelector("#eyes2").style.fill = "none";
    document.querySelector("#lash1").style.fill = "none";
    document.querySelector("#lash2").style.fill = "none";
    document.querySelector("#eye1").style.fill = "none";
    document.querySelector("#eye2").style.fill = "none";
    document.querySelector("#leftPupil").style.fill = "none";
    document.querySelector("#rightPupil").style.fill = "none";
    document.getElementById("rightLashFill").style.fill = "none";
    document.getElementById("leftLashFill").style.fill = "none";
    for (i = 0; i< whiteNotes.length; i++){
        whiteNotes[i].style.display = "block"
        whiteNotes[i].style.backgroundColor = poemColor
    }
    for (i = 0; i< blackNotes.length; i++){
        blackNotes[i].style.display = "block"
        blackNotes[i].style.backgroundColor = "black"
    }
    piano.style.backgroundColor = "white";
    blackNotes[0].style.backgroundColor="transparent";
    blackNotes[3].style.backgroundColor="transparent";
    blackNotes[7].style.backgroundColor="transparent";
    blackNotes[10].style.backgroundColor="transparent";
    blackNotes[14].style.backgroundColor="transparent";
    blackNotes[17].style.backgroundColor="transparent";
}

        }
    if (meow==30){
        var p = document.getElementsByTagName("p")
        var index = 0;
        let previousPoem
        const mapping = {}
        const updateMapping = () => {
            for (let i = 0; i < p.length; i += 1) {
                const x = p[i]
                x.id = `meow-${i}`
                if (mapping[x.id] == undefined) {
                    mapping[x.id] = x.textContent
                }
            }
        }
        document.addEventListener("click", updateMapping)
        updateMapping()
        const starWords = () => {
            const x = p[index % p.length]
            const y = p[(index+1) % p.length]
            console.log(x.id, mapping[x.id])
            x.textContent = mapping[x.id]
            y.textContent = "⭐️"
            index++
        }
        starWords()
        meow30 = setInterval(starWords, 1000);
       
       
    }
    if (meow == 32){
        var p = document.getElementsByTagName("p")
            poemFont = "Notes"
            
            if (document.body.style.fontFamily === '"Times New Roman"'){
            for (i =0; i<p.length; i++){
                p[i].style.fontFamily = poemFont
                document.body.style.fontFamily = poemFont
                console.log(document.body.style.fontFamily)
                }} 
               
            else {
                poemFont = "Times New Roman"
                for (i =0; i<p.length; i++){
                    p[i].style.fontFamily = poemFont
                    document.body.style.fontFamily = "Times New Roman"
                    }}
    }
    if (meow == 33){
        var p = document.getElementsByTagName("p")
            docBackground = "#f5f5f5"
            poemColor = "#94d6d4"
            if(document.body.style.backgroundColor == "white"){
            document.body.style.backgroundColor = "#f5f5f5"
            for (i =0; i<p.length; i++){
            p[i].style.backgroundColor = "white"
            p[i].style.color = "#94d6d4"
            
            }
            for (i = 0; i < whiteNotes.length; i++){
                whiteNotes[i].style.backgroundImage = "radial-gradient(white 55%, gray)";
              
            }
            for (i = 0; i<blackNotes.length; i++){
                if (blackNotes[i].style.backgroundColor !== 'transparent'){
                    blackNotes[i].style.backgroundImage = "radial-gradient(gray, black)";
                }
            }
        }
            else{
                document.body.style.backgroundColor = "white"
                docBackground = "white"
                poemColor = '#aaa'
                for (i =0; i<p.length; i++){
                    p[i].style.backgroundColor = "white"
                    p[i].style.color = poemColor
                    }
            
            for (i = 0; i < whiteNotes.length; i++){
                whiteNotes[i].style.backgroundImage = 'none';
            }
            for (i = 0; i<blackNotes.length; i++){
                if (blackNotes[i].style.backgroundImage == "radial-gradient(gray, black)"){
                    blackNotes[i].style.backgroundImage = 'none';
                }
            }
            }
        
    }
    }
    button[i].onmouseup = () => cancelWriting(button)
}
