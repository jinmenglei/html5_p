const ins_ui_manager = new C_ui_manager();
window.onload = function () {
    // for test--------------
    document.getElementById("button_change").addEventListener('click',button_change_click,false);
    //-----------------------

    ins_ui_manager.start();
}
