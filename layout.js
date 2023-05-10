document.addEventListener('keydown', function(event) {
    var keyPressed = event.key.toLowerCase();
    var buttons = document.getElementsByTagName('div');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.add('pressed');
            break;
        }
        if (keyPressed == "arrowleft")
        {
            keyPressed = "←"
        }
        if (keyPressed == "arrowup")
        {
            keyPressed = "↑"
        }
        if (keyPressed == "arrowright")
        {
            keyPressed = "→"
        }
        if (keyPressed == "arrowdown")
        {
            keyPressed = "↓"
        }
        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.add('pressed');
            break;
        }
    }
});

document.addEventListener('keyup', function(event) {
    var keyPressed = event.key.toLowerCase();
    var buttons = document.getElementsByTagName('div');
    for (var i = 0; i < buttons.length; i++) {
        if (keyPressed == "arrowleft")
        {
            keyPressed = "←"
        }
        if (keyPressed == "arrowup")
        {
            keyPressed = "↑"
        }
        if (keyPressed == "arrowright")
        {
            keyPressed = "→"
        }
        if (keyPressed == "arrowdown")
        {
            keyPressed = "↓"
        }

        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.remove('pressed');
            break;
        }
        
    }
});