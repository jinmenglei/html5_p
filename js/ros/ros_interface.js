function C_ros_interface() {
    this.start=_start;
    this.send_ros_msg=_send_msg_ros;
    this.get_link_status=_get_link_status;
    let _start_timer = null;
    let _start_ed = false;
    let ros = null;
    let callback_dict = {};
    let line_speed = 0;
    let time_last = 0;
    let _p_ui_ros_topic = null;
    let _ros_ready = false;
    let _ros_link = false;
    let _ros_link_cnt = 0;
    let ins_showbox = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_show_box);
    let ins_frame = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_frame);
    function _get_link_status() {
        return _ros_link;
    }

    function _start() {
        if (! _start_ed) {
            _start_ed = true;
            //init callback
            callback_dict['snap_req'] = snap_callback;
            callback_dict['send_info_req'] = send_info_req_callback;
            callback_dict['progress_notify'] = progress_callback;
            _start_timer = setInterval(_start_func, 1000);
            console.log("ros start")
            // Connecting to ROS
            ros = new ROSLIB.Ros({
                url: 'ws://127.0.0.1:9090'
            });
            //判断是否连接成功并输出相应的提示消息到web控制台
            ros.on('connection', function () {
                console.log('Connected to websocket server.');
                list_start_info[start_step.start_ros][start_result.start_status] = true;
                _ros_sub_pub();
            });
            ros.on('error', function (error) {
                console.log('Error connecting to websocket server: ', error);
                list_start_info[start_step.start_ros][start_result.start_status] = false
            });
            ros.on('close', function () {
                console.log('Connection to websocket server closed.');
            });


            console.log("ros_interface start success!");
        }else{
            console.log("ros_interface start frame started!");
        }
    }
    function _start_func() {
        let time_o = new Date();
        if (time_last !== 0) {
            if (time_o.getTime() - time_last >1000){
                if (_ros_link) {
                    _ros_link_cnt = 0;
                    _ros_link = false;
                    if (ins_showbox) {
                        ins_showbox.show(show_box_index.show_box_loss);
                    }
                }
            }
        }
    }

    function _ros_sub_pub() {
        let _l_ros_ui_topic = new ROSLIB.Topic({
            ros: ros,
            name: '/ros_ui_topic',
            messageType: 'std_msgs/String'
        });
        _l_ros_ui_topic.subscribe(_callback);
        let _l_ui_odom_topic = new ROSLIB.Topic({
            ros: ros,
            name: '/ui_odom_topic',
            messageType: 'std_msgs/Float64'
        });
        _l_ui_odom_topic.subscribe(_ui_odom_callback);
        let _l_amcl_pose_topic = new ROSLIB.Topic({
            ros: ros,
            name: '/amcl_pose',
            messageType: 'geometry_msgs/PoseWithCovarianceStamped'
        });
        _l_amcl_pose_topic.subscribe(_amcl_pose_callback);
        _p_ui_ros_topic = new ROSLIB.Topic({
            ros: ros,
            name: '/ui_ros_topic',
            messageType: 'std_msgs/String'
        });
        _ros_ready = true;
    }

    function _callback(message) {
        // console.log(message.data);
        let json_str=message.data;
        let json_object = JSON.parse(json_str);
        let msg_id = json_object["msg_id"];
        if (msg_id in callback_dict){
            callback_dict[msg_id](json_object["msg_data"]);
        }
    }
    function snap_callback(data){
        console.log("snap_callback do snap!");
    }
    function send_info_req_callback(data){
        if (!_ros_link){
            if ( _ros_link_cnt++ > 5) {
                _ros_link = true;
                if (ins_showbox) {
                    if (ins_showbox.get_show_index() === show_box_index.show_box_loss) {
                        ins_showbox.hide();
                    }
                }
                let ins_start_t = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_start);
                if (ins_start_t){
                    if (ins_start_t.get_starting_status()){
                        ins_start_t.update_start_launch(true);
                        ins_start_t.update_start_underpan(true);
                    }
                }
            }
        }
        if ("voltage_percent" in data){
            if (ins_frame){
                ins_frame.set_battery_value(data["voltage_percent"]);
            }
        }
        if ("yewei2_percent" in data){
            if (ins_frame){
                ins_frame.set_water_value(data["yewei2_percent"]);
            }
        }
        if ('Position_X' in data && 'Position_Y' in data) {
            line_speed = (data["Position_X"] + data["Position_Y"])/2;
        //    设置速度
        }

        let time_o = new Date();
        time_last = time_o.getTime();
    }
    function progress_callback(data){

    }
    function _ui_odom_callback(message) {
        // console.log(message.data);
        if (ins_frame){
            ins_frame.set_odom_value(message.data);
        }
    }
    function _amcl_pose_callback(message) {
    //    工作中显示坐标
    //     console.log(message.pose.pose.position.x);
        let x = message.pose.pose.position.x;
        let y = message.pose.pose.position.y;
        let z = message.pose.pose.position.z;
    }
    function _send_msg_ros(msg_data) {
        if (! _ros_ready){
            return;
        }
        let send_msg = new ROSLIB.Message({
            data:JSON.stringify(msg_data)
        });
        _p_ui_ros_topic.publish(send_msg)

    }
}

