function injectedFunction() {
	var reel = document.querySelectorAll('[aria-label="reel"]');
	reel.forEach(function(reel_) {
		reel_.style.display = "none";
	});

	var reels = document.querySelectorAll('[aria-label="Reels"]');
	reels.forEach(function(reel_) {
		reel_.style.display = "none";
	});

	var seeMore = document.querySelectorAll('[aria-label="See more"]');
	seeMore.forEach(function(more) {
		more.style.display = "none";
	});
	
	if (window.location.href.includes("facebook.com/reel/")) {
		document.querySelector('body').style.display = "none";
		window.location.replace("https://facebook.com");
	}
}
  
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if( details.tabId !== 'undefined' && details.tabId > 0) {
			chrome.scripting.executeScript({
				target : {tabId : details.tabId},
				func : injectedFunction,
			});
		}
	},
	{urls: ["*://web.facebook.com/*", "*://www.facebook.com/*", "*://m.facebook.com/*"]}
);