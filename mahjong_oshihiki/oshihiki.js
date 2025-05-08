var macalc = function () {
  if (document.oshihiki_data.jibunagari.selectedIndex == 0) {
    alert("自分和了点が入力されてません");
    return;
  }
  if (document.oshihiki_data.jibunhoju.selectedIndex == 0) {
    alert("自分放銃点が入力されてません");
    return;
  }
  if (document.oshihiki_data.tsumorare.selectedIndex == 0) {
    alert("ツモられ失点が入力されてません");
    return;
  }
  if (document.oshihiki_data.jibunreach.selectedIndex == 0) {
    alert("自分リーチ順目が入力されてません");
    return;
  }
  if (document.oshihiki_data.aitetenpai.selectedIndex == 0) {
    alert("相手テンパイ順目が入力されてません");
    return;
  }
  if (document.oshihiki_data.jibunnokori.selectedIndex == 0) {
    alert("自分残り和了牌数が入力されてません");
    return;
  }
  if (document.oshihiki_data.jibunnokori.selectedIndex == 0) {
    alert("相手残り和了牌数が入力されてません");
    return;
  }

  var AGARITEN = parseInt(oshihiki_data.jibunagari.options[oshihiki_data.jibunagari.selectedIndex].text);
  var HOJUTEN = -parseInt(oshihiki_data.jibunhoju.options[oshihiki_data.jibunhoju.selectedIndex].text);
  var TUMORARETEN = -parseInt(oshihiki_data.tsumorare.options[oshihiki_data.tsumorare.selectedIndex].text);
  var JUNMOKU = parseInt(oshihiki_data.jibunreach.options[oshihiki_data.jibunreach.selectedIndex].text);
  var TEKIJUNMOKU = parseInt(oshihiki_data.aitetenpai.options[oshihiki_data.aitetenpai.selectedIndex].text);
  var AGARIHAI = parseInt(oshihiki_data.aitetenpai.options[oshihiki_data.aitetenpai.selectedIndex].text);
  var TEKIAGARIHAI = parseInt(oshihiki_data.aitetenpai.options[oshihiki_data.aitetenpai.selectedIndex].text);
  var HAI = 123;

  // ツモ・ロン率計算
  function roncalc(a, b) {
    return b / (HAI - 3 * a);
  }
  function aiteroncalc(a, b) {
    return b / (HAI - 1 - 3 * a);
  }
  function tsumocalc(a, b) {
    return b / (HAI - 4 - 3 * a);
  }

  // 総合点
  var SOUGOUTEN = 0;

  for (var j = 0; j < 10000; j++) {
    // 敵のリーチが早かった場合
    if (JUNMOKU > TEKIJUNMOKU) {
      var hantei = 0;
      var flag = 0;
      for (var i = TEKIJUNMOKU; i <= JUNMOKU; i++) {
        // 捨牌ロンされる確率
        var AITERONRITSU = roncalc(i, TEKIAGARIHAI);
        hantei = Math.floor(Math.random() * 100 + 1);
        if (hantei <= AITERONRITSU * 100) {
          SOUGOUTEN = SOUGOUTEN + HOJUTEN;
          flag++;
          break;
        }

        // 下家のターン。ツモられ確率
        var AITETSUMORITU = aiteroncalc(i, TEKIAGARIHAI);
        hantei = Math.floor(Math.random() * 100 + 1);
        if (hantei <= AITETSUMORITU * 100) {
          SOUGOUTEN = SOUGOUTEN + TUMORARETEN;
          flag++;
          break;
        }
      }

      // テンパイする前に上がられた場合ループ初めに戻る
      if (flag != 0) continue;
    }

    // 各順目の点数移動計算
    for (var i = JUNMOKU; i < 19; i++) {
      // 最後まで上がれなかったら流局計算
      if (i == 18) {
        SOUGOUTEN += 500;
        break;
      }

      // 乱数生成
      var hantei = 0;

      if (i >= TEKIJUNMOKU + 1) {
        // リーチ牌ロンされる成否判定
        var AITERONRITSU = roncalc(i, TEKIAGARIHAI);
        hantei = Math.floor(Math.random() * 100 + 1);
        if (hantei <= AITERONRITSU * 100) {
          SOUGOUTEN = SOUGOUTEN + HOJUTEN - 1000;
          break;
        }

        // 下家のターン。ツモられ確率
        var AITETSUMORITU = aiteroncalc(i, TEKIAGARIHAI);
        hantei = Math.floor(Math.random() * 100 + 1);
        if (hantei <= AITETSUMORITU * 100) {
          SOUGOUTEN = SOUGOUTEN + TUMORARETEN - 1000;
          break;
        }
      }

      // 下家のターン。全ツでロンできる確率
      var RONRITSU = aiteroncalc(i, AGARIHAI);
      hantei = Math.floor(Math.random() * 100 + 1);
      if (hantei <= RONRITSU * 100) {
        SOUGOUTEN += AGARITEN;
        break;
      }

      // ツモ成否判定
      var TUMORITSU = tsumocalc(i, AGARIHAI);
      hantei = Math.floor(Math.random() * 100 + 1);
      if (hantei <= TUMORITSU * 100) {
        SOUGOUTEN += AGARITEN;
        break;
      }
    }
  }

  document.getElementById("result").textContent = "期待値は" + SOUGOUTEN / 10000 + "点です。";
};
