const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');


let init = 0

const botSay = (data) => {
    return [
        "Haloo, aku sansBot, kamu siapa?",
        `salam kenal ${data?.nama}, kamu usia berapa?`,
        `ohh ${data?.umur}, Hobbi kamu apa?`,
        `wiihh sama dong ,aku juga suka ${data?.hobi},BTW punya pacar gak?`,
        `ohh ${data?.pacar}, yaudah ath ,, dadah`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ umur: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })      
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [800])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank U ${usersData[0]} udah mau di tanya tanya ya, kapan kapan kita ${usersData[2]} bareng ya!`,
    jawaban.value = "ok siap"
}

function botEnd() {
 window.location.reload()
 jawaban.value = ""
}