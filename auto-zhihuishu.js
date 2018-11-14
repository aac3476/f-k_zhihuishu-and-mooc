var tips = document.getElementsByClassName("exploreTip");
//创建新节点
var option = document.createElement("div");
//添加样式
option.style="color:DarkOrange;text-align:center;line-height:90px;font-size:30px;background-image: url(data:image/jpg;base64,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); background-repeat: no-repeat; background-size: 100%; width: 90px; height: 90px; border-radius: 45px;position:fixed;left:60px;top:200px; z-index:999;"
//添加点击事件
option.setAttribute("onClick","StartOrStop()");
option.setAttribute("id","rains");
option.innerText = "Rains";
//插入节点到页面
tips[0].parentNode.insertBefore(option,tips[0]);
//定时器
var timer;
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
    //判断播放进度是否大于83%
    if(parseInt(pass[0].style.width) > 83){
        //切换下一个视频
        document.getElementById("nextBtn").click();
    }
    console.log("执行第"+ number + "次");
}
function StartOrStop(){
    //获取播放状态
    var play  = document.getElementsByClassName("bigPlayButton pointer")[0];
    if (startstatus == 0){
        //开始脚本
        timer = setInterval(start, 3000);
        //已经暂停 点击开始按钮 
        if(play.style.display == "block"){
            play.click();
        }
        startstatus = 1;
        var rains = document.getElementById("rains");
        rains.innerText = "已开";
        rains.style.color = "blue";
    }else if (startstatus == 1) {
        //停止脚本
        clearInterval(timer);
        //已经播放 暂停播放
        if(play.style.display == "none"){
            play.click();
        }
        startstatus = 0;
        var rains = document.getElementById("rains");
        rains.innerText = "已关";
        rains.style.color = "red";
    }
}