window.onload = function() {
	console.log('Window loaded...');

	$("button").click(function() {
		 $.ajax({
	        type: 'POST',
	        url: '/demopost',
	        data: JSON.stringify({
	            message: "Good luck! :-)"
	        }),
	        success: function(result) {
	            console.log(result.message);

	            $("button").remove();
	            $("<h1 />").text(result.message).css("text-align", "center").appendTo("body");
	        },
	        error: function(error) {
	            console.log(error);
	        },
	        contentType: 'application/json',
	        dataType: 'json'
	    });
	});
}