const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
bodyElement.appendChild(mainElement)


const buttonElement = document.createElement('button')
bodyElement.append(buttonElement)
buttonElement.append('Click me!')
buttonElement.style.backgroundColor = "gray"
buttonElement.style.width = "100px"
buttonElement.style.height = "50px"





const img = document.createElement('img')
img.className = ".image"

img.src = "https://cdn.mos.cms.futurecdn.net/anujcLCG3T9jtKGKmLaTKk-650-80.jpg.webp";



const a = document.createElement('a')
const aText = document.createTextNode("Follow this link for the source.")


a.appendChild(aText)
a.className = ".link"
a.href = "https://cdn.mos.cms.futurecdn.net/anujcLCG3T9jtKGKmLaTKk-650-80.jpg.webp";
a.target = "blank"



mainElement.appendChild(img)
mainElement.appendChild(a)




buttonElement.addEventListener('click', function () {
    mainElement.remove()

})

// Create a 'remove element' button

// To the body, add a text-type <input> and another button. The user will type a valid CSS selector into the text box. When the user clicks this new button, a click event listener should take the text value from the input element and remove the first element from the DOM which matches the CSS selector provided by the user. For example: entering the string .image, then clicking this new button, should remove the image element with the class of "image" from the DOM.


const textInput = document.createElement("input")
bodyElement.appendChild(textInput)


const button2 = document.createElement("button")

bodyElement.append(button2)
button2.append('Remove Element')
button2.style.backgroundColor = "gray"
button2.style.width = "100px"
button2.style.height = "50px"

button2.addEventListener('click', function () {
    let userText = textInput.value
    if (userText.includes('.image')) {
        img.remove('.image')
    }
    if (userText.includes('.link')) {
        a.remove('.link')
    }
})













// Create an 'add element' button

//     To the body, add another text-type <input> and another new button. When the user clicks this button, it should create a DIV element and append it to the BODY, and should contain the text content provided by the user in the text box.


const button3 = document.createElement("button")
bodyElement.append(button3)
button3.append('Add Element')
button3.style.backgroundColor = "gray"
button3.style.width = "100px"
button3.style.height = "50px"

button3.addEventListener('click', function () {
    let userText2 = textInput.value
    let divElement = document.createElement('div')
    bodyElement.appendChild(divElement)
    divElement.append(userText2)
})