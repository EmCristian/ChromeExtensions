const minutesButtons = Array.from(document.getElementsByClassName('constantMinutesButton'));
const saveButton = document.getElementsByClassName('saveButton')[0];
const stopButton = document.getElementsByClassName('stopButton')[0];
const minutesValueElement = document.getElementsByClassName('minutesInput')[0];


console.log(saveButton);

minutesButtons.forEach(mb =>  {
    mb.addEventListener('click', function handleClick(event) {
        minutesValueElement.setAttribute('value', mb.value);
    })
});


saveButton.addEventListener('click', () => {
    chrome.alarms.clearAll();

    chrome.alarms.create('alarm', 
    {
        periodInMinutes: parseInt(minutesValueElement.value)
    });
  });

stopButton.addEventListener('click', () => {
    chrome.alarms.clearAll();
  });