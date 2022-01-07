
window.onload = function(){
    let arr =  document.getElementsByClassName("🕓");
    for (var i in arr) {
        let xxxx = arr[i].innerText

        let rr = xxxx.split(':')[0]
        let time1 = new Number(rr)
        time1 += 8
        if (time1 > 24) {
            time1 -= 24
        }
        let timeStr = time1 < 10 ? "0"+time1:time1
        arr[i].innerText = timeStr+":"+xxxx.split(':')[1]
        
        
    }
}
var count = 0
window.onscroll = function(){
    let arr = document.querySelectorAll(".🕓")
    // if (arr.length > count){
    //     count = arr.length
        for (var i in arr) {
            let ss = arr[i].querySelectorAll(".🔤")
            if (ss.length > 0) {
                let xxxx = arr[i].innerText
        
                let rr = xxxx.split(':')[0]
                let time1 = new Number(rr)
                time1 += 8
                if (time1 > 24) {
                    time1 -= 24
                }
                let timeStr = time1 < 10 ? "0"+time1:time1
                arr[i].innerText = timeStr+":"+xxxx.split(':')[1]
            }
            
            
            
        }
    // }
    
}
