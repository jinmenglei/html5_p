function start_func() {
    var str_show = ''

    if (start_index >= start_step.start_status_cnt) {
        // self.mode_dispatcher(Page_mt_mode);
        $(document.getElementById("mode_start")).hide();
        $(document.getElementById("mode_mt")).show();
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