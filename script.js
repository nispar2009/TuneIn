secureTune = str => {
    const allowed = ["A", "B", "C", "D", "E", "X"]

    str.split(iterator => {
        if (allowed.includes(iterator) == false) {
            return false
        }
    })

    return true
}

verifyTune = () => {
    const str = getInput("tune")
    if (secureTune(str)) {
        document.getElementById("subTune").disabled = false
        document.getElementById("subBoth").disabled = false
        return
    }
    document.getElementById("subTune").disabled = true
    document.getElementById("subBoth").disabled = true
}

playTune = () => {
    const tune = getInput("tune")
    let count = 0

    document.getElementById("audioTune").innerHTML = `<audio id="melody" autoplay src="Audio/${tune[0]}.wav"></audio>`
    document.getElementById("melody").playbackRate = 5
    document.getElementById("melody").onended = () => {
        count++
        if (count < tune.length) {
            document.getElementById("melody").src = `Audio/${tune[count]}.wav`
            document.getElementById("melody").playbackRate = 5
            document.getElementById("melody").play()
        }
    }
}
