// HTML要素の取得
const timeDisplay = document.getElementById('time_display');
const startButton = document.getElementById('start_button');
// （他の要素も同様に取得しておく）

let timerId; // タイマーのIDを保存するための変数。タイマーを止めるときに使う
let remainingTime = 0; // 残り時間を秒単位で保存する変数

// スタートボタンが押された時の処理
startButton.addEventListener('click', () => {
    // 仮に残り時間を10秒に設定してスタート
    remainingTime = 10;
    
    // 1000ミリ秒（=1秒）ごとに関数 countDown を繰り返し実行する
    // setInterval の戻り値（タイマーのID）を timerId に保存しておく
    timerId = setInterval(countDown, 1000);
});

// カウントダウンを行う関数
function countDown() {
    // 残り時間が0より大きい場合
    if (remainingTime > 0) {
        // 残り時間を1減らす
        remainingTime--;
    } else {
        // 残り時間が0になったら、タイマーを停止する
        clearInterval(timerId); // setIntervalを停止する命令
        alert('時間です！'); // とりあえずアラートを出す
    }

    // 残り時間を画面に表示する
    // 秒を「分:秒」の形式に変換して表示する（少し難しいので、今回は秒だけ表示）
    timeDisplay.textContent = remainingTime;
    console.log(remainingTime); // コンソールでも確認
}
