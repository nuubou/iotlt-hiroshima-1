console.log('Start');

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
			var crd = pos.coords;

			alert(crd.latitude + ' : ' + crd.longitude + ' : ' + crd.accuracy);
			console.log('[' + pos.timestamp + '] ' + crd.latitude + ' : ' + crd.longitude + ' : ' + crd.accuracy);
		};

		function error(err) {
			console.warn('ERROR(' + err.code + '): ' + err.message);
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	};
};
