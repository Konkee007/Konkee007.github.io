function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function onEnterButtonClick() {
    const untilifoundu = document.getElementById("untilifoundu")
    const heartsContainer = document.getElementById("heartscontainer");
    const hearts = document.getElementById("heart")
    const passwordBox = document.getElementById("passwordcontainer");
    const preintroContainer = document.getElementById("preintrocontainer");
    const welcomeBox = document.getElementById("welcomebox");
    const welcomeText = document.getElementById("welcometextinwelcomebox");
    const enterButton = document.getElementById("enterbth");
    const pretext1 = document.getElementById("preintrotext-text1");
    const subpretext1 = document.getElementById("sub-preintrotext-text1");
    const pretext2 = document.getElementById("preintrotext-text2");
    const subpretext2 = document.getElementById("sub-preintrotext-text2");
    const pretext3 = document.getElementById("preintrotext-text3");
    const subpretext3 = document.getElementById("sub-preintrotext-text3");
    const pretext4 = document.getElementById("preintrotext-text4");
    const subpretext4 = document.getElementById("sub-preintrotext-text4");
    const pretext5 = document.getElementById("preintrotext-text5");
    const subpretext5 = document.getElementById("sub-preintrotext-text5");
    const pretext6 = document.getElementById("preintrotext-text6");
    const subpretext6 = document.getElementById("sub-preintrotext-text6");
    welcomeBox.classList.add("welcome-box-container-hidden-transition")
    welcomeText.classList.add("welcome-text-hidden-transition")
    enterButton.classList.add("enter-bth-hidden-transition")
    await wait(750);
    welcomeBox.classList.add("visibility-none")
    welcomeText.classList.add("visibility-none")
    enterButton.classList.add("visibility-none")
    await wait(1000);
    untilifoundu.play()
    untilifoundu.volume = 0
    let fadeInInterval = setInterval(() => {
    if (typeof untilifoundu.volume === "number" && untilifoundu.volume < 0.2) { 
        untilifoundu.volume = Math.min(untilifoundu.volume + 0.01, 0.2);
    } else {
        clearInterval(fadeInInterval);

        setTimeout(() => {
            
            let fadeOutInterval = setInterval(() => {
                
                if (untilifoundu.volume > 0) {
                    console.log(untilifoundu.volume)
                    untilifoundu.volume = Math.max(untilifoundu.volume - 0.01, 0);
                } else {
                    clearInterval(fadeOutInterval); 
                    untilifoundu.pause();         
                }
                
            }, 100); 
            
        }, 26000);
    }
}, 500);
    preintroContainer.classList.add("active");
    pretext1.classList.add("active");
    subpretext1.classList.add("active");
    await wait(5000);
    pretext1.classList.remove("active");
    subpretext1.classList.remove("active");
    await wait(250);
    pretext2.classList.add("active");
    subpretext2.classList.add("active");
    await wait(4000);
    pretext2.classList.remove("active");
    subpretext2.classList.remove("active");
    await wait(750);
    heartsContainer.classList.add("active")
    await wait(250)
    pretext3.classList.add("active");
    subpretext3.classList.add("active");
    await wait(7000)
    pretext3.classList.remove("active");
    subpretext3.classList.remove("active");
    await wait(250)
    pretext4.classList.add("active");
    subpretext4.classList.add("active");
    await wait(6000)
    pretext4.classList.remove("active");
    subpretext4.classList.remove("active");
    await wait(250)
    pretext5.classList.add("active");
    subpretext5.classList.add("active");
    await wait(6000)
    pretext5.classList.remove("active");
    subpretext5.classList.remove("active");
    await wait(250)
    pretext6.classList.add("active");
    subpretext6.classList.add("active");
    await wait(6000)
    heartsContainer.classList.remove("active");
    pretext6.classList.remove("active");
    subpretext6.classList.remove("active");
    await wait(3000)
    window.location.href = "letter/letter.html";
}

