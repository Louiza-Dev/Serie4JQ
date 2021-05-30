var essai = 0;
var prcntg = 0;
var gagn = 0;
$('img').click(function() {
  var userChose = $('button').val();
  var ChOrd = Math.floor(Math.random()*3);
  console.log(ChOrd);
  essai++;
  if (ChOrd == userChose) {
    $('#result').html('Vous etes a égalité, vous aves' + gagn + ' points.');
  } else  if ((ChOrd == 1 && userChose == 0) || (ChOrd == 0 && userChose == 2) || (ChOrd == 2 && userChose == 1)) {
    $('#result').html('Vous avez perdu, vous aves' + gagn + ' points.');
  } else {
    gagn++;
    $('#result').html('Vous avez gagné, vous aves' + gagn + ' points.');
  }
  prcntg = gagn * 100 /essai;
  $('.result').html('Vous êtes à ' + prcntg + '% de victoir.');
});





// var ch1 = $("#btnPr").click
//
//   var MnChP = $('#btnPr').attr('value');
//   var MnChF = $('#btnFl').attr('value');
//   var MnChC = $('#btnCs').attr('value');
// $('b').click(function(value) {
//   var ChOrd = Math.floor(Math.random()*3);
//   console.log(ChOrd);
//   essai++;
//   prcntg = gagn * 100 /essai;
//   if (chOrd = 0 && MnChP) {
//     gagn += 0;
//     alert('Vous etes a égalité, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else if (chOrd = 1 && MnChP) {
//     gagn += 0;
//     alert('Vous avez perdu, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else  if (chOrd = 2 && MnChP) {
//     gagn += 1;
//     alert('Vous avez gagner, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else if (chOrd = 0 && MnChF) {
//     gagn += 1;
//     alert('Vous avez gagner, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else  if (chOrd = 1 && MnChF) {
//     gagn += 0;
//     alert('Vous etes a égalité, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else if (chOrd = 2 && MnChF) {
//     gagn += 0;
//     alert('Vous avez perdu, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else  if (chOrd = 0 && MnChC) {
//     gagn += 0;
//     alert('Vous avez perdu, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else if (chOrd = 1 && MnChC) {
//     gagn += 1;
//     alert('Vous avez gagner, vous aves' + gagn + ' points. ' + prcntg + '%');
//   } else  if (chOrd = 2 && MnChC) {
//     gagn += 0;
//     alert('Vous etes a égalité, vous aves' + gagn + ' points. ' + prcntg + '%');
//   }
// });
//
// var essai = 0;
// var prcntg = 0;
// var gagn = 0;
//   // var MnChP = $('#btnPr').attr('value');
//   // var MnChC = $('#btnCs').attr('value');
// $('#btnPr').click(function() {
//   var ChOrd = Math.floor(Math.random()*3);
//   console.log(ChOrd);
//   essai++;
//   if (ChOrd == 0) {
//     gagn += 0;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous etes a égalité, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   } else  if (ChOrd == 1) {
//     gagn += 0;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous avez perdu, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   } else  if (ChOrd == 2) {
//     gagn += 1;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous avez gagné, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   }
// });
// $('#btnFl').click(function() {
//   var ChOrd = Math.floor(Math.random()*3);
//   console.log(ChOrd);
//   essai++;
//   if (ChOrd  == 0) {
//     gagn += 1;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous avez gagner, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   } else  if (ChOrd  == 1) {
//     gagn += 0;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous etes a égalité, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   } else  if (ChOrd  == 2) {
//     gagn += 0;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous avez perdu, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   }
// });
// $('#btnCs').click(function() {
//   var ChOrd = Math.floor(Math.random()*3);
//   console.log(ChOrd);
//   essai++;
//   if (ChOrd == 0) {
//     gagn += 0;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous avez perdu, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   } else  if (ChOrd == 1) {
//     gagn += 1;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous avez gagner, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   } else  if (ChOrd == 2) {
//     gagn += 0;
//     prcntg = gagn * 100 /essai;
//     $('#result').html('Vous etes a égalité, vous aves' + gagn + ' points.');
//     $('.result').html(prcntg + '%');
//   }
// });





// var equal = "égalité";
// var win = "gagné";
// var lose = "perdu";
// var txt_equal = "égalité";
// var txt_win = "Vous gagnez !";
// var txt_lose = "Vous avez perdu.";
// var user_point = 0;
// var ia_point = 0;
// var bet = ["pierre", "feuille", "ciseaux"];
// var result = document.getElementById("result");
// result.innerHTML = '';
// var txt_result = '';
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// function PFC(player_bet) {
//   var i = Number(player_bet);
//   var j = getRandomInt(3); // 0, 1 or 2
//
//   if (user_point < 3 && ia_point < 3) { // il faut 3 victoires
//     result.innerHTML += "(vous) <b>" + bet[i] + "</b> - (IA) <b>" + bet[j] + "</b> : ";
//
//     if (i === j) {
//       result.innerHTML += equal + "<br />";
//     } else if ((i == 0 && j == 2) || (i == 1 && j == 0) || (i == 2 && j == 1)) {
//       result.innerHTML += win + "<br />";
//       user_point++;
//     } else {
//       result.innerHTML += lose + "<br />";
//       ia_point++;
//     }
//     result.innerHTML += "Score : " + user_point + " - " + ia_point + "<br />";
//   }
//
//   if ( (user_point >= 3 || ia_point >= 3) && txt_result == '' ) { // on a 3 victoires
//     if( user_point==ia_point ){
//       txt_result = txt_equal;
//     } else if( user_point>ia_point ){
//       txt_result = txt_win;
//     } else {
//       txt_result = txt_lose;
//     }
//     result.innerHTML += "<h4>Résultat final : <b>"+txt_result+"</b></h4>";
//     result.innerHTML += "<button type=\"button\" onclick=\"PFC_reset();\">Rejouer ?</button><br />";
//   }
// }
// function PFC_reset(){
//   txt_result = '';
//   result.innerHTML = '';
//   user_point = 0;
//   ia_point = 0;
// }
