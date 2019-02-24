$('.select').on('click','.placeholder',function(){
    var parent = $(this).closest('.select');
    if ( ! parent.hasClass('is-open')){
        parent.addClass('is-open');
        $('.select.is-open').not(parent).removeClass('is-open');
    }else{
        parent.removeClass('is-open');
    }
}).on('click','ul>li',function(){
    var parent = $(this).closest('.select');
    parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
    parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
});




var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
        .parent(".button-container")
        .parent(".qty-container")
        .find(".qty");
    $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
    var $n = $(this)
        .parent(".button-container")
        .parent(".qty-container")
        .find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount-1);
    }
});