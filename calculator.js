
$('.number').on('click', function(){
    let value = $('.result').val();
    let thisvalue = $(this).attr('value');
    $('.result').val(value + thisvalue);
});

$('.function').on('click', function(){
    let thisvalue = $(this).data('data');
     $('.functionValue').val(thisvalue);

    let firstValue = $('.result').val();
    $('.firstValue').val(firstValue);

    $('.result').val('');
});


$('.equal').on('click', function(){
    let value = $('.result').val();
    let firstValue = $('.firstValue').val();
    let functionValue = $('.functionValue').val();
   

    let result = parseFloat(value) + parseFloat(firstValue);
    $('.result').val(result);
});

$('.clear').on('click', function(){
    $('.result').val('');
    $('.firstValue').val('');
});


// $('.number').on ('click', function(){
//     let value = $('. result').value();
//     let thisvalue = $(this).attr(value);
//     $('.result').val(value+thisvalue);
// });

