function C_mode_start() {
    this.start = _start;
    this.update_start_launch=_update_start_launch;
    this.update_start_underpan=_update_start_underpan;
    this.get_starting_status=_get_starting_status
    let _start_timer = null;
    let _start_ed = false;
    let _start_index = 0;
    let _tmp_list = [];
    let _timeout_cnt = 0;
    let _status_cnt = 0;
    let _list_start_info = list_start_info;
    let _is_starting = true;
    let ins_showbox = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_show_box);

    function _get_starting_status() {
        return _is_starting;
    }

    function _update_start_launch(status) {
        _list_start_info[start_step.start_launch][start_result.start_status] = status;
    }
    function _update_start_underpan(status) {
        _list_start_info[start_step.start_xiaoyuan][start_result.start_status] = status;
    }

    function _start() {
        if (! _start_ed) {
            _start_ed = true;
            _start_timer = setInterval(_start_func, 1000);
            _list_start_info[start_step.start_ui][start_result.start_status] = true;
            console.log("mode_start start success!");
        }else{
            console.log("mode_start start frame started!");
        }
    }
    function _start_func() {
        let str_show = ''

        if (_start_index >= start_step.start_status_cnt) {
            _is_starting = false;
            ins_ui_manager.mode_dispatcher(mode_index.Page_mt_mode);
            clearInterval(_start_timer);
        } else {
            _tmp_list = _list_start_info[_start_index]
        }
        if (!_tmp_list[start_result.start_show_status]) {
            str_show = _tmp_list[start_result.start_show_begin]
            _tmp_list[start_result.start_show_status] = true
            _timeout_cnt = 0
            _status_cnt = 0
        } else if (!_tmp_list[start_result.start_status]) {
            _timeout_cnt += 1
            str_show = _tmp_list[start_result.start_show_begin]
            if (_timeout_cnt >= 120) {
                _timeout_cnt = 0
                let str_show_fail = _tmp_list[start_result.start_show_fail]
                ins_showbox.show(show_box_index.show_box_start_error, str_show_fail)
            }
        } else if (_tmp_list[start_result.start_status]) {
            str_show = _tmp_list[start_result.start_show_success]
            _start_index += 1
            _status_cnt = 0
        }
        console.log(str_show)

        for (let index = 0; index < _status_cnt; index++) {
            str_show = str_show + '·'
        }
        document.getElementById("start_tip").innerHTML = str_show
        _status_cnt += 1
        if (_status_cnt >= 4) {
            _status_cnt = 0
        }
    }
}