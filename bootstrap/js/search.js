const MAX_RESULTS = 12;

function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

function init() {
	gapi.client.setApiKey('AIzaSyCKV_Pj62t5ePv1D_hx70dmZC0k_dmDGVc');
	gapi.client.load('youtube', 'v3', function(){});
}

function search(){
	var q = encodeURIComponent($("#search-bar").val()).replace(/%20/g, "+");
	console.log(q);
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: q,
        maxResults: MAX_RESULTS
    });

	//Send request to server
	request.execute(function(response){
		//$("#videos").html("");
		var results = response.result;
		$.each(results.items, function(index, item){
			var html = "<div class='col-lg-3 col-md-4 col-xs-6'>" + 
							"<a class='thumbnail' href='#'>" +
								"<img class='img-responsive' src='http://img.youtube.com/vi/" + item.id.videoId + "/0.jpg' alt=''>" +
							"</a>" +
							//"<div class='title'>"+item.snippet.title+"</div>"+
						"</div>";

			$("#results").append(html);
			/*$.get("video_item/item.html", function(data){
				$("#results").append(tplawesome(data, [{"videoid":item.id.videoId}]));
			});*/
		});
	});
}



/*function ontClientLoad(){
	gapi.client.load("youtube", "v3", onYoutubeApiLoad);
}

function onYoutubeApiLoad(){
	gapi.client.setApiKey("AIzaSyChdGsrMrdCH-wXQy5FD5QzJzOyYF5W12c");
	search();
}

function search(){
	var request = gapi.client.youtube.search.list({
		part: "snippet",
		q: "cat",
		maxResults: 4
	});

	//Send request to server
	request.execute(showResponse);
}

function showResponse(response){
	var responseString = JSON.stringify(response, "", 2);
	document.getElementById("response").innerHTML += responseString;
	console.log(responseString);
}*/

