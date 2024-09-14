
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


let currentIndex = 0;
  const introBoxes = document.querySelectorAll('.intro_wrap-list_box');
  const fadeDuration = 3000; // 페이드 전환 시간 (밀리초)

  function fadeInOut() {
    // 모든 li 요소의 'active' 클래스를 제거하여 숨김
    introBoxes.forEach(box => box.classList.remove('active'));

    // 다음 보여줄 li 요소에 'active' 클래스 추가
    introBoxes[currentIndex].classList.add('active');

    // 다음에 보여줄 요소의 인덱스를 계산
    currentIndex = (currentIndex + 1) % introBoxes.length;
  }

  // 초기화 시 첫 번째 이미지를 보이도록 설정
  introBoxes[currentIndex].classList.add('active');

  // 주기적으로 fadeInOut 함수 실행
  setInterval(fadeInOut, fadeDuration);