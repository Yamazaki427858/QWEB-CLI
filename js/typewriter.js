
const text = "Welcome to QWEN-CLI - Terminal OS Logic Unit";
const element = document.getElementById("typing-effect");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();
