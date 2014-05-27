// am Dienstag nachmittag sind wir Arrays und Objects durchgegangen und
// haben ein Beispiel mit dem Ticketpreis gemacht
// hier ist der Sourcecode dazu


// Speiche Daten für ein Ticket in verschiedenen Variablen
// --> umständlich, uncool ;-)
var ticket_price = 24.50;
var ticket_destination = 'Zürich';

// Speichere Daten für ein Ticket in einem Objekt zusammen
var ticket = { };                 // neues leeres Objekt
ticket.origin = "Winterthur";     // Start im Ticket erzeugen und speichern
ticket.destination = "Zürich";    // Ziel erzeugen und speichern

// Rufe die "berechne" Funktion der SBB auf, um einen Preis zu berechnen
berechne( ticket );


// Speichere mehrere Tickets in einzelnen Variablen
// --> auch umständlich
var ticketA = { destination: 'Zürich',
          origin: 'Zug',
          person: 1 }
var ticketB = { destination: 'Luzern',
          origin: 'Chur',
          person: 2 }
berechne( ticketA );
berechne( ticketB );
// es muss für jedes Ticket einzeln berechnet werden
// wir können so leider keine Schleife dazu verwenden


// neue Variante
// Array für alle Ticket-Objekte
var ticketArray = [];
ticketArray[ 0 ] = { destination: 'Zürich',
          origin: 'Zug',
          person: 1,
          price: undefined };                   // Schreibweise für Objekte, wenn sie
ticketArray[ 1 ] = { destination: 'Luzern',     // neu erzeugt werden und gleich Properties
          origin: 'Chur',                       // mit drin sein sollen
          person: 2,
          price: undefined };

// Schleife mit einem Zähler für alle Tickets in ticketArray
for ( var index = 0; index <= ticketArray.length; index++ ) {
  // berechen Funktion fehlt
  // Funktion wrid von SBB geliefert
  berechne( ticketArray[ index ] );
}

// We have an Array with a lot of tickets
// and a lot of individual prices
var combinedPrice = 0;
for ( var index = 0; index <= ticketArray.length; index++ ) {
  combinedPrice += ticketArray[ index ].price;
}
console.log( "All your tickets cost you: " + combinedPrice );
  

// Definiere ein Property im Objekt und speichere eine Funktion da drin
// Die SBB muss diese Funktion bereitstellen!
ticket.berechne = function() {
  // llalala
}

// jetzt rufe die Funktion auf
ticket.berechne();
// danach sollte das Ticket ein Property namens "price" haben mit dem korrekten Preis drin
