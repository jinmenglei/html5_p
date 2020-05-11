function button_change_click() {
    console.log("test button_change_click");
    if (document.getElementById("mode_select").selectedIndex === document.getElementById("mode_select").length -1 )
    {
        $(document.getElementById("mode_showbox")).show();
    }else {
        mode_dispatcher(document.getElementById("mode_select").selectedIndex);
    }
}
