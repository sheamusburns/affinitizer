chrome.runtime.onMessage.addListener(function (request, sender) {
	if (request.attempt.type) {
  		runAllTheThings(request.attempt.type);
	}
	function runAllTheThings(type) {
		var count = request.attempt.length;

	  	var thing = window.setInterval(function(){
			if (count > 0) {
				chrome.tabs.sendMessage(sender.tab.id, {'reload': type});
				count--;
			} else {
				this.clearInterval();
				count = 0;
			}
	  	}, 1500);
		chrome.tabs.sendMessage(sender.tab.id, {'reload': false});	
	}
});


