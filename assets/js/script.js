var timeSlots = document.getElementsByClassName ("time-block")
var saveTaskButtons = document.getElementsByClassName ("saveBtn")
var textAreas = document.getElementsByClassName ("textarea")


window.addEventListener("load", function(){
    for (i = 0; i < textAreas.length; i++){
        var task = localStorage.getItem(i);
        if (task){
            textAreas[i].value = task;
        }
        else {
            textAreas[i].value = "";
        }
    }
})

for (i = 0; i < saveTaskButtons.length;i++) {
    saveTaskButtons [i].addEventListener("click", function(event){
        var elementIndex = findElementIndex(saveTaskButtons, event.target);
        console.log(elementIndex)

        localStorage.setItem(elementIndex, textAreas[elementIndex].value);
    })
}

function findElementIndex(collection, element){
    for (i = 0; i < collection.length; i++){
        if (collection[i] == element) return i;
    }
}