console.log("-----------lotto-------------")
console.log("-----------lotto-------------")
console.log("-----------lotto-------------")

const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click", (event) => {
    console.log(event)

    const target = document.getElementById("resultDiv")

    // const balls = makeLottoNum()
    // const balls = randomNum(nums())
    const balls = getLotto()

    console.log('balls' + balls)

    // clear all <h3> tags
    target.innerHTML = ''

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }

}, false)

// function makeLottoNum() {
//
//     const numArr = []
//
//     while (true) {
//         // 숫자를 생성 1 - 45 사이의 숫자
//         num = parseInt((Math.random() * 45)) + 1
//
//         // 배열 안에 있는지 검사
//         const index = numArr.indexOf(num)
//
//         // 배열 안에 이미 있으면 다시 뽑기
//         if (index >= 0) {
//             continue
//         }
//
//         const newLength = numArr.push(num)
//
//         if (newLength === 6) {
//             break
//         }
//     }
//
//     // console.log(numArr)
//
//     // const numArr = [2, 13, 21, 32, 35, 40]
//
//     return numArr
// }

// //1. 1-45까지의 숫자를 배열에 집어넣는 함수
// function nums() {
//     const lottoArr = []
//     for (let i = 1; i <= 45; i++) {
//         lottoArr.push(i)
//     }
//     return lottoArr
// }
//
// //2. 숫자 6개뽑기
// function randomNum(lottoArr) {
//
//     const lottoResult = []
//
//     for (let i = 0; i < 6; i++) {
//
//         const index = parseInt(Math.random() * lottoArr.length)
//
//         lottoArr.splice(index, 1) // 당첨번호로 1번 뽑힌 숫자는 lottoArr 배열에서 제거
//         lottoResult.push(index) // 당첨번호롤 뽑힌 숫자를 로또당첨 lottoResult 배열에 넣기
//     }
//
//     return lottoResult
// }

// 1. 1 - 45까지의 숫자를 배열에 집어넣는 함수
function nums() {
    const lottoArr = []
    for (let i = 1; i <= 45; i++) {
        lottoArr.push(i)
    }
    return lottoArr
}

// 2. 숫자 6개 뽑기
function randomNum(lottoArr) {
    const lottoResult = []

    for (let i = 0; i < 6; i++) {

        const index = parseInt(Math.random() * lottoArr.length)

        lottoResult.push(lottoArr[index]) // lottoResult 배열에 요소 추가하기
        lottoArr.splice(index, 1) // 배열에서 요소 1개 제거
    }

    return lottoResult
}

function getLotto() {
    const result = randomNum(nums())
    return result
}

// console.log(getLotto())