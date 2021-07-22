const onSubmit = () => {
    const passcodeInput = document.querySelector("#passcode").value
    const textInput = document.querySelector("#message").value
    const payload = {
        passcode: passcodeInput,
        message: textInput
    }
    
    firebase.database().ref().push(payload);
}