function C_mode_showbox() {
    this.show=_mode_showbox_show;
    this.hide=_mode_showbox_hide;
    this.start = _start;
    this.get_show_index=_get_show_index;
    var _showbox_string_index = -1;
    let _start_ed = false;

    function _get_show_index() {
        return _showbox_string_index;
    }
    function _start() {
        if (! _start_ed) {
            _start_ed = true;
            document.getElementById("showbox_yes").addEventListener('click',_mode_showbox_yes,false);
            document.getElementById("showbox_no").addEventListener('click', _mode_showbox_no,false);
        }
    }

    function _mode_showbox_show(index=-1,tip='') {
        if (index === -1) {
            document.getElementById("showbox_tip").innerHTML="系统错误 <br> 请联系管理员";
        }else{
            let str_show = list_show_box_string[index][show_box_list_index.show_box_tip];
            document.getElementById("showbox_tip_add").innerHTML = tip;
            document.getElementById("showbox_tip").innerHTML = str_show;
        }
        _showbox_string_index = index;
        $(document.getElementById("mode_showbox")).show();
    }
    function _mode_showbox_hide() {
        _showbox_string_index = -1;
        $(document.getElementById("mode_showbox")).hide();

    }
    function _mode_showbox_yes() {
        if (_showbox_string_index !== -1) {
            if (list_show_box_string[_showbox_string_index][show_box_list_index.show_box_yes] !== null) {
                ins_ui_manager.mode_dispatcher(list_show_box_string[_showbox_string_index][show_box_list_index.show_box_yes]);
                console.log("chang to " + list_show_box_string[_showbox_string_index][show_box_list_index.show_box_yes]);
            } else {
                console.log("mode_showbox_yes click yes do nothing");
            }
            _mode_showbox_hide();
        }else {
            console.log("mode_showbox_yes showbox_string_index is -1")
        }
    }
    function _mode_showbox_no() {
        if (_showbox_string_index !== -1) {
            if (list_show_box_string[_showbox_string_index][show_box_list_index.show_box_no] !== null) {
                ins_ui_manager.mode_dispatcher(list_show_box_string[_showbox_string_index][show_box_list_index.show_box_no]);
                console.log("chang to " + list_show_box_string[_showbox_string_index][show_box_list_index.show_box_no]);
            }else {
                console.log("mode_showbox_no click no do nothing");
            }
            _mode_showbox_hide();
        } else {
            console.log("mode_showbox_no mode_showbox_no is -1")
        }
    }
}