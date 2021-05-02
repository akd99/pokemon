function startTimerNew(){
    const minutesInput = document.getElementById('minutes');
    nodecg.sendMessage('startTimerMessage', minutesInput);
};