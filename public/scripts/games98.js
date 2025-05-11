// Games popup crap

function openPopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = 'block';
    bringToFront(popup);
    }

    function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    }

    function startDrag(event, id) {
    const popup = document.getElementById(id);
    let shiftX = event.clientX - popup.getBoundingClientRect().left;
    let shiftY = event.clientY - popup.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        popup.style.left = pageX - shiftX + 'px';
        popup.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    };

    popup.style.position = 'absolute';
    popup.style.zIndex = 1000;
    bringToFront(popup);
    }

    function bringToFront(element) {
    const highestZIndex = Array.from(document.querySelectorAll('.popup'))
        .map(el => parseInt(window.getComputedStyle(el).zIndex) || 0)
        .reduce((max, zIndex) => Math.max(max, zIndex), 0);
    element.style.zIndex = highestZIndex + 1;
    }


    // automate add opening after time
    setTimeout(() => {
        const adPopup = document.getElementById('adPopup');
        adPopup.style.display = 'block';
        bringToFront(adPopup);
        }, 10000);

        function closeAdPopup() {
        const adPopup = document.getElementById('adPopup');
        adPopup.style.display = 'none';
        }