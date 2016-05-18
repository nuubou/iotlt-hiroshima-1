console.log('Start');

function onConnectionLost(responseObject) {
	if (responseObject.errorCode !== 0) {
		console.log("onConnectionLost:"+responseObject.errorMessage);
	}
};

function onMessageArrived(message) {
	console.log("onMessageArrived:"+message.payloadString);
};

function onConnect() {
	console.log("onConnect");
	client.subscribe("iot");
}

var client = new Paho.MQTT.Client("153.127.197.166", 9090 , "clientId" + new Date().getTime());
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({onSuccess:onConnect});

window.onload = function() {
	console.log('window.onload');

	getGeolocation.onclick = function() {
		console.log('getGeolocation.onclick');

		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		function success(pos) {
			console.log('success');

			var devicePosition = {
					id: null,
					timestamp:	pos.timestamp,
					latitude:	pos.coords.latitude,
					longitude:	pos.coords.longitude,
					altitude:	pos.coords.altitude,
					accuracy:	pos.coords.accuracy,
					altitudeAccuracy: pos.coords.altitudeAccuracy,
					heading:	pos.coords.heading,
					speed:		pos.coords.speed
					}
			message = new Paho.MQTT.Message(JSON.stringify(devicePosition));
			message.destinationName = "iot";
			client.send(message);
		};

		function error(err) {
			console.warn('ERROR(' + err.code + '): ' + err.message);
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	};
};
