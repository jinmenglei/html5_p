function C_ui_manager() {
    this.start = _start;
    let _start_ed = false;
    this.is_started=_is_started;
    const _ins_dict_mode_index = {};
    this.mode_dispatcher =_mode_dispatcher;
    this.get_ins_from_ui_manager=_get_ins_from_ui_manager;

    function _is_started() {
        return _start_ed;
    }

    function _start() {
        if (!_start_ed) {
            _start_ed = true;
            const ins_show_box = new C_mode_showbox();
            _ins_dict_mode_index[ins_index.Page_show_box] = ins_show_box;
            ins_show_box.start();

            const ins_frame = new C_mode_frame();
            _ins_dict_mode_index[ins_index.Page_frame] = ins_frame;
            ins_frame.start();

            const ins_ros_interface = new C_ros_interface();
            _ins_dict_mode_index[ins_index.Page_ros_interface] = ins_ros_interface;
            ins_ros_interface.start();

            const ins_mode_start = new C_mode_start();
            _ins_dict_mode_index[ins_index.Page_start] = ins_mode_start;
            ins_mode_start.start();

            const ins_mode_mt = new C_mode_mt();
            _ins_dict_mode_index[ins_index.Page_mt_mode] = ins_mode_mt;
            ins_mode_mt.start();

            const ins_mode_author = new C_mode_author();
            _ins_dict_mode_index[ins_index.Page_author] = ins_mode_author;
            ins_mode_author.start();

            const ins_mode_check = new C_mode_check();
            _ins_dict_mode_index[ins_index.Page_check] = ins_mode_check;
            ins_mode_check.start();

            const ins_mode_map_select = new C_mode_map_select();
            _ins_dict_mode_index[ins_index.Page_map_select] = ins_mode_map_select;
            ins_mode_map_select.start();
        }
    }

    function _get_ins_from_ui_manager(index) {
        if (0 <= index <= ins_index.Page_ui_manager){
            return _ins_dict_mode_index[index];
        }
        return null;
    }

    function _mode_dispatcher(mode) {
        if (!_start_ed){
            console.log("_mode_dispatcher not started" + mode)
            return
        }
        console.log("_mode_dispatcher " + mode)
        for (var index = 0; index < mode_index_id.length; index++) {
            $(document.getElementById('' + mode_index_id[index])).hide();
        }
        if (mode === mode_index.Page_mt_mode) {
            $(document.getElementById("mode_button")).text("切换到 自动驾驶");
        } else {
            $(document.getElementById("mode_button")).text("切换到 手动驾驶");
        }
        // $(document.getElementById(''+ mode_index_id[mode])).show();
        _ins_dict_mode_index[mode].show();
        document.getElementById("mode").innerHTML = mode_title_list[mode];
    }
}