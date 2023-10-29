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

secureBeat = str => {
    const allowed = ["P", "Q", "X"]

    str.split(iterator => {
        if (allowed.includes(iterator) == false) {
            return false
        }
    })

    return true
}

verifyBeat = () => {
    const str = getInput("beat")
    if (secureBeat(str)) {
        document.getElementById("subBeat").disabled = false
        document.getElementById("subBoth").disabled = false
        return
    }
    document.getElementById("subBeat").disabled = true
    document.getElementById("subBoth").disabled = true
}

playTune = () => {
    const tune = getInput("tune")
    let count = 0

    document.getElementById("audioTune").innerHTML = `<audio id="melody" autoplay src="Audio/${tune[0]}.m4a"></audio>`
    document.getElementById("melody").playbackRate = 9
    document.getElementById("melody").onended = () => {
        count++
        if (count < tune.length) {
            document.getElementById("melody").src = `Audio/${tune[count]}.m4a`
            document.getElementById("melody").playbackRate = 9
            document.getElementById("melody").play()
        }
    }
}

playBeat = () => {
    const beat = getInput("beat")
    let count = 0

    document.getElementById("audioBeat").innerHTML = `<audio id="bass" autoplay src="Audio/${beat[0]}.m4a"></audio>`
    document.getElementById("bass").playbackRate = 9
    document.getElementById("bass").volume = 0.25
    document.getElementById("bass").onended = () => {
        count++
        if (count < beat.length) {
            document.getElementById("bass").src = `Audio/${beat[count]}.m4a`
            document.getElementById("bass").playbackRate = 9
            document.getElementById("bass").play()
        }
    }
}

playBoth = () => {
    playTune()
    playBeat()
}
