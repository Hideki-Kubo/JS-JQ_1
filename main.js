function countUp() {
    ////////////////////////// 時刻の数字を取得して変数に代入 ////////////////////////
    let number_deciSeconds_str = document.getElementById("deciSeconds");
    let number_seconds_str = document.getElementById("seconds");
    let number_minutes_str = document.getElementById("minutes");
    let number_hours_str = document.getElementById("hours");
    number_deciSeconds = Number(number_deciSeconds_str.innerText);
    number_seconds = Number(number_seconds_str.innerText);
    number_minutes = Number(number_minutes_str.innerText);
    number_hours = Number(number_hours_str.innerText);

    //////////////////////////// タイマー処理 //////////////////////////////
    if (number_deciSeconds == 9) {              // 1/10秒が9までカウントしたら0に戻す。.9秒まで進んだら秒に1を足す
        number_deciSeconds = 0;
        if (number_seconds == 59) {             // 1秒を足す前に59秒までカウントしているか確認し、59秒まで進んでいれば0に戻し、分に1を足す
            number_seconds = 0;
            if (number_minutes == 59) {         // 分を足す前に59分までカウントしているか確認し、59分まで進んでいれば0にもどし、時間に1を足す
                number_minutes = 0;
                number_hours += 1;
            } else {
                number_minutes += 1;
            }
        } else {
            number_seconds += 1;
        }
    } else {
        number_deciSeconds += 1;
    }




    /////////////////////////// 変更した値をHTMLに返す ////////////////////////////
    number_deciSeconds_str.innerText = number_deciSeconds;
    number_seconds_str.innerText = number_seconds;
    number_minutes_str.innerText = number_minutes;
    number_hours_str.innerText = number_hours;
}

////////////////////// startボタンに紐づく関数 /////////////////////
function timerStart() {
    timer = setInterval("countUp()", 100);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("resetButton").disabled = false;
}
/////////////////////////////////////////////////////////////////

////////////////////// stop ボタンに紐づく関数 ////////////////////////
function timerStop() {
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
///////////////////////////////////////////////////////////////////


////////////////////// resetボタンに紐づく関数 /////////////////////////
function timerReset() {
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    document.getElementById("deciSeconds").innerText = "0";
}
//////////////////////////////////////////////////////////////////////
