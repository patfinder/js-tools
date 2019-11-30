javascript: (function (e, s) {
	e.src = s;
	e.onload = function () {
		console.log('lodash injected')
	};
	document.head.appendChild(e);
})(document.createElement('script'), '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.13/lodash.js')

