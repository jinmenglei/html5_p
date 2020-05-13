function C_mode_check() {
    this.show = _mode_check_show;
    this.hide = _mode_check_hide;
    this.start = _start;
    let _start_timer = null;
    let _start_ed = false;

    let _check_index = 0;
    let _check_last_status = check_status_index.Check_status_idle;
    let _check_list_all = check_list_all;
    let _check_process_target = 0;
    let _current_process = 0;
    let _degree = 0;
    let _link_4G = true;
    let _link_ros = true;
    let _link_mcu = true;
    let _battery_count = 88;
    let _water_count = 88;
    let _release_stop = true;
    let _fault_status = true;
    let _origin_status = true;
    let _show_count = 0;

    function _start() {
        if (!_start_ed) {
            _start_ed = true;
            _check_list_all[check_seq_index.Check_4g][check_list_index.Check_content_function] = _check_4g;
            _check_list_all[check_seq_index.Check_ros][check_list_index.Check_content_function] = _check_ros;
            _check_list_all[check_seq_index.Check_mcu][check_list_index.Check_content_function] = _check_mcu;
            _check_list_all[check_seq_index.Check_battery][check_list_index.Check_content_function] = _check_battery;
            _check_list_all[check_seq_index.Check_water][check_list_index.Check_content_function] = _check_water;
            _check_list_all[check_seq_index.Check_release_stop][check_list_index.Check_content_function] = _check_release_stop;
            _check_list_all[check_seq_index.Check_fault][check_list_index.Check_content_function] = _check_fault;
            _check_list_all[check_seq_index.Check_origin][check_list_index.Check_content_function] = _check_origin;

        }
    }
    function _set_check_label_show(index, str_show) {
        // """显示提示内容"""
        $("#mode_check_total").text(_check_list_all[index][check_list_index.Check_title]);
        $("#mode_check_sub").text(_check_list_all[index][check_list_index.Check_content_subtitle]);
        $("#mode_check_result").text(str_show);
    }
    function _stop_timer() {
        clearInterval(_start_timer);
        _start_timer = null;
    }
    function _start_func() {
        let index = _check_index;

        if (index < _check_list_all.length) {
            if (_check_last_status === check_status_index.Check_status_idle) {
                _set_check_label_show(index, '检测中');
                _check_last_status = check_status_index.Check_status_checking;
            }else if(_check_last_status === check_status_index.Check_status_checking) {
                let check_status = _check_list_all[index][check_list_index.Check_content_function]();
                let str_show = _check_list_all[index][check_list_index.Check_content_result_info][check_status + 0];
                _set_check_label_show(index, str_show)
                if (!check_status) {
                    _check_last_status = check_status_index.Check_status_ng;
                } else {
                    _check_last_status = check_status_index.Check_status_pass;
                }
            }else if (_check_last_status === check_status_index.Check_status_ng) {
                _stop_timer();
                _check_index = 0;
                _check_last_status = check_status_index.Check_status_idle;
            }else if (_check_last_status === check_status_index.Check_status_pass) {
                _check_last_status = check_status_index.Check_status_idle;
                _check_index += 1
                if (index < _check_list_all.length - 1) {
                    _show_count = (index + 1) / _check_list_all.length * 100;
                } else {
                    _show_count = 100;
                }
                $("#mode_check_progress").css('width',_show_count + "%");
            }
        } else {
            if (_show_count === 100) {
                _stop_timer()
                _check_index = 0
                ins_ui_manager.mode_dispatcher(mode_index.Page_map_select)
            }
        }
    }
    function _mode_check_show() {
        _check_index = 0;
        _show_count = 0;
        _start_timer = setInterval(_start_func, 200);
        $(document.getElementById("mode_check")).show();
    }
    function _mode_check_hide() {
        _check_index = 0;
        _show_count = 0
        _stop_timer();
        $(document.getElementById("mode_check")).hide();
    }
    function _check_4g() {
        // """检测4G状态"""
        return _link_4G
    }

    function _check_ros() {
        return _link_ros
    }

    function _check_mcu() {
        return _link_mcu
    }

    function _check_battery() {
        return _battery_count >= 30;
    }

    function _check_water() {
        return _water_count >= 30;
    }

    function _check_release_stop() {
        return _release_stop
    }

    function _check_fault() {
        return _fault_status
    }

    function _check_origin() {
        return _origin_status
    }
}