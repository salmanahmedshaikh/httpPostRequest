function httpPostRequest(postCommand, requestBody, callbackFunction, callbackArgument)
{
	var postURLAndPort = "http://150.82.218.237:8080/";	
	
	if(postCommand == "SparkQuery") 
    {
		var params = JSON.stringify({"dataStream": "0001", "objType": "car", "predAccLow": "0.5", "predAccHigh": "0.8", "winSize": "10", "winSlideStep": "10"});
	}
	else if(postCommand == "Stop")
	{
		var params = ""		
	}
	else if(postCommand == "ClearKafkaTopic")
	{
		var params = JSON.stringify({"topicName": "test"});
	}
	
	// Generating Post Request	
	var postURL = postURLAndPort + postCommand;
	var xhr = new XMLHttpRequest();			
	
	xhr.open("POST",postURL,true);
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onerror = function()
	{
		console.log("Network error: Server not available!");            
		return;
	};

	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			var xhrResponseText = xhr.responseText;
			console.log(xhrResponseText);
			//callbackFunction.apply(this,[callbackArgument, xhrResponseText]);
		}
	};		
	
	xhr.send(params);
}

