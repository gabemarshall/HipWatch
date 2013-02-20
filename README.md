HipWatch
========

A Simple HipChat notify plugin built for https://github.com/iloire/WatchMen


Implementation
==============

1. Install node-hipchat library

npm install node-hipchat

2. Place hipchat.js into /lib of your Watchmen folder

3. Edit server.js to include the following line.
	
	var hipChatNotify = require('./lib/hipchat');

4. Call hipChatNotify function when needed.

	Ex: 
	<code>watchmen.on('service_down', function(service, state){

		hipChatNotify(service.url_info,'red','appears to be offline ');

	}</code>

