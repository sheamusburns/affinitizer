chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === 'addAll' ) {
    	if (document.getElementById("L_c1i0_cb5883_ct5883_cboxs_ctlResults_results")){
			var obj = $("td:contains(Matches Found)").last();
			var text = obj[0].innerHTML;
			var re = /^\d+/g;
			var num = Number(re.exec(text)[0]);
			var con;
			if (num === 1) {
				con = confirm(num + ' human will be affinitized');
			} else {
				con = confirm(num + ' humans will be affinitized');
			}
			var length = Number(num);
			if (con) {
				chrome.runtime.sendMessage({'attempt': {'type': 'addAll', 'length': length}});
			}
		}
    }
    if (request.message === 'removeAll') {
    	if (document.querySelectorAll("img[title='Remove Member']").length > 0){
			var obj = document.querySelectorAll("img[title='Remove Member']");
			var num = obj.length;
			var con;
			if (num === 1) {
				con = confirm('you are about to destroy ' + num + ' human');
			} else {
				con = confirm('you are about to destroy ' + num + ' humans');
			}
			var length = Number(num);
			if (con) {
				chrome.runtime.sendMessage({'attempt': {'type': 'removeAll', 'length': length}});
			}
		}
    }
    if (request.reload === 'addAll') {
    	function addAll() {
	      	var c = document.getElementById("L_c1i0_cb5883_ct5883_cboxs_ctlResults_results");
			var command;
			tArr = c.tBodies[0].children;
			command = tArr[1].getAttribute('onclick');
			console.log(command);
			var re = /(?=_)[\s\S]+/ig;
			command = re.exec(command);
			console.log(command[0]);
			eval(command[0]);
		}
		var scr = document.createElement("script");
		scr.type="text/javascript";
		scr.innerHTML = addAll.toString() + "\naddAll();";
		document.body.appendChild(scr)
    }
    if (request.reload === 'removeAll') {
    	function removeAll() {
	      	var c = document.querySelectorAll("img[title='Remove Member']");
			var command;
			command = c[0].parentElement.getAttribute('href');
			console.log(command);
			var re = /(?=_)[\s\S]+/ig
			command = re.exec(command)
			console.log(command[0]);
			eval(command[0]);
		}
		var scr = document.createElement("script");
		scr.type="text/javascript";
		scr.innerHTML = removeAll.toString() + "\nremoveAll();";
		document.body.appendChild(scr)
    }
  }
);