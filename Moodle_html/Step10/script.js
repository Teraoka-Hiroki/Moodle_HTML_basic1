// HTML要素の取得（ステップ9と同じ）
const timeDisplay = document.getElementById('time_display');
const minutesInput = document.getElementById('minutes_input');
const secondsInput = document.getElementById('seconds_input');
const startButton = document.getElementById('start_button');
const resetButton = document.getElementById('reset_button');

let timerId;
let remainingTime = 0;
// 音声ファイルを読み込んで、再生の準備をしておく
const alarmSound = new Audio('alarm.mp3');

// スタートボタンの処理
startButton.addEventListener('click', () => {
    // 既にあるタイマーを停止（二重起動を防ぐ）
    clearInterval(timerId);

    // 入力された「分」と「秒」を取得し、数値に変換する
    const minutes = parseInt(minutesInput.value, 10) || 0; // 未入力の場合は0として扱う
    const seconds = parseInt(secondsInput.value, 10) || 0;

    // 合計秒数を計算して、残り時間にセット
    remainingTime = minutes * 60 + seconds;

    if (remainingTime > 0) {
        updateDisplay(); // 最初に表示を更新
        timerId = setInterval(countDown, 1000);
    }
});

// リセットボタンの処理
resetButton.addEventListener('click', () => {
    clearInterval(timerId); // タイマーを停止
    remainingTime = 0;
    updateDisplay(); // 表示をリセット
    minutesInput.value = ""; // 入力欄を空にする
    secondsInput.value = "";
});

// カウントダウン関数
function countDown() {
    if (remainingTime > 0) {
        remainingTime--;
        updateDisplay();
    } else {
        clearInterval(timerId);
        alarmSound.play(); // 音を鳴らす！
        alert('時間です！');
    }
}

// 画面表示を更新する関数
function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60); // 秒から分を計算
    const seconds = remainingTime % 60; // 60で割った余りが秒になる

    // 常に2桁で表示するように、頭に0を付ける処理
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    timeDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
