let text = document.querySelector("textarea"),
    word = 0,
    chart = 0,
    lines = 0,
    space = 0,
    copyBtn = document.querySelector("#copy"),
    resetBtn = document.querySelector("#reset");

copyBtn.addEventListener("click", function () {
    text.select();
    document.execCommand("copy");
    copyBtn.innerHTML = "copied!";
});

text.addEventListener("keyup", count);

function count() {
    let v = text.value;
    chart = v.length;
    space = v.split(" ").length - 1;
    lines = v.split(/\r\n|\r|\n/).length;
    let t = v.replace(/\s+/g, " ").trim();
    let x = t.split(" ");
    let y = x.length;
    if (x[0] == "") {
        y = 0;
    }
    word = y;

    updateUI();
}

resetBtn.addEventListener("click", function () {
    copyBtn.innerHTML = "copy";
    text.value = "";
    word = 0;
    chart = 0;
    lines = 0;
    space = 0;

    updateUI();
});

function updateUI() {
    document.querySelector(".word").innerHTML = word;
    document.querySelector(".chart").innerHTML = chart;
    document.querySelector(".lines").innerHTML = lines;
    document.querySelector(".space").innerHTML = space;
}
