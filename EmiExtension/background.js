chrome.alarms.onAlarm.addListener((alarm) => {

var timestamp = new Date().getTime();
var id = 'notificationId' + timestamp;

    chrome.notifications.create(id, {
        type: 'basic',
        iconUrl: 'alarmclock.png',
        title: 'Time is now!',
        message: 'You should take a break!',
        priority: 2
    });
})

