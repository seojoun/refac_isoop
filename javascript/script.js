
// const scrollBtn = document.querySelector("#scroll_btn");

const scrollBtn = document.getElementById("scroll_btn");



scrollBtn.addEventListener("click",()=>{

    const shakeElement = document.getElementById("shake_box");
    
    shakeElement.classList.add("shake");

    // 2초 뒤에 실행되는 코드
    setTimeout(()=>{
        shakeElement.classList.remove("shake");
    },2000)

});