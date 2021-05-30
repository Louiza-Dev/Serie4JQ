
  let monNam = $('#inpNam').val();
  let monFrstN = $('#inpFrs').val();
  let maDateNsc = $('#inpNascDat').val();
  let monLieuNsc = $('#inpNascLieu').val();
  let monEmploi = $('#inpEmploi').val();
  let maSocié = $('#inpSoct').val();

$("#click").click(function() {

var reg = new RegExp("^[A-Z\.\-]+[A-Za-z\.\-]+[^0-9]$");
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
     if ( reg.test(monLieuNsc) ) {
       $('#inpNascLieu').css({
         "border": "3px solid green",
         "background-color": "lightgreen"
          });
       } else {
       $('#inpNascLieu').css({
         "border": "3px solid red",
         "background-color": "salmon"
          });
       }
      // break;
      var exp = new RegExp("^([0-2][0-9]|(3)[0-1])+\/(0[1-9]|1[0-2])\/(19[0-9]\d|200\d|201[0-9]|202[0-1])$");     //"^([0-2][0-9]|(3)[0-1]d{2}-\[0-1][0-9]d{2}-\(19)[0-9]|(20)[0-9]d{4}$"         ^([0-2][0-9]|(3)[0-1])

     // var exp = new RegExp("^(0[1-9]|[12][0-9]|3[0-1])[- /.](0[1-9]|1[012])[- /.]((19|20)\\d\\d)$");
     if ( exp.test(maDateNsc) ) {
       $('#inpNascDat').css({
         "border": "3px solid green",
         "background-color": "lightgreen"
          });
       } else {
       $('#inpNascDat').css({
         "border": "3px solid red",
         "background-color": "salmon"
          });
       }
      // break;


       // var reg = new RegExp("^[A-Z\.\-]+[A-Za-z\.\-]+[^0-9]$")
       // if ( reg.test(monFrstN) ) {
       //   $('#inpFrs').css({
       //     "border": "3px solid green",
       //     "background-color": "lightgreen"
       //      });
       //   } else {
       //   $('#inpFrs').css({
       //     "border": "3px solid red",
       //     "background-color": "salmon"
       //      });
       //   }
       //  // break;
       //  if ( reg.test(monFrstN) ) {
       //    $('#inpFrs').css({
       //      "border": "3px solid green",
       //      "background-color": "lightgreen"
       //       });
       //    } else {
       //    $('#inpFrs').css({
       //      "border": "3px solid red",
       //      "background-color": "salmon"
       //       });
       //    }
       //   // break;
});
