chrome.tabs.getSelected(function(tab){
	var parser = document.createElement('a')
	parser.href=tab.url;
	if (parser.host !== 'gds.myschoolapp.com') { //your domain for blackbaud instance goes here
		document.write("<body></body>")
		var div = document.createElement('div');
		div.setAttribute('style', "text-align:center");
		div = document.body.appendChild(div);
		var h3 = document.createElement('h3');
		h3.innerHTML = "This is not the site you're looking for";
		var img = document.createElement('img');
		img.src = 'notDroids.jpg';
		div.appendChild(h3);
		div.appendChild(img);
  	}
})
document.addEventListener('DOMContentLoaded', function() {
	var clickAllButton = document.getElementById('clickAllButton');
	var xAllButton = document.getElementById('xAllButton');
	clickAllButton.addEventListener('click', function(){
		chrome.tabs.getSelected(function(tab){
			chrome.tabs.sendMessage(tab.id, {'message': 'addAll'});
		});
	});
	xAllButton.addEventListener('click', function(){
		chrome.tabs.getSelected(function(tab){
			chrome.tabs.sendMessage(tab.id, {'message': 'removeAll'});
		})
	})
});