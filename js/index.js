websocket = new _webSocket('ws://localhost:5002');
websocket._startConnection();
websocket._log._iqnoreType("Info") // ignore info message in to console.log
websocket._log._iqnoreType("Error") // ignore Errors
websocket._log._iqnoreType("RawData") // ignore rawdata coming form the server

websocket._onMessage = function(_msgObject, _type, _sender){
	console.log("Get message: "+_msgObject)
	console.log(_msgObject)
	console.log("type: "+_type)
	console.log("sender: "+_sender)
}

websocket._onNewUser = function(_id){
	console.log("new user id:"+_id)
}

websocket._onExistingUsers = function(_users){
	console.log("Get all existing players")
	console.log(_users)
}

websocket._onUserDisconnect = function(_id){
	console.log("User disconnected")
}

websocket._onclose = function(){
	console.log("Connection Close")
}

websocket._onopen = function(){
	console.log("Connection open")
}

//functions to send messages:

// websocket._sendAll('message') 
// websocket._sendUser('message', who)
// websocket._sendTeam('message', who)



let btnToAll = document.getElementById('toAll');
btnToAll.addEventListener('click', ()=>websocket._sendAll(document.getElementById('inputMensagge').value));