const getMessages = () => {
    const passcode = document.querySelector("#passcode")
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val()
        let matchFound = false
        for (let key in data) {
            console.log(key, data[key])
            if (key === passcode.value) {
                matchFound = true
                const message = document.querySelector("#message")
                message.innerHTML = data[key]
            }
        }
        if (!matchFound) {
            const message = document.querySelector("#message")
            message.innerHTML = "No match found!!"
        }
    })
}