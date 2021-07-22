const getMessages = () => {
    const passcode = document.querySelector("#passcode")
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val()
        let matchFound = false
        for (let key in data) {
            if (data[key].passcode === passcode.value) {
                matchFound = true
                const specialMessage = document.querySelector("#specialMessage")
                specialMessage.innerHTML = data[key].message
            }
        }
        if (!matchFound) {
            const message = document.querySelector("#message")
            message.innerHTML = "No match found!!"
        }
    })
}