function C_mode_showbox() {
    this.show=mode_showbox_show;
    this.start = _start;
    var _showbox_string_index = -1;
    function _start() {
        document.getElementById("showbox_yes").addEventListener('click',mode_showbox_yes,false);
        document.getElementById("showbox_no").addEventListener('click', mode_showbox_no,false);
    }

    function mode_showbox_show(index,tip='') {
        if (index === -1) {
            document.getElementById("showbox_tip").innerHTML="系统错误 <br> 请联系管理员";
        }else{
            let str_show = list_show_box_string[index][show_box_list_index.show_box_tip];
            if (tip !== ''){
                document.getElementById("showbox_tip_add").innerHTML = tip;
            }

            document.getElementById("showbox_tip").innerHTML = str_show;
        }
        _showbox_string_index = index;
        $(document.getElementById("mode_showbox")).show();
    }
    function mode_showbox_hide() {
        _showbox_string_index = -1;
        $(document.getElementById("mode_showbox")).hide();

    }
    function mode_showbox_yes() {
        if (_showbox_string_index !== -1) {
            if (list_show_box_string[_showbox_string_index][show_box_list_index.show_box_yes] !== null) {
                mode_dispatcher(list_show_box_string[_showbox_string_index][show_box_list_index.show_box_yes]);
                console.log("chang to " + list_show_box_string[_showbox_string_index][show_box_list_index.show_box_yes]);
            } else {
                console.log("mode_showbox_yes click yes do nothing");
            }
            mode_showbox_hide();
        }else {
            console.log("mode_showbox_yes showbox_string_index is -1")
        }
    }
    function mode_showbox_no() {
        if (_showbox_string_index !== -1) {
            if (list_show_box_string[_showbox_string_index][show_box_list_index.show_box_no] !== null) {
                mode_dispatcher(list_show_box_string[_showbox_string_index][show_box_list_index.show_box_no]);
                console.log("chang to " + list_show_box_string[_showbox_string_index][show_box_list_index.show_box_no]);
            }else {
                console.log("mode_showbox_no click no do nothing");
            }
            mode_showbox_hide();
        } else {
            console.log("mode_showbox_no mode_showbox_no is -1")
        }
    }
}