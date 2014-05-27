/*
$( '.reiter' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  
  var $elem = $( e.target );
  var $elter = $elem.parent();
  var $tanten = $elter.siblings();
  $tanten.css( 'left', '85%' )
      .css( 'z-index', '10' );
  $elter.css( 'left', '0%' )
      .css( 'z-index', '0' );
} );

*/
$( '.reiter' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  var $elter = $( e.target ).parent();
  $elter.siblings()
      .css( 'left', '85%' )
      .css( 'z-index', '10' );
  $elter.css( 'left', '0%' )
      .css( 'z-index', '0' );
} );

$( '.schliesser' ).click( function ( e ) {
  console.log( 'click @ ' + e.target.id );
  var $ebene = $( e.target ).closest( '.ebene' );
  $ebene.css( 'left', '85%' )
      .css( 'z-index', '0' );
} );
