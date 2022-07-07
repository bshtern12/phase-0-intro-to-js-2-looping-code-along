function writeCards(name, events) {
    let message = [];
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`)
    }
    return message;
}

function countDown(int) {
    let i = 10
    while (i >= 0) {
        console.log(i)
        i--
    }
}