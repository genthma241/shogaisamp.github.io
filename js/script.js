$(function(){
  // バナー用配列
  const bannerArray = ["01", "02", "03", "04", "05"];
  const modaalArray = ["01", "02","03","04"];

  const banner1 = document.getElementById('banner1');
  const banner2 = document.getElementById('banner2');
  const banner3 = document.getElementById('banner3');
  const modaal1  = document.getElementById('modaal1')

  // 0〜1未満の数を生成：値域0〜0.9999...
  var num1 = Math.random();
  var num2 = Math.random();
  var num3 = Math.random();
  var num4 = Math.random();


  // numに5を掛ける：値域0〜4.9999...
  num1 = num1 * 5;
  num2 = num2 * 5;
  num3 = num3 * 5;
  num4 = num4 * 4;


  // 小数点を切り捨てる：0、1、2、3、4のうちのいずれか
  num1 = Math.floor(num1);
  num2 = Math.floor(num2);
  num3 = Math.floor(num3);
  num4 = Math.floor(num4);

  // バナーを表示
  banner1.src = "img/event1/" + bannerArray[num1] + ".JPG";
  banner2.src = "img/event1/" + bannerArray[num2] + ".JPG";
  banner3.src = "img/event1/" + bannerArray[num3] + ".JPG";
  modaal1.src = "img/event2/" + modaalArray[num4] + ".JPG";

  console.log(num1);
  console.log(num2);
  console.log(num3);
  
  
});
