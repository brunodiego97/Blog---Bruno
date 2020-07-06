$('#collapse-nav').on('show.bs.collapse', function(){
    $('.texto_banner').css('transform', 'translate( -50%, 0%');
});

$('#collapse-nav').on('hide.bs.collapse', function(){
    $('.texto_banner').css('transform', 'translate( -50%, -50%');
});