$.getJSON( "ajax/listitems.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
	items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ol/>", {
	"class": "my-new-list",
	html: items.join( "" )
  }).appendTo( "test" );
});
