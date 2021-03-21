var timeSlots = document.getElementsByClassName ("time-block");
var saveTaskButtons = document.getElementsByClassName ("saveBtn");
var textAreas = document.getElementsByClassName ("textarea");
var times = document.getElementsByClassName("hour");

// Set the times for timeblocks
initTimes();

// When the page loads.
window.addEventListener("load", function(){
    // For each text area
    for (i = 0; i < textAreas.length; i++){
        // Get the task from local storage.
        var task = localStorage.getItem(i);
        // If there is a task
        if (task){
            // Display the task
            textAreas[i].value = task;
        }
        // If there is no task
        else {
            // Display nothing
            textAreas[i].value = "";
        }
    }

})

// For each of the save buttons
for (i = 0; i < saveTaskButtons.length;i++) {
    // Wait for the button to be clicked
    saveTaskButtons [i].addEventListener("click", function(event){
        // Find the number of the button being clicked
        var elementIndex = findElementIndex(saveTaskButtons, event.target);

        // Store the number of the task, and the task itself
        localStorage.setItem(elementIndex, textAreas[elementIndex].value);
    })
}

// Used to find the number of an element in a group of elements
function findElementIndex(collection, element){
    // For each elemenet in the group
    for (i = 0; i < collection.length; i++){
        // If the element matches the one you have.
        // Return the number of the element.
        if (collection[i] == element) return i;
    }
}
// Used to create the times used for timeblocks
function initTimes(){
    // for each time block
    for (i = 0; i < times.length; i++){
        // Display the time in moment forn
        times[i].textContent = moment(9+i+':00', 'hh:mm a').format('h:mm a');
    }
}
function updateColors(){
    for (i = 0; i < times.length; i++){
        if (moment().isBefore(moment(times[i].textContent, 'h,mm a'))){
            console.log(textAreas[0].textContent);
        }
    }
}