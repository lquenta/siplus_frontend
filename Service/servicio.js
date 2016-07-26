$(document).ready(function() {
	
	$("#buscar1").click(function(){
		$.getJSON( "http://cerberus-test.com/SIPLUS/busquedas/123.json", function( data ) {
		  $.each(data, function(i,x){
			var resultados2 = x.resultados;
				$.each(resultados2, function(i,x){
				content = '<p>' + x.id_recomendacion + '</p>';
				acciones = x.acciones;
				$(content).appendTo("#body");
				alert(content);
					$.each(acciones, function(i,x){
						descripcion = x.descripcion;
						alert(descripcion);	
					});
				});
		  });
 
		});
		
	});
	
		
});