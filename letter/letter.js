function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function onOpenButtonClick() {
    let input_date = document.getElementById("dateinput");

    if (input_date.value != "07/08") {
        alert("Incorrect na auannnn, Try again na krubbbb \nDon't give up na my auannn😘😘");
        return;
    }
    input_date.readOnly = true;
    const thebestthing = document.getElementById("thebestthing");
    const enterBox = document.getElementById("enterbox");
    const enterBth = document.getElementById("enterbth");
    const enterText = document.getElementById("entertextinenterbox");
    const imageContainer = document.getElementById("imagescontainer");
    enterBth.classList.add("enter-bth-hidden-transition");
    thebestthing.play()
    thebestthing.volume = 0
    let fadeInInterval = setInterval(() => {
    if (thebestthing.volume < 1) {
        thebestthing.volume = Math.min(thebestthing.volume + 0.1, 1);
    } else {
            clearInterval(fadeInInterval);
        }   
    }, 500);
    await wait(500)
    enterText.classList.add("fade-out");
    enterText.style.opacity = 0;

    setTimeout(() => {
        enterText.innerText = "";
        enterText.style.opacity = 1;
        const newText = "Keng mak My auannn the date of our anniversary is";
        let i = 0;
        const interval = setInterval(() => {
            if (i < newText.length) {
                enterText.innerHTML += newText[i];
                i++;
            } else {
                clearInterval(interval);
            }   
        }, 50);
    },800);
    enterBth.classList.add("visibility-none");
    addLetterStyles();
    enterBox.style.transition = "all 1s ease";
    enterBox.style.maxHeight = "3000px";
    enterBox.style.height = "auto";

    const letterContent = document.createElement("div");
    letterContent.className = "letter-content-wrapper";
    letterContent.innerHTML = `
        <div class="letter-output">
            <p class="dear-text"></p>
            <p class="letter-text">
                
            </p>
            <p class="signature">
                
            </p>

            <button class="next-bth" id="nextBth" onclick="goToNextPage()">Next ❤️</button>
        </div>

    `;
    
    const letterTextContent = letterContent.querySelector(".letter-text");
    const dearContent = letterContent.querySelector(".dear-text");
    const signa = letterContent.querySelector(".signature");
    letterContent.style.maxHeight = "0";
    letterContent.style.overflow = "hidden";
    letterContent.style.opacity = "0";
    letterContent.style.transition = "all 3s ease-in-out 0.3s";

    enterBox.appendChild(letterContent);

    setTimeout(() => {
        letterContent.style.maxHeight = "2000px";
        letterContent.style.opacity = "1";

        setTimeout(() => {
            const nextBth = document.getElementById("nextBth");
            nextBth.classList.add("show");
        }, 75000);
    }, 100);

    await wait(1000)
    const heartsContainer = document.getElementById("heartscontainer");
    setTimeout(() => {
        heartsContainer.classList.add("active");
        setTimeout(() => {
            heartsContainer.classList.remove("active");
        }, 20000);
    },43000);
    setTimeout(() => {
        dearContent.innerText = "";
        const nextText = "Dear My auannnnn😘,";
        let i = 0;
        const interval = setInterval(() => {
            if (i < nextText.length) {
                dearContent.innerHTML += nextText[i];
                i++;
            } else {
                clearInterval(interval);
            }   
        }, 100);
        setTimeout(() => {
            letterTextContent.innerText = "";
            const nextText = "Happy 5m Anniversary and your birthday na krubbb my auannn💖💖💖 สวัสดีคับอ้วนนนนน อ้วนเก่งมากที่เปิดจดหมายนี้ได้นะคับบบ เค้าขอบอกก่อนเลยนะคับว่าเค้าดีใจจริงๆคับที่ได้เจอที่รักตั้งแต่วันแรกจนถึงวันนี้ เค้าไม่เคยรักที่รักน้อยลงเลยคับ มีแต่รักมากขึ้น มากขึ้นเรื่อยๆเลยคับ แล้วจะเป็นยังงี้ไปตลอดเลยคับ เค้าจะอยู่เคียงข้างที่รักแบบนี้ไปอีกนานๆเลยนะคับ ที่รักอย่าพึ่งเบื่อเค้านะ 5555555 และวันเกิดปีนี้เค้าขอให้ที่รักมีความสุขยิ้มเยอะๆแบบนี้ไปอีกนานๆเลยนะคับ มีความสุขในทุกๆวัน แล้วฝันของที่รัก ที่ที่รักฝันไว้ ขอให้มันเป็นจริง ที่รักทำได้อยู่แล้วคับ ติดมหาลัยคณะที่ต้องการด้วยนะคับ ที่รักสู้ๆคับ เค้าจะคอยอยู่เคียงข้างที่รักแบบนี้ไปตลอดทุกความสำเร็จของที่รักเลยนะคับ เค้ารักที่รักมากที่สุดในโลก ในจักรวาลเลยคับ รักที่สุดเลยคับ ไออ้วนของเค้า เค้าอิจฉาตัวเองจริงๆเลยคับ ที่มีแฟนสวยและน่ารักและใจดีขนาดนี้ แหมมม มาคับอ้วน เราเข้าไปดูกันเลยดีกว่า ว่าต่อไปจะมีอะไรอีก จะมีรูปหลุดอ้วนกี่รูปน้าาาาา อิอิ 😘😘";
            let i = 0;
            const interval = setInterval(() => {
                if (i < nextText.length) {
                    letterTextContent.innerHTML += nextText[i];
                    i++;
                } else {
                    clearInterval(interval);
                }   
            }, 75);
            setTimeout(() => {
                signa.innerText = "";
                const nextText = "With all my love,\nForever your, Theetawat.";
                signa.style.display = "block";
                let i = 0;
                const interval = setInterval(() => {
                    if (i < nextText.length) {
                        signa.innerText += nextText[i];
                        i++;
                    } else {
                        clearInterval(interval);
                    }   
                }, 75);
            },66975);
        },2000);
    },800);
}

