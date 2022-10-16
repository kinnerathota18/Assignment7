

function displayMsg1() {
    "use strict";
    return window.alert("I have been clicked (STEP 1)");
}

window.onload = function () {
    "use strict";
    var btn = window.document.getElementById("btn");
    function displayMsg2() {
        return window.alert("I have been clicked (STEP 2)");
    }
    btn.onclick = displayMsg2;
};

function displayMsg3() {
    "use strict";
    return window.alert("I have been clicked (STEP 3)");
}

window.addEventListener("load", function () {
    "use strict";
    var btn1 = window.document.getElementById("btn1");
    btn1.addEventListener("click", displayMsg3);
});

window.addEventListener("load", function () {
    "use strict";
    var btn2 = window.document.getElementById("btn2");
    btn2.addEventListener("click", function () {
        return window.alert("I have been clicked (STEP 4)");
    });
});

