function C_mode_start() {
    this.start = _start;
    let _start_timer = null;
    let _start_ed = false;
    let _start_index = 0;
    let _tmp_list = [];
    let _timeout_cnt = 0;
    let _status_cnt = 0;
    let _list_start_info = list_start_info;

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
            // self.mode_dispatcher(Page_mt_mode);
            $(document.getElementById("mode_start")).hide();
            $(document.getElementById("mode_mt")).show();
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