async function goToNextPage() {
    const enterBox = document.getElementById("enterbox")
    const nextBth = document.getElementById("nextBth");
    const imageContainer = document.getElementById("imagescontainer");
    nextBth.classList.add("next-bth-hidden-transition");
    await wait(800);
    enterBox.style.transition = "all 2s ease-in-out";
    enterBox.style.opacity = "0";
    enterBox.style.transform = "scale(0)";
    let fadeOutInterval = setInterval(() => {
        if (thebestthing.volume > 0) {
            thebestthing.volume = Math.max(thebestthing.volume - 0.1, 0);
        } else {
            clearInterval(fadeOutInterval);
            thebestthing.pause();
            setTimeout(() => {
                enterBox.style.display = "none";
                window.location.href = "/moments/moments.html";
            }, 2000);
        }
    }, 500);
}



function addLetterStyles() {
    const oldStyle = document.getElementById("letter-dynamic-styles");
    if (oldStyle) {
        oldStyle.remove();
    }
    
    const style = document.createElement("style");
    style.id = "letter-dynamic-styles";
    style.textContent = `
        .letter-content-wrapper {
            width: 100%;
            margin-top: 30px;
        }
        
        .letter-output {
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            text-align: left;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1),
                        inset 0 0 20px rgba(255, 255, 255, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .dear-text {
            font-family: "Dancing Script", cursive;
            font-size: 40px;
            color: #d81b60;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .letter-text {
            font-family: "Kanit", sans-serif;
            font-size: 20px;
            line-height: 2;
            color: #424242;
            margin-bottom: 20px;
            text-align: justify;
            text-indent: 2em;
        }
        
        .signature {
            display: none;
            font-family: "Dancing Script", cursive;
            font-size: 30px;
            color: #d81b60;
            text-align: right;
            margin-top: 30px;
            font-weight: 600;
            white-space: pre-wrap;
        }

        .next-bth {
            font-family: 'Kanit', sans-serif;
            font-weight: 600;
            padding: 12px 40px;
            background: linear-gradient(135deg, #ff4081 0%, #ff80ab 100%);
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 64, 129, 0.4);
            transition: all 0.3s ease;
            margin-top: 10px;
            opacity: 0;
            pointer-events: none;
        }

        .next-bth.show {
            pointer-events: auto;
            opacity: 1;
            transition: all 1s ease;
        }
        
        .next-bth:hover {
            transform: scale(1.1);
            transition: all 0.3s ease;
        }
        
        .next-bth:active {
            transform: scale(0.9);
            transition: all 0.3s ease;
        }
    `;
    
    document.head.appendChild(style);
}