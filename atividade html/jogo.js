let randomNumber = Math.floor(Math.random() * 100);

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 99) {
        message.textContent = "Por favor, insira um número válido entre 0 e 99.";
        message.style.color = "yellow";
        return;
    }
    if (userGuess == 22){message}
    if (userGuess === randomNumber) {
        message.textContent = "Parabéns! Você acertou o número!";
        message.style.color = "green";
        document.body.style.backgroundColor = "green";
    } else if (userGuess < randomNumber) {
        message.textContent = "O número é maior! Tente novamente.";
        message.style.color = "red";
    } else {
        message.textContent = "O número é menor! Tente novamente.";
        message.style.color = "red";
    }
}