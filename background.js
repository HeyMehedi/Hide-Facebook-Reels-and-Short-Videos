function injectedFunction() {
	var reels = document.querySelectorAll('[aria-label="reel"]');
	reels.forEach(function(reel) {
		reel.style.display = "none";
	});

	var seeMore = document.querySelectorAll('[aria-label="See more"]');
	seeMore.forEach(function(more) {
		more.style.display = "none";
	});
	
	if (window.location.href.includes("facebook.com/reel/")) {
		document.querySelector('[role="main"]').style.display = "none";
	}
}
  
browser.webRequest.onBeforeRequest.addListener(
	function(details) {
		if( details.tabId !== 'undefined' && details.tabId > 0) {
			browser.scripting.executeScript({
				target : {tabId : details.tabId},
				func : injectedFunction,
			});
		}
	},
	{urls: ["*://web.facebook.com/*", "*://www.facebook.com/*", "*://m.facebook.com/*"]}
);