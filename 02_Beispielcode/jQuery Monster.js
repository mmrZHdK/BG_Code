$( "section.article p.halb" )
    .addClass( 'passiv' )
    .css( "border", "1px solid red" )
    .slideUp()
    .click( function( e ) {
        console.log( 'Klick!' );
    } );



