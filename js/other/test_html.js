function button_change_click() {
    console.log("test button_change_click");

    if (document.getElementById("mode_select").selectedIndex === document.getElementById("mode_select").length -1 ) {
        if (document.getElementById("showbox_select").selectedIndex === document.getElementById("showbox_select").length -1 ) {
            mode_showbox_show(-1);
        }else {
            mode_showbox_show(showbox_string_index = document.getElementById("showbox_select").selectedIndex)
        }
    }else {
        mode_dispatcher(document.getElementById("mode_select").selectedIndex);
    }
}
