var doit;

function resizeFrame(event) {
	window.frameElement.style.height = window.document.body.scrollHeight + "px";
}

window.addEventListener('load', resizeFrame, true);
window.addEventListener('resize', function (event) {
	clearTimeout(doit);
	doit = setTimeout(resizeFrame, 100);
});
