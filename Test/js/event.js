window.addEventListener('load', init, false);
//HTML 의 모든 Element가 메모리에 로딩한 후 
function init() {
  document.querySelector('button').addEventListener('click', () => {
    const addInput = document.getElementById('add');
    const minusInput = document.getElementById('minus');
    const multiInput = document.getElementById('multi');
    const divideInput = document.getElementById('divide');
    const totInput = document.getElementById('tot');
    let score = 0;
    let incorrectCount = 0;

    // Clear previous styling
    addInput.classList.remove('wrong');
    minusInput.classList.remove('wrong');
    multiInput.classList.remove('wrong');
    divideInput.classList.remove('wrong');
    totInput.classList.remove('wrong');

    // Check answers
    if (addInput.value == 5 + 6) {
      score += 20;
    } else {
      addInput.classList.add('wrong');
      incorrectCount++;
    }
    if (minusInput.value == 8 - 3) {
      score += 20;
    } else {
      minusInput.classList.add('wrong');
      incorrectCount++;
    }
    if (multiInput.value == 7 * 6) {
      score += 20;
    } else {
      multiInput.classList.add('wrong');
      incorrectCount++;
    }
    if (divideInput.value == 15 / 3) {
      score += 20;
    } else {
      divideInput.classList.add('wrong');
      incorrectCount++;
    }
    if (totInput.value == (8 + 6 - 3 * 2 / 2)) {
      score += 20;
    } else {
      totInput.classList.add('wrong');
      incorrectCount++;
    }

    // Display result
    const result = document.getElementById('result');
    const today = new Date().toLocaleDateString();
    const name = document.getElementById('name').value;
    result.innerHTML = `${name}님의 ${today} 계산 퀴즈 결과 <br>총 5문제 중 ${incorrectCount}문제를 틀렸습니다.<br><br>틀린 답은 빨간색으로 표시하겠습니다.<br><br>최종 점수는 <span class="highlight">${score}점</span>입니다.`;

    document.getElementById('resultBox').classList.remove('hidden');
    // document.getElementById('quizFieldset').classList.add('hidden');
  });
}