// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var req = new XMLHttpRequest();
req.open(
    "GET",
	"http://feed.rssad.jp/rss/gigazine/rss_2.0"
	,true);
req.onload = showArticles;
req.send(null);

function showArticles() {
	var articles = req.responseXML.getElementsByTagName("item");
	
	for (var i = 0; i < 5; i++) {
		var atag = document.createElement("a");
		
		var linkURL = articles[i].getElementsByTagName("link").item(0).firstChild.nodeValue;
		
		atag.href = linkURL;
		atag.target="_blank";
		atag.appendChild(articles[i].getElementsByTagName("title").item(0));
		
		document.body.appendChild(atag);
		
		var br = document.createElement("br");
		document.body.appendChild(br);
	}
}
