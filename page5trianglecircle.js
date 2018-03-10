$(document).on('click', function( evt ) {
    evt.preventDefault();
    if ( evt.target.id == 'disappear')
         $('#disappear').fadeToggle();
});
