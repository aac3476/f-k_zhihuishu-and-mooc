var tips = document.getElementsByClassName("exploreTip");
//创建新节点
//定时器
var timer;
timer = setInterval(start, 10000);
//初始状态
var startstatus = 0;
//次数
var number = 0;
//函数
function start(){
    if(number % 200 == 0){
          console.clear();
    }
    number += 1;
    //获取进度条
    var pass = document.getElementsByClassName("passTime");
    //获取答题框状态
    var dialog = document.getElementsByClassName("wrap_popboxes  wrap_popchapter")[0];
    //点击关闭按钮关闭答题框
    if(dialog != undefined){
       document.getElementsByClassName("popbtn_cancel")[0].click();
    }
    //判断播放进度是否大于100%（其实不用设置成100，到85就自动完成了这个视频，但是怕观看进度被检测，发现观看进度一致被当作弊，不怕的可以自行改85，或setTimeout）
    if(parseInt(pass[0].style.width) >= 100){
        //切换下一个视频
        document.getElementById("nextBtn").click();
    }
    console.log("执行第"+ number + "次");
}

