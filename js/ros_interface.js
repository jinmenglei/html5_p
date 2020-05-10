// import * as ROSLIB from "./roslib.min";
var start_result = {
    start_show_begin:0,
    start_show_success:1,
    start_show_fail:2,
    start_show_status:3,
    start_status:4
}
var start_step = {
    start_ui:0,
    start_ros:1,
    start_launch:2,
    start_xiaoyuan:3,
    start_status_cnt:4
}
var list_start_info = [
    ['正在启动界面程序', '界面程序启动已完成', '界面程序启动超时', false, false],
    ['正在启动主节点', '主节点启动已完成', '主节点启动失败', false, false],
    ['正在启动底盘程序', '底盘程序已启动', '底盘程序启动失败', false, false],
    ['与底盘通信中', '通信已完成', '与底盘失去连接', false, false],
]
var start_timer=setInterval("start_func()", 1000);
var start_index=0;
var tmp_list = [];
var timeout_cnt = 0;
var status_cnt = 0;
function start_func() {
    var str_show = ''

    if (start_index >= start_step.start_status_cnt) {
        // self.mode_dispatcher(Page_mt_mode);
        document.getElementById("mode_start").style.display = "node";
        document.getElementById("mode_mt").style.display = "block";
        clearInterval(start_timer);
    }
    else{
        tmp_list = list_start_info[start_index]
    }
    if (!tmp_list[start_result.start_show_status]){
        str_show = tmp_list[start_result.start_show_begin]
        tmp_list[start_result.start_show_status] = true
        timeout_cnt = 0
        status_cnt = 0
    }
    else if (!tmp_list[start_result.start_status]) {
        timeout_cnt += 1
        str_show = tmp_list[start_result.start_show_begin]
        if (timeout_cnt >= 120) {
            timeout_cnt = 0
            // show_box(show_box_start_error, '')
            // str_show = tmp_list[start_show_fail]
        }
    }
    else if (tmp_list[start_result.start_status]) {
        str_show = tmp_list[start_result.start_show_success]
        start_index += 1
        status_cnt = 0
    }
    console.log(str_show)

    for (var index=0; index < status_cnt;index++) {
        str_show = str_show + '·'
    }
    document.getElementById("start_tip").innerHTML = str_show
    status_cnt += 1
    if (status_cnt >= 4) {
        status_cnt = 0
    }
}
list_start_info[start_step.start_ui][start_result.start_status]=true
console.log("ros start")
// Connecting to ROS
var ros = new ROSLIB.Ros({
    url : 'ws://127.0.0.1:9090'
});
//判断是否连接成功并输出相应的提示消息到web控制台
ros.on('connection', function() {
    console.log('Connected to websocket server.');
});
ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});
ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});

list_start_info[start_step.start_ros][start_result.start_status]=true
