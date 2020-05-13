function C_mode_mt() {
    this.show=_mode_mt_show;
    this.hide=_mode_mt_hide;
    this.start = _start;
    let _start_timer = null;
    let _start_ed = false;
    let _msg_list = [];
    let ins_showbox = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_show_box);
    let ins_ros_interface = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_ros_interface);

    function _start() {
        if (! _start_ed) {
            _start_ed = true;
            document.getElementById("mt_brush").addEventListener('click', _mode_mt_brush, false);
            document.getElementById("mt_water").addEventListener('click', _mode_mt_water, false);
            document.getElementById("mt_direction").addEventListener('click', _mode_mt_direction, false);
            _start_timer = setInterval(_start_func, 50);
        }
    }
    function _start_func() {
        if (_msg_list.length >0) {
            let send_msg= _msg_list.pop();
            _send_mt_ros_msg(send_msg[0],send_msg[1]);
        }
    }
    function _mode_mt_show() {
        $(document.getElementById("mode_mt")).show();
        $(document.getElementById("mt_brush")).attr("checked",false);
        $(document.getElementById("mt_water")).attr("checked",false);
        $(document.getElementById("mt_direction")).attr("checked",true);
        let send_msg = ["brush_req","close"];
        _msg_list.unshift(send_msg);
        _msg_list.unshift(send_msg);
        send_msg = ["water_req","close"];
        _msg_list.unshift(send_msg);
        _msg_list.unshift(send_msg);
        send_msg = ["direction_req","forward"];
        _msg_list.unshift(send_msg);
        _msg_list.unshift(send_msg);
    }
    function _mode_mt_hide() {
        $(document.getElementById("mode_mt")).hide();
    }
    function _send_mt_ros_msg(msg_id,msg_data) {
        let send_msg={
            msg_id: msg_id,
            msg_type: 'control',
            msg_data: msg_data
        }
        if (ins_ros_interface){
            if (ins_ros_interface.get_link_status()) {
                ins_ros_interface.send_ros_msg(send_msg);
            }else {
                if (ins_showbox){
                    ins_showbox.show(show_box_index.show_box_loss);
                }
            }
        }
    }
    function _mode_mt_brush() {
        if($(document.getElementById("mt_brush")).prop("checked")){
            // _send_mt_ros_msg("brush_req","open");
            let send_msg = ["brush_req","open"];
            _msg_list.unshift(send_msg);
        }else{
            // _send_mt_ros_msg("brush_req","close");
            let send_msg = ["brush_req","close"];
            _msg_list.unshift(send_msg);
        }
    }
    function _mode_mt_water() {
        if($(document.getElementById("mt_water")).prop("checked")){
            // _send_mt_ros_msg("water_req","open");
            let send_msg = ["water_req","open"];
            _msg_list.unshift(send_msg);
        }else{
            // _send_mt_ros_msg("water_req","close");
            let send_msg = ["water_req","close"];
            _msg_list.unshift(send_msg);
        }
    }
    function _mode_mt_direction() {
        if($(document.getElementById("mt_direction")).prop("checked")){
            // _send_mt_ros_msg("direction_req","forward");
            let send_msg = ["direction_req","forward"];
            _msg_list.unshift(send_msg);
        }else{
            // _send_mt_ros_msg("direction_req","back");
            let send_msg = ["direction_req","back"];
            _msg_list.unshift(send_msg);
        }
    }
}