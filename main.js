//Generate Pin .........................................
const pinGenerate = document.getElementById("pinGbtn");
pinGenerate.addEventListener("click", function () {
    const newPin = Math.floor(Math.random() * (2000 - 1001)) + 1001;
    document.getElementById("pinGnet").innerHTML = newPin;
});



// calculator .......................................
var result = document.querySelector(".result");
var btns = document.querySelector(".buttons");
var ops = document.querySelector(".operator");
var clearToggle = false;
var timeFlag = false;
var valStack = [];
btns.addEventListener("click", function (e) {
    var resultValue = result.innerHTML;
    var btn = e.target;

    if (btn.className.indexOf('resetBtn') > -1) {
        init();
    } else if (btn.className.indexOf("number") > -1) {
        if (clearToggle) {
            resultValue = "";
            clearToggle = false;
        }
        if (resultValue == '----') {
            resultValue = "";
        }
        result.innerHTML = resultValue + btn.innerHTML;
    } else {
        clearToggle = true;
    }
}, false);

// init function
function init() {
    clearToggle = false;
    timeFlag = false;
    valStack = [];
    result.innerHTML = "----";
}



// .......
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
    let pinMatch = document.getElementById("pinGnet").innerText;
    let submitResult = document.querySelector(".result").innerText;

    if (submitResult === pinMatch) {
        let success = document.getElementById("success");
        success.style.display = "block";

        let fail = document.getElementById("fail");
        fail.style.display = " none";
        document.getElementById("submitResult").value = "";
        document.getElementById("pinMatch").value = "";
    } else {
        let fail = document.getElementById("fail");
        fail.style.display = " block";
        let success = document.getElementById("success");
        success.style.display = "none";
        document.getElementById("submitResult").value = "";
        document.getElementById("pinMatch").value = "";

    }
})