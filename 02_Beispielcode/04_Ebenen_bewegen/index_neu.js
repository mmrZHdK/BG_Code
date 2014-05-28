var click_function = function ( event ) {
  // MyClickFunction
  // we have to push away all other ebenes
  // Identify which element has been clicked
  var $click_elem = $( event.target );
  
  // Identify the ebene the element is on
  var $ebene = $click_elem.closest( '.ebene' );
  
  // Identify all the other ebenes
  var $elter = $ebene.parent();
  console.log( "parent:" + $elter.length );
  
  var $andere_ebenen = $elter.find( '.ebene' );
  console.log( "ebenen:" + $andere_ebenen.length );
  
  // we just push them away
  $andere_ebenen.css( 'left', '82%' );
  $andere_ebenen.css( 'z-index', '0' );
  
  // pull myself to its normal position
  $ebene.css( 'left', '0' );
  $ebene.css( 'z-index', '-10' );
}

$( '.reiter' ).click( click_function );
