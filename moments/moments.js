function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const mediaList = [
    { type: "image", src: "/Images/Our_Moment/im_1.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_2.jpg" },
    { type: "video", src: "/Images/Our_Moment/v_7.mp4" },  
    { type: "image", src: "/Images/Our_Moment/im_3.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_12.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_4.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_5.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_6.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_4.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_8.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_7.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_46.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_10.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_11.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_12.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_1.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_13.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_15.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_16.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_6.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_17.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_18.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_19.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_20.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_22.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_24.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_25.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_2.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_26.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_27.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_28.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_30.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_29.jpg" },  
    { type: "image", src: "/Images/Our_Moment/im_31.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_32.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_33.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_34.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_35.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_36.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_10.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_37.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_38.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_39.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_40.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_41.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_42.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_44.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_8.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_48.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_5.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_51.jpg" }, 
    { type: "image", src: "/Images/Our_Moment/im_52.jpg" },
    { type: "image", src: "/Images/Our_Moment/im_54.jpg" }, 
    { type: "video", src: "/Images/Our_Moment/v_9.mp4" },
    { type: "video", src: "/Images/Our_Moment/v_3.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_58.jpg" },  
    { type: "video", src: "/Images/Our_Moment/v_11.mp4" }, 
    { type: "image", src: "/Images/Our_Moment/im_60.jpg" },
    { type: "audio", src: "/audios/city_ThreeManDown.mp3"},
    { type: "audio", src: "/audios/city_ThreeManDown_Cut.mp3"}
];

