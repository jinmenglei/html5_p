function C_mode_frame() {
    this.start=_start;
    this.set_water_value=_set_water_value;
    this.set_battery_value=_set_battery_value;
    this.set_odom_value=_set_odom_value;
    let _start_timer = null;
    let _start_ed = false;
    let battery_percent = 50;
    let water_percent = 50;
    let odom_count = 124444.3456;
    let ins_showbox = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_show_box);

    function _start() {
        if (! _start_ed) {
            _start_ed = true;
            _start_timer = setInterval(_start_func, 1000*10);
            document.getElementById("mode_button").addEventListener('click', mode_button_click, false);
            console.log("mode_frame start success!");
        }else{
            console.log("mode_frame start frame started!");
        }
    }
    function _start_func() {
        set_battery(battery_percent);
        set_water(water_percent);
        set_odom(odom_count);
    }

    function mode_button_click() {
        console.log("mode_button_click was clicked");
        // ins_ros_interface.send_ros_msg({abc:1});
        if ($(document.getElementById("mode_button")).text() === "切换到 自动驾驶") {
            ins_showbox.show(show_box_index.show_box_turn_at);
        } else {
            ins_showbox.show(show_box_index.show_box_turn_mt);
        }
    }

    function set_battery(percent) {
        document.getElementById("battery").innerHTML=percent + "%";
        let battery = Math.floor((100 - percent) / 20) + 1;
        let url = "img/frame/b" + battery + ".png";
        document.getElementById("battery_img").src = url;
    }
    function _set_water_value(value) {
        water_percent = value;
    }
    function _set_battery_value(value) {
        battery_percent = value;
    }
    function _set_odom_value(value) {
        odom_count = value;
    }
    function set_water(percent) {
        document.getElementById("water_percent").innerHTML=percent + "%";
    }
    function set_odom(count) {
        if (count > 1000) {
            document.getElementById("odom_sum").innerHTML=Math.floor(count) + "km";
        }else{
            document.getElementById("odom_sum").innerHTML=count.toFixed(2) + "km";
        }
    }
}