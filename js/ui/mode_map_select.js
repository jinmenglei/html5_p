function C_mode_map_select() {
    this.show = _mode_map_select_show;
    this.hide = _mode_map_select_hide;
    this.start = _start;
    // let _start_timer = null;
    let _start_ed = false;

    function _start() {
        if (!_start_ed) {
            _start_ed = true;
        }
    }
    function _mode_map_select_show() {
        $(document.getElementById("mode_map_select")).show();
    }
    function _mode_map_select_hide() {

        $(document.getElementById("mode_map_select")).hide();
    }
}