let html = document.querySelector("#html-text");
let style = document.querySelector("#styleText");

let originalString = `致亲爱的小小毛：
    宝宝，这是我和你的第一个520，也是我第一次和女孩子的520，真的很荣幸也很开心你能来到我的世界，带给我无限的欢乐和幸福。
    曾经无数次幻想过和心爱的人一起散步，牵手和拥抱，直到遇见你，我才能真真切切感受到甜蜜和幸福，你是我生命中最最特殊的人，我很珍视也很享受和你在一起的每时每刻，而且我也坚信，我们还会拥有更多更美好更幸福的时光。
    你说我像一只护食的小狗，那我就送你一只可爱的小狗替我陪你，现在，每当你看到他时，我就在你身边！
    希望我们年年有今日，一直一直坚定不移地陪伴在彼此的左右，永远开心，永远幸福。
                                                         爱你的小小东`;

let showString = "";
let styleString = "";
let tempString = "";

let writeIntoStyle = false;

let n = 0;
let step = () => {
    html.innerHTML = showString;
    style.innerHTML = styleString;
    setTimeout(() => {
        // 删去无用字符
        if (originalString[n] === "\n") {
            showString += "<br>";
        } else if (originalString[n] === " ") {
            showString += "&nbsp;";
        } else {
            showString += originalString[n];
        }

        // 判断何时输入到style中
        if (originalString[n] === "#" || originalString[n] === '.') {
            writeIntoStyle = true;
        } else if (originalString[n] === "}") {
            writeIntoStyle = false
            tempString += "}\n"
            styleString += tempString;
            console.log(tempString)
        }
        if (writeIntoStyle === true) {
            tempString += originalString[n];
        }

        // 没病滚一下
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        // 判断到没到头
        if (n < originalString.length) {
            n += 1;
            step();
        }
    }, 1)

}

step();
