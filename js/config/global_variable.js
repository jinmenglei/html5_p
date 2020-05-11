//存放全局变量
//mode_start
let start_index = 0;
let tmp_list = [];
let timeout_cnt = 0;
let status_cnt = 0;
const list_start_info = [
    ['正在启动界面程序', '界面程序启动已完成', '界面程序启动超时', false, false],
    ['正在启动主节点', '主节点启动已完成', '主节点启动失败', false, false],
    ['正在启动底盘程序', '底盘程序已启动', '底盘程序启动失败', false, false],
    ['与底盘通信中', '通信已完成', '与底盘失去连接', false, false],
]
//mode_showbox
let showbox_string_index = -1;