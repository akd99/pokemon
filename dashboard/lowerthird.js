const messageInput = document.getElementById('message')

function lowerThirdUpdate() {
    const data = {message: messageInput.value}
    nodecg.sendMessage('showLowerThird', data);
}