async function runMoment() {
    await wait(2000)
    const pretext1 = document.getElementById("preintrotext-text1");
    const pretext2 = document.getElementById("preintrotext-text2");
    const pretext3 = document.getElementById("preintrotext-text3");
    const pretext4 = document.getElementById("preintrotext-text4");
    const pretext5 = document.getElementById("preintrotext-text5");
    pretext1.classList.add("active");
    await wait(5000)
    pretext1.classList.remove("active");
    await wait(500)
    pretext2.classList.add("active");
    await wait(5000)
    pretext2.classList.remove("active");
    await wait(500)
    pretext3.classList.add("active");
    await wait(5000)
    pretext3.classList.remove("active");
    await wait(500)
    pretext4.classList.add("active");
    await wait(5000)
    pretext4.classList.remove("active");
    await wait(500)
    pretext5.classList.add("active");
    await wait(5000)
    pretext5.classList.remove("active");
    await wait(2000)
    const momentContainer = document.getElementById("momentcontainer");
    const lyricstext = document.getElementById("lyricstext");
    const container = document.getElementById("momentimagecontainer");
    const momentContainerText = document.getElementById("momentcontainertext");
    momentContainer.style.display = "block"
    setTimeout(() => {
        momentContainerText.style.opacity = 1;
        const newText = "emories with Auan";
        let i = 0;
        const interval = setInterval(() => {
            if (i < newText.length) {
                momentContainerText.innerHTML += newText[i];
                i++;
            } else {
                clearInterval(interval);
            }   
        }, 100);
    },800);
    
    const audioPlayer = document.getElementById("audioPlayer");
    const source = document.getElementById("audioSource");
    const song1 = "/audios/city_ThreeManDown.MP3";
    const song2 = "/audios/city_ThreeManDown_Cut.MP3";


    source.src = song1;
    audioPlayer.load()
    audioPlayer.play()
    audioPlayer.volume = 1

    
    let currentIndex = 0;
    function showMedia() {
        const media = mediaList[currentIndex];
        
        if (currentIndex >= mediaList.length) {
            return; 
        }

        container.innerHTML = "";
        

        let element;
        if (media.type === "image") {
            element = document.createElement("img");
        } else if (media.type == "video") {
            element = document.createElement("video");
            element.autoplay = true;
            element.muted = true;
            element.loop = true;
            element.playsInline = true;
        }

        element.src = media.src;
        
        element.style.opacity = "0";
        element.style.transition = "opacity 2s ease-in-out";
        
        container.appendChild(element);

        setTimeout(() => {
            element.style.opacity = "1";
        }, 50);

        currentIndex++;

        if (currentIndex < mediaList.length) {
            setTimeout(showMedia, 5000); 
        }
    }
    await wait(500)
    lyricstext.style.transition = "opacity 2s ease-in-out";
    lyricstext.style.opacity = 1;
    await wait(2500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    showMedia();
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เธออยู่ตรงนั้น<br><span style='color: rgb(238, 95, 190);'>เธออยู่ตรงนั้น</span>"
    await wait(2500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ยืนอยู่ข้างฉัน<br><span style='color: rgb(238, 95, 190);'>ยืนอยู่ข้างฉัน</span>"
    await wait(2000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ฉันไม่เคยแม้แต่ฝัน<br><span style='color: rgb(238, 95, 190);'>ฉันไม่เคยแม้แต่ฝัน</span>"
    await wait(2000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ว่าจะได้พบเธอท่ามกลาง<br><span style='color: rgb(238, 95, 190);'>ว่าจะได้พบเธอท่ามกลาง</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "คนทั้งเมืองอีกเป็นล้าน<br><span style='color: rgb(238, 95, 190);'>คนทั้งเมืองอีกเป็นล้าน</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "โดยไม่ต้องตามหาใคร<br><span style='color: rgb(238, 95, 190);'>โดยไม่ต้องตามหา~~~</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.innerHTML = "Lyrics";
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เมื่อเธอครอบครองฉัน"
    await wait(2000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(10000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ฉันเคยเป็นอีกคน"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ในเมืองแห่งความเหงาใจ"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>ที่ไม่เคยมีตัวตน</span>"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>จนเธอเข้ามาครอบครองหัวใจ</span>"
    await wait(5000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(2000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เหมือนว่าห้องของฉันกลับเปลี่ยนสีไป<br><span style='color: rgb(238, 95, 190);'>เหมือนว่าห้องของฉันกลับเปลี่ยนสีไป</span>"
    await wait(4000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "มันสวยงามเกินกว่าจะพบได้ที่ใด<br><span style='color: rgb(238, 95, 190);'>มันสวยงามเกินกว่าจะพบได้ที่ใด</span>"
    await wait(4000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "โอ้เวลา ดังหยุดเคลื่อนไหว<br><span style='color: rgb(238, 95, 190);'>โอ้เวลา ดังหยุดเคลื่อนไหว</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เมืองนี้ไม่เหงาอีกต่อไป<br><span style='color: rgb(238, 95, 190);'>เมืองนี้ไม่เหงาอีกต่อไป</span>"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "แค่วันนี้ฉันมีเธอ<br><span style='color: rgb(238, 95, 190);'>แค่วันนี้ฉันมีเธอ</span>"
    await wait(2500)
    lyricstext.style.transition = "opacity 0.75s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(750)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เธออยู่ตรงนั้น<br><span style='color: rgb(238, 95, 190);'>เธออยู่ตรงนั้น</span>"
    await wait(2500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ยืนอยู่ข้างฉัน<br><span style='color: rgb(238, 95, 190);'>ยืนอยู่ข้างฉัน</span>"
    await wait(1800)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ฉันไม่เคยแม้แต่ฝัน<br><span style='color: rgb(238, 95, 190);'>ฉันไม่เคยแม้แต่ฝัน</span>"
    await wait(1800)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ว่าจะได้พบเธอท่ามกลาง<br><span style='color: rgb(238, 95, 190);'>ว่าจะได้พบเธอท่ามกลาง</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "คนทั้งเมืองอีกเป็นล้าน<br><span style='color: rgb(238, 95, 190);'>คนทั้งเมืองอีกเป็นล้าน</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "โดยไม่ต้องตามหาใคร<br><span style='color: rgb(238, 95, 190);'>โดยไม่ต้องตามหาใคร</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1200)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เมื่อเธอครอบครองฉัน<br><span style='color: rgb(238, 95, 190);'>เมื่อเธอครอบครองฉัน</span>"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.innerHTML = "Lyrics"
    await wait(9000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>หากว่ามีสิ่งใด</span>"
    await wait(2700)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>มาทำให้เราไม่เข้าใจ</span>"
    await wait(4000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(2500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>อยากบอกเธอเอาไว้</span>"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>หากฉันผิดไปฉันขอโทษ</span>"
    await wait(5500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เหมือนว่าโลกของเราได้เปลี่ยนสีไป<br><span style='color: rgb(238, 95, 190);'>เหมือนว่าโลกของเราได้เปลี่ยนสีไป</span>"
    await wait(4000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "มันสวยงามเกินกว่าจะพบได้ที่ใด <br><span style='color: rgb(238, 95, 190);'>มันสวยงามเกินกว่าจะพบได้ที่ใด</span>"
    await wait(4000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "โอ้เวลา ดังหยุดเคลื่อนไหว<br><span style='color: rgb(238, 95, 190);'>โอ้เวลา ดังหยุดเคลื่อนไหว</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เมืองนี้ไม่เหงาอีกต่อไป<br><span style='color: rgb(238, 95, 190);'>เมืองนี้ไม่เหงาอีกต่อไป</span>"
    await wait(3200)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ต่อจากนี้ฉันมีเธอ<br><span style='color: rgb(238, 95, 190);'>ต่อจากนี้ฉันมีเธอ</span>"
    await wait(2500)
    lyricstext.style.transition = "opacity 0.75s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(750)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เธออยู่ตรงนั้น<br><span style='color: rgb(238, 95, 190);'>เธออยู่ตรงนั้น</span>"
    await wait(2500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ยืนอยู่ข้างฉัน<br><span style='color: rgb(238, 95, 190);'>ยืนอยู่ข้างฉัน</span>"
    await wait(1800)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ฉันไม่เคยแม้แต่ฝัน<br><span style='color: rgb(238, 95, 190);'>ฉันไม่เคยแม้แต่ฝัน</span>"
    await wait(1800)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ว่าจะได้พบเธอท่ามกลาง<br><span style='color: rgb(238, 95, 190);'>ว่าจะได้พบเธอท่ามกลาง</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "คนทั้งเมืองอีกเป็นล้าน<br><span style='color: rgb(238, 95, 190);'>คนทั้งเมืองอีกเป็นล้าน</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "โดยไม่ต้องตามหาใคร<br><span style='color: rgb(238, 95, 190);'>โดยไม่ต้องตามหาใคร</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1200)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เมื่อเธอครอบครองฉัน<br><span style='color: rgb(238, 95, 190);'>เมื่อเธอครอบครองฉัน</span>"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.innerHTML = "Lyrics";
    await wait(19000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "เหมือนว่าโลกของเราได้เปลี่ยนสีไป"
    await wait(4000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='color: rgb(238, 95, 190);'>มันสวยงามเกินกว่าจะพบได้ที่ใด</span>"
    await wait(5000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>โอ้เวลา ดังหยุดเคลื่อนไหว</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1200)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เมืองนี้ไม่เหงาอีกต่อไป</span>"
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ต่อจากนี้ฉันมีเธอ</span>"
    await wait(2500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เธออยู่ตรงนั้น</span>"
    await wait(1750)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ยืนอยู่ข้างฉัน</span>"
    await wait(1800)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ฉันไม่เคยแม้แต่ฝัน</span>"
    await wait(1800)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ว่าจะได้พบเธอท่ามกลาง</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>คนทั้งเมืองอีกเป็นล้าน</span>"
    await wait(1900)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>โดยไม่ต้องตามหากัน</span>"
    await wait(6000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>จะกอดเธอไว้</span>"
    await wait(2000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ไม่ให้ไปไหน</span>"
    await wait(1750)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เพราะวันนี้ไม่ใช่ฝัน</span>"
    await wait(2000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>นับตั้งแต่เธอเข้ามา~~~</span>"
    await wait(4500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ก็ไม่ต้องตามหาใคร</span>"
    await wait(3500)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(1000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เมื่อเธอครอบครองฉัน</span>"
    await wait(5000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 0;
    await wait(3000)
    lyricstext.style.transition = "opacity 1s ease-in-out";
    lyricstext.style.opacity = 1;
    lyricstext.innerHTML = "ข้างกัน Feat.เอิ๊ต ภัทรวี - Three Man Down (Acoustic version)"
    await wait(27000)
    const tvOverlay = document.getElementById("tvcloseoverlay");
    tvOverlay.classList.add("active");
    setTimeout(() => {
        tvOverlay.classList.add("closing");
    }, 50);
    await wait(2900)
    momentContainer.style.display = "none"
    await wait(100)
    tvOverlay.classList.remove("closing");
    setTimeout(() => {
        tvOverlay.classList.add("active");
    }, 2000);
    await wait(1200)
    const heartsContainer = document.getElementById("heartscontainer");
    setTimeout(() => {
        heartsContainer.classList.add("active");
        setTimeout(() => {
            heartsContainer.classList.remove("active");
        }, 20000);
    },24000);
    
    source.src = song2;
    audioPlayer.load()
    audioPlayer.play()
    audioPlayer.volume = 1

    const messages = [
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ยังไม่จบนะอ้วนนนนนอิอิ</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เค้าขอบคุณที่รักมากๆเลยนะคับบบบ ที่มาทำให้ชีวิตของเค้ามีสีสันมากขึ้น</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ขอบคุณทุกทุกอย่างที่อ้วนมอบให้เค้า ไม่ว่าจะเป็นอะไรก็ตาม เค้าขอบคุณอ้วนจริงๆคับบบบ</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>แล้วเค้าก็ขอโทษสิ่งไม่ดีๆที่เค้าอาจจะทำลงไป</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ไม่ว่าจะเป็นงอนเยอะหรืออะไรที่เค้าทำผิดหรือไม่ดีไป เค้าขอโทษจริงๆนะคับบบ</span> 🥺",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เค้ารักอ้วนมากๆเลยนะคับบบบ รักอ้วนที่สุดเลยนะคับบบ เค้าไม่มีวันทิ้งอ้วนไปแน่นอนคับบ</span> 🥰",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เค้าตั้งใจทำเว็ปนี้ให้อ้วนเลยนะคับ เค้าไม่เก่งทำของขวัญเป็นชิ้นเป็นอันง่ะ เลยทำในสิ่งที่เค้าพอจะทำให้อ้วนได้</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>ถึงเวลาจะน้อยเพราะติดเรียนติดนู้นติดนี่ติดนั้น แต่เค้าก็พยายามทำให้ได้เท่านี้แหละคับ ไม่รู้มาถึงตรงนี้อ้วนจะชอบมั้ย</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>แต่เค้าตั้งใจทำจากใจจริงนะคับบ เพราะเค้ารักอ้วนนน อยากให้ของขวัญอ้วนเล็กๆน้อยๆแค่นี้ก็ยังดีคับ</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เค้ารักอ้วนมากๆเลยนะคับบบ อ้วนอยู่กับเค้าไปนานๆนะคับบบ เค้าสัญญาว่าเค้าจะทำให้อ้วนเป็นผู้หญิงที่มีความสุขที่สุดในโลกเลยนะคับบบ</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เค้ารักอ้วนนะคับ ไอเหนียงของเค้าา ขอบคุณที่ตั้งใจดู ตั้งใจอ่านมาถึงตรงนี้นะคับบบ รักอ้วนนะคับบบ เบบี๋น้อยของเค้าาา</span> 🥰🥰🥰",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>จุ๊บบบบๆๆๆ</span> 😘😘",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>แล้วเจอกัน Project ต่อไปคับ Project Auann</span> 😋😋😋 <span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>(พูดเล่นคับบบบ </span>🥰🥰<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>)</span>",
        "<span style='background: linear-gradient(180deg, rgb(245, 134, 134), rgb(238, 95, 190)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent'>เค้ารักอ้วนนะคับบบบบ</span>"
    ];

    const displayTime = 5000; 
    const fadeTime = 1200;
    
    const textElement = document.getElementById("text-display");
    let textcurrentIndex = 0;
    function updateText() {
        if (textcurrentIndex < messages.length) {
            textElement.innerHTML = messages[textcurrentIndex];
            textElement.classList.add("visible");
            setTimeout(() => {
                textElement.classList.remove("visible");
                setTimeout(() => {
                    textcurrentIndex++;
                    updateText();
                }, fadeTime);
                
            }, displayTime);
        }
    }

    updateText();
    await wait(86000)
    setTimeout(() => {
        const hearts = document.querySelectorAll('#heart');
        hearts.forEach(heart => {
            heart.style.animationIterationCount = 15
        });
    }, 0);
    const imageContainer = document.getElementById("imagescontainer")
    imageContainer.classList.add("active");
    setTimeout(() => {
        heartsContainer.classList.add("active");
    }, 2000);
    await wait(1000)
    setTimeout(() => {
        const close_top = document.getElementById("close-top");
        const close_bottom = document.getElementById("close-bottom");
        close_top.style.background = "#000000ff";
        close_bottom.style.background = "#000000ff";
        heartsContainer.classList.remove("active");
        imageContainer.classList.remove("active");
        tvOverlay.classList.add("active");
        setTimeout(() => {
            tvOverlay.classList.add("closing");
        }, 50);
    }, 77000);
}


let loadedCount = 0;
const totalFiles = mediaList.length;

function updateProgress(currentSrc) {
    loadedCount++;
    const progress = (loadedCount / totalFiles) * 100;
    document.getElementById("progressFill").style.width = progress + "%";
    document.getElementById("percentage").textContent = Math.round(progress) + "%";
    
    const fileName = currentSrc.split("/").pop();
    
    const loadingTextElement = document.querySelector(".loading-text");
    if (loadingTextElement) {
        loadingTextElement.textContent = `Loading (${fileName})`;
    }

    if (loadedCount === totalFiles) {
        if (loadingTextElement) loadingTextElement.textContent = "Loaded";
        setTimeout(() => {
            document.getElementById("preloader").classList.add("hidden");
            if (typeof runMoment === "function") {
                runMoment();
            }
        }, 750);
    }
}

function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            updateProgress(src); 
            resolve();
        };
        img.onerror = () => {
            updateProgress(src + " (Failed)"); 
            resolve();
        };
        img.src = src;
    });
}

function loadVideo(src) {
    return new Promise((resolve) => {
        const video = document.createElement("video");
        video.oncanplaythrough = () => {
            updateProgress(src);
            resolve();
        };
        video.onerror = () => {
            updateProgress(src + " (Failed)");
            resolve();
        };
        video.src = src;
        video.load();
    });
}

async function preloadAll() {
    const promises = mediaList.map(item => {
        const src = item.src || item;
        const type = item.type || "image";
        if (type === "image") return loadImage(src);
        if (type === "video") return loadVideo(src);
        return loadImage(src);
    });
    await Promise.all(promises);
}

window.addEventListener("load", () => {
    preloadAll();
});
