document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const list1 = document.getElementById('sadlads-list');
    const list2 = document.getElementById('projects-list');
    const list3 = document.getElementById('goats-list');
    let currentList = list1;

    toggleButton.addEventListener('click', function() {
        
        if (currentList === list1) {
            list1.classList.add('off-screen');
            list2.classList.remove('off-screen');
            document.getElementById("toggleButton").innerText = "SUSPECTS >" ;

            currentList = list2;

        } else if (currentList === list2) {
            list2.classList.add('off-screen');
            list3.classList.remove('off-screen');
            document.getElementById("toggleButton").innerText = "SADLADS >" ;
            document.getElementById("toggleButton").classList.add('red');

            currentList = list3;

        } else if (currentList === list3) {
            list3.classList.add('off-screen');
            list1.classList.remove('off-screen');
            document.getElementById("toggleButton").innerText = "PROJECTS >" ;
            document.getElementById("toggleButton").classList.remove('red');

            currentList = list1;
        }
        currentList.classList.toggle('active');
    });
});