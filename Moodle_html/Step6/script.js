// 1. 操作したいHTML要素を取得して、変数に入れる

// id="main_message" の要素を取得
const messageElement = document.getElementById('main_message');
// id="change_button" の要素を取得
const changeButton = document.getElementById('change_button');

// 2. ボタンに対する「イベント」を登録する
// changeButton が 'click' されたら、{} の中の処理を実行するように予約する
changeButton.addEventListener('click', () => {
  // 3. イベントが発生した時に実行する処理
  
  // h1要素のテキスト内容を書き換える
  messageElement.textContent = 'ボタンが押されました！';

  // コンソールにもメッセージを出す
  console.log('ボタンがクリックされました。');
});
