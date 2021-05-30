
$('#click').click(function() {
function getTotal(){
    var total = 0;
    $('.note').each(function(){
        total += parseFloat(this.value)
    });
    $('.Result').text('La moyenne de ces notes est : ' + total/5);
}
getTotal();
});
