/**
 * Created by admin on 2017/1/27.
 */
"use strict"

// 获取系统日期和时间信息
function get_date() {
    var date_str = Date();
    console.log(date_str);
    alert(date_str);
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "" ) {
        alert("Please input name");
        return false;
    }
}

function testModifyImg() {
    document.getElementById("image").src  = "img/landscape.gif";
}

function testChangeCSS() {
    document.getElementById("p2").style.color = "blue";
    document.getElementById("p2").style.fontFamily = "Arial";
    document.getElementById("p2").style.fontSize = "larger";
}

function testJSInIJ() {
    console.log("testJavaScriptInIntelliJ");
}