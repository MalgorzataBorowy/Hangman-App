const keyLayout = [
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
            "z", "x", "c", "v", "b", "n", "m"
]

const keyboardKeys = document.createElement('div')
    
keyLayout.forEach((key => {
    const keyElement = document.createElement("button");
    const insertLineBreak = ["p", "l"].indexOf(key) !== -1;
    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");
    keyElement.textContent = key
    keyboardKeys.appendChild(keyElement)
    if (insertLineBreak) {
        keyboardKeys.appendChild(document.createElement("br"));
    }
    keyElement.addEventListener("click", (ev) => {
        console.log(ev.target.textContent)
    })
}))

document.querySelector('#keyboard-keys').appendChild(keyboardKeys)