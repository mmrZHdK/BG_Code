// JS Code für Ticket kaufen
console.log( "Hello! Program starting" );

var radioClickFunction = function( event ) {
  // Identify ourselves, as we got clicked
  var $myself = $( this );
  
  // Change the state...
  if ( $myself.hasClass( 'aktiv' ) ) {
    // if we are active stay active
  } else {
    // if we are inactive, deactivate all (the others)
    $myself.siblings().removeClass( 'aktiv' );
    
    // -- activate ourselves
    $myself.addClass( 'aktiv' );
    
    // -- stick our info into the line
    var klasse_text = $myself.text();
    $( '#klasse' ).text( klasse_text );
  }
}

$( '.radio_button' ).click( radioClickFunction );
