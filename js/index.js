jQuery( "#intro" ).ready(function() {
    jQuery( ".slow" ).first().show( "slow", function showNext() {
      jQuery( this ).next( "div" ).show( "slow", showNext );
    });
});
