// ボタン要素を取得する
const drawButton = document.getElementById('draw_button');
// 結果を表示する要素を取得する
const resultDiv = document.getElementById('result');

// おみくじの結果を配列（リスト）に格納しておく
const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];

// ボタンがクリックされた時の処理を登録する
drawButton.addEventListener('click', () => {
  // 0から1未満のランダムな小数を生成する
  const randomValue = Math.random();

  // 配列の要素数（今回は7）を掛けて、0から6.99...の範囲の数値にする
  // Math.floor()で小数点以下を切り捨て、0から6までのランダムな整数を得る
  const randomIndex = Math.floor(randomValue * fortunes.length);

  // ランダムなインデックスを使って、配列から結果を一つ取り出す
  const selectedFortune = fortunes[randomIndex];

  // 取り出した結果を、HTMLの表示エリアに書き込む
  resultDiv.textContent = selectedFortune;
});
