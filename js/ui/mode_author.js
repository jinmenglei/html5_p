function C_mode_author() {
    this.show = _mode_author_show;
    this.hide = _mode_author_hide;
    this.start = _start;
    let _start_timer = null;
    let _start_ed = false;
    let _password = "";
    let _password_correct = "889972";
    let _error_show_cnt = 0;
    let _timer_error_show = null;

    function _start() {
        if (!_start_ed) {
            _start_ed = true;
            _start_timer = setInterval(_start_func, 1000);
            $('body').on('click',".author_button",_button_click);
        }
    }
    function _timer_error_show_ui() {
        _error_show_cnt += 1
        let move_px = 30;
        if (_error_show_cnt >= 9) {
            clearInterval(_timer_error_show);
            _timer_error_show = null;
           $("#author_tip").text('请扫描二维码或 输入管理员密码');
            _error_show_cnt = 0
            _password ="";
            _set_radio();
        }
        else {
            if (_error_show_cnt % 2 === 0) {
                move_px = 30
            }
            else {
                move_px = -30
            }

            for (let index =1; index <= 6;index++) {
                let radio_id = `#author_radio_${index}`;
                let left_px = $(radio_id).offset().left;
                left_px += move_px;
                $(radio_id).css('left',left_px+"px");
            }
        }
    }

    function _button_click() {
        if (_timer_error_show != null) {
            console.log("ui show cant input!");
            return
        }
        let value = $(this).attr('id')[14];
        console.log(value);
        if (value ==='b') {
            console.log("get back button!")
            if (_password.length>0) {
                _password=_password.substr(0,_password.length-1);
            }
            _set_radio();
        }else if (value === 'd'){
            console.log("get del button");
            _password = "";
            _set_radio();
        }else {
            console.log("get number :" + value);
            _password += value;
            _set_radio();
            if (_password.length >= 6) {
                if (_password === _password_correct) {
                    _password="";
                    _set_radio();
                    console.log("password correct! change to mode_check");
                    ins_ui_manager.mode_dispatcher(mode_index.Page_check);
                }else{
                    $("#author_tip").text("密码错误，请重新输入");
                    _timer_error_show = setInterval(_timer_error_show_ui, 100);
                }

            }
        }

    }
    function _set_radio() {
        for (let index = 1; index<=6; index++){
            let radio_id = "#author_radio_" + index;
            let radio_black = "#author_radio_black_" + index;
            if (index <= _password.length){
                $(radio_black).show();
                $(radio_id).css("border","2px solid rgba(51, 51, 51, 1)")
            }else {
                $(radio_black).hide();
                $(radio_id).css("border","2px solid rgba(119, 119, 119, 1)")
            }
        }
    }
    function _start_func() {
    }
    function _mode_author_show() {
        _password="";
        _set_radio();
        $("#author_tip").text("请扫描二维码或 输入管理员密码");
        $(document.getElementById("mode_author")).show();
    }
    function _mode_author_hide() {
        $(document.getElementById("mode_author")).hide();
    }
}