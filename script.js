    const pressedKeyDisplay = document.getElementById('pressed-key');
    const keyCodeDisplay = document.getElementById('key-code');

    document.addEventListener('keydown', function(event) {
        const pressedKey = event.key;
        const keyCode = event.code;
        let container = document.querySelector(".container2");
        container.style.display="block";
        // Display pressed key and key code
        pressedKeyDisplay.innerHTML = `You pressed <span class="green-text">${pressedKey}</span>`;
        keyCodeDisplay.textContent = `${pressedKey.charCodeAt(0)}`;
        
        playBeepSound();

        console.log(`Pressed Key: ${pressedKey}, Key Code: ${keyCode}`);
    });

    function playBeepSound() {
        const beep = new Audio('beep.mp3');
        beep.play();
    }
