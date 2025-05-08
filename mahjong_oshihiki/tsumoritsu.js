var mcalc = function () {
  // 入力チェック
  if (document.tsumo_data.nokori.selectedIndex == 0) {
    alert("残り枚数を選択してください");
    return;
  }

  var HAI = 123; // 牌の総数
  var tumoritu = function (a, b) {
    // ツモ率計算
    return b / (HAI - 3 * a);
  };
  var NOKORI = document.tsumo_data.nokori.selectedIndex; //残り枚数取得

  var kekka = ""; //初期化しておかないと大変

  for (var i = 1; i < 19; i++) {
    var tumo_ritu = 0.0;

    // 一発ツモ率決定。
    tumo_ritu = tumoritu(i, NOKORI);

    // 一発ツモ率整形。toFixedが小数桁整形、toPrecisionが総桁整形
    var temp = tumo_ritu * 10000;
    temp = Math.floor(temp);
    temp = (temp / 100).toFixed(2);

    // 結果変数に各順目の一発ツモ率保存
    kekka = kekka + i + "巡目リーチ＠一発ツモ率：" + temp + "%";

    // ツモアガリ率を算出
    for (var j = i; j < 18; j++) {
      // その後の順目のツモ率全てプラス
      tumo_ritu += (1 - tumo_ritu) * tumoritu(j, NOKORI);
    }

    // ツモアガリ率整形。
    tumo_ritu = tumo_ritu * 10000;
    tumo_ritu = Math.floor(tumo_ritu);
    tumo_ritu = (tumo_ritu / 100).toFixed(2);

    // 結果変数に各順目のツモアガリ率保存
    kekka = kekka + " ツモ和了率:" + tumo_ritu + "%<br />";
  }

  // テキストエリアに出力
  document.getElementById("result").innerHTML = kekka;
};
