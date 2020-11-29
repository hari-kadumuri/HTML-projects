import "./Alarm.css"

var notification;
var count;
function startAlarm() { 
    document.getElementById("NotificationLog").innerHTML = "<div> function triggered </div>";
    var interval = document.getElementById("Time interval").value;
    var customInterval = document.getElementById("Custom Interval").value;
    var notificationLog = document.getElementById("NotificationLog");
    console.log(customInterval);
    if(interval === -1 && customInterval === "") {
        notificationLog.innerHTML = "<div>Please select a valid interval</div>";
        return;
    }
    else if(customInterval !== "") interval = customInterval;
    var interval_in_milliseconds = interval*60*1000;
    count = document.getElementById("Interval Count");
    var audio = new Audio("./NotificationSounds/piece-of-cake.mp3");
    notificationLog.innerHTML = "<div>Alarm has started</div>";
    notification = setInterval(function notify() {audio.play();notificationLog.innerHTML += "<div>Alarm Logging</div>";}, interval_in_milliseconds);
}      
function stopAlarm() {
    clearInterval(notification);
    var notificationLog = document.getElementById("NotificationLog");
    notificationLog.innerHTML = "<div>Alarm has stopped</div>";
}
function reset() {
    window.location.reload();
}

function Alarm() {
  return (
    <div className="main">
        <div class="slidecontainer">
            <label for="myRange">Dark Mode:</label>
            <input type="range" min="0" max="1" value="0" class="slider" id="myRange" />
        </div>
        <h2>Custom Alarm</h2>
        <div>
            <div>
                <label for="Time interval">Choose a time interval:</label>
                <select id="Time interval" name="Time interval" form="alarmform">
                    <option value="-1">--Select--</option>
                    <option value="1">1 min</option>
                    <option value="2">2 mins</option>
                    <option value="5">5 mins</option>
                    <option value="10">10 mins</option>
                    <option value="15">15 mins</option>
                    <option value="20">20 mins</option>
                    <option value="30">30 mins</option>
                    <option value="40">40 mins</option>
                    <option value="50">50 mins</option>
                    <option value="60">60 mins</option>
                </select>
            </div>
            <p><em>or</em></p>
            <div>
                <label for="Custom Interval">Choose a custom interval (<em>*in mins</em>):</label>
                <input type="text" id="Custom Interval" name="Custom Interval" />
            </div>
        </div>
        <div>
            <label for="Interval Count">Choose no of intervals:</label>
            <input type="text" id="Interval Count" name="Interval Count" />
        </div>
        
        <div>
            <button onclick={startAlarm}>Start Alarm</button>
            <button onclick={stopAlarm}>Stop Alarm</button>
            <button onclick={reset}>Reset</button>
        </div>
    </div>
  );
}

export default Alarm;
