function C_mode_working() {
    this.show = _mode_working_show;
    this.hide = _mode_working_hide;
    this.start = _start;
    // let _start_timer = null;
    let _start_ed = false;

    function _start() {
        if (!_start_ed) {
            _start_ed = true;
        }
    }
    function _mode_working_show() {
        $(document.getElementById("mode_working")).show();
    }
    function _mode_working_hide() {

        $(document.getElementById("mode_working")).hide();
    }
}