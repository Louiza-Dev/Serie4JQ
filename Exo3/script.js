
// let maal = $('#inpMal').val();
$("#click").click(function() {
  let monMail = $('#inpMal').val();
  let monNam = $('#inpNam').val();
  let monFrstN = $('#inpFrs').val();
  let monNum = $('#inpTel').val();

              // /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/
var reg = new RegExp("^[A-Z\.\-]+[A-Za-z\.\-]+[^0-9]$")
  if ( reg.test(monNam) ) {     //'#^[A-Z][a-z]*#'   (/^([A-Z][a-z+)$/))
    $('#inpNam').css({
      "border": "3px solid green",
      "background-color": "lightgreen"
       });
    } else {
    $('#inpNam').css({
      "border": "3px solid red",
      "background-color": "salmon"
       });
    }
    // break;
    if ( reg.test(monFrstN) ) {
      $('#inpFrs').css({
        "border": "3px solid green",
        "background-color": "lightgreen"
         });
      } else {
      $('#inpFrs').css({
        "border": "3px solid red",
        "background-color": "salmon"
         });
      }
     // break;
     var rex = new RegExp("(0|\\+33|0033)[6-9][0-9]{8}$");
     if ( rex.test(monNum) ) {
       $('#inpTel').css({
         "border": "3px solid green",
         "background-color": "lightgreen"
          });
       } else {
       $('#inpTel').css({
         "border": "3px solid red",
         "background-color": "salmon"
          });
       }
       //       "^[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]+\.[a-zA-Z\.\-_]{1,}[a-zA-Z\-_]+"
    var exp = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$");
    if ( exp.test(monMail) ) {
      $('#inpMal').css({
        "border": "3px solid green",
        "background-color": "lightgreen"
         });
    } else {
      $('#inpMal').css({
        "border": "3px solid red",
        "background-color": "salmon"
         });
    }
});
