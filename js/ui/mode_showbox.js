function mode_showbox_show() {
    if (showbox_string_index === -1)
    {
        document.getElementById("showbox_tip").innerHTML="系统错误\n请联系管理员";
    }
}
function mode_showbox_hide() {
    showbox_string_index = -1;

}
function mode_shownox_yes() {
    if (showbox_string_index !== -1) {
        if (list_show_box_string[showbox_string_index][show_box_list_index.show_box_yes] !== null) {
            mode_dispatcher(list_show_box_string[showbox_string_index][show_box_list_index.show_box_yes]);
            console.log("chang to " + list_show_box_string[showbox_string_index][show_box_list_index.show_box_yes]);
        } else {
            console.log("mode_show_box click yes do nothing");
        }
    }else {
        console.log("mode_shownox_yes showbox_string_index is -1")
    }
}
function mode_shownox_no() {
    if (showbox_string_index !== -1) {
        if (list_show_box_string[showbox_string_index][show_box_list_index.show_box_no] !== null) {
            mode_dispatcher(list_show_box_string[showbox_string_index][show_box_list_index.show_box_no]);
            console.log("chang to " + list_show_box_string[showbox_string_index][show_box_list_index.show_box_no]);
        }else {
            console.log("mode_show_box click no do nothing");
        }
    } else {
        console.log("mode_shownox_no showbox_string_index is -1")
    }
}