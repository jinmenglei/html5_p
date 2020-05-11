console.log("ros start")
// Connecting to ROS
var ros = new ROSLIB.Ros({
    url : 'ws://127.0.0.1:9090'
});
//判断是否连接成功并输出相应的提示消息到web控制台
ros.on('connection', function() {
    console.log('Connected to websocket server.');
    list_start_info[start_step.start_ros][start_result.start_status]=true
});
ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
    list_start_info[start_step.start_ros][start_result.start_status]=false
});
ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});

