function button_change_click() {
    console.log("test button_change_click");
    let ins_showbox = ins_ui_manager.get_ins_from_ui_manager(ins_index.Page_show_box);
    if (document.getElementById("mode_select").selectedIndex === document.getElementById("mode_select").length -1 ) {
        if (document.getElementById("showbox_select").selectedIndex === document.getElementById("showbox_select").length -1 ) {
            ins_showbox.show(-1);
        }else {
            ins_showbox.show(showbox_string_index = document.getElementById("showbox_select").selectedIndex)
        }
    }else {
        ins_ui_manager.mode_dispatcher(document.getElementById("mode_select").selectedIndex);
    }
}
