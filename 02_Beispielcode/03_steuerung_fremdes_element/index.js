$( '#t1' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  var $elem = $( '.ball' );
  $elem.css( 'background-color', '#b00' );
} );

$( '#t2' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  $( '.ball' ).css( 'background-color', '#0b0' );
} );

$( '#t3' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  $( '.ball' )
        .css( 'left', '300px' )
        .css( 'top', '50px' );
} );
$( '#t4' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  $( '.ball' )
        .css( 'left', '200px' )
        .css( 'top', '600px' );
} );
$( '#t5' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  $( '.ball' )
        .css( 'left', '20px' )
        .css( 'top', '500px' );
} );
