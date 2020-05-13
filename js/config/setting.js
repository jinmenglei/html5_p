//模式配置
const mode_index = {
    Page_mt_mode: 0,
    Page_author: 1,
    Page_check: 2,
    Page_map_select: 3,
    Page_working: 4,
    Page_start: 5,
};
const ins_index = {
    Page_mt_mode: 0,
    Page_author: 1,
    Page_check: 2,
    Page_map_select: 3,
    Page_working: 4,
    Page_start: 5,
    Page_frame:6,
    Page_show_box:7,
    Page_ros_interface:8,
    Page_ui_manager:9
};
const mode_title_list = [
    '手动模式',
    '验证鉴权',
    '自检中',
    '地图选择',
    '工作中',
    '启动中',
    '升级中',
]
const mode_index_id = [
    "mode_mt",
    "mode_author",
    "mode_check",
    "mode_map_select",
    "mode_working",
    "mode_start"
]
// const ins_mode_index = {
//     0:null,
//     1:null,
//     2:null,
//     3:null,
//     4:null,
//     5:null
// }
//弹窗配置
const show_box_list_index = {
    show_box_tip:0,
    show_box_yes:1,
    show_box_no:2}
const show_box_index = {
    show_box_turn_mt:0,
    show_box_turn_at:1 ,
    show_box_map_select:2,
    show_box_work_cancel:3,
    show_box_loss:4,
    show_box_update:5,
    show_box_no_map:6,
    show_box_start_error:7,
    show_box_need_build_map:8,
    show_box_launch_fail:9
}

const list_show_box_string = [
    ['是否要切换为<br>手动驾驶模式', mode_index.Page_mt_mode, null],
    ['是否要切换为<br>自动驾驶模式', mode_index.Page_author, null],
    ['是否开始清扫?', mode_index.Page_working, null],
    ['是否要取消当前任务，<br>切换到手动驾驶？', mode_index.Page_mt_mode, null],
    ['失去底层连接<br>请联系售后', null, null],
    ['检测到新版本<br>是否升级', null, null],
    ['地图不存在或不可用<br>是否重新选择', mode_index.Page_map_select, mode_index.Page_mt_mode],
    ['启动出现异常<br>是否重新启动', null, null],
    ['未发现可用地图<br>切换到手动驾驶？', mode_index.Page_mt_mode, null],
    ['启动文件异常<br>点击‘是’，重新选择<br> 点击‘否’，切换到手动驾驶', null, mode_index.Page_mt_mode],
]
//启动界面配置
const start_result = {
    start_show_begin:0,
    start_show_success:1,
    start_show_fail:2,
    start_show_status:3,
    start_status:4
}
const start_step = {
    start_ui:0,
    start_ros:1,
    start_launch:2,
    start_xiaoyuan:3,
    start_status_cnt:4
}
const list_start_info = [
    ['正在启动界面程序', '界面程序启动已完成', '界面程序启动超时', false, false],
    ['正在启动主节点', '主节点启动已完成', '主节点启动失败', false, false],
    ['正在启动底盘程序', '底盘程序已启动', '底盘程序启动失败', false, false],
    ['与底盘通信中', '通信已完成', '与底盘失去连接', false, false],
]
//工作界面配置
const list_working_label_unit = ['%', 'm/s', 'm²/h']
const list_working_max_value = [100, 1.2, 2700]
const working_guage_index = {
    Working_gauge_progress:0,
    Working_gauge_speed:1,
    Working_gauge_efficiency:2
}
const working_point_index = {
    Working_point_x:0,
    Working_point_y:1,
    Working_point_z:2
}
const list_working_label_point = ['X:', 'Y:', 'Z:']
//自己建配置
const check_list_index = {
    Check_title:0,
    Check_content_subtitle:1,
    Check_content_function:2,
    Check_content_result_info:3
}
const Check_content_result_index = {
    Check_content_result_NG:0,
    Check_content_result_PASS:1
}
const check_seq_index = {
    Check_4g:0,
    Check_ros:1,
    Check_mcu:2,
    Check_battery:3,
    Check_water:4,
    Check_release_stop:5,
    Check_fault:6,
    Check_origin:7
}
const check_status_index = {
    Check_status_idle:0,
    Check_status_checking:1,
    Check_status_pass:2,
    Check_status_ng:3
}

const check_list_all = [
    ['连接检测', '4G', null, ['未连接', '已连接']],
    ['连接检测', 'ROS', null, ['未连接', '已连接']],
    ['连接检测', 'MCU', null, ['未连接', '已连接']],
    ['状态检测', '电量', null, ['电量不足', '电量充足']],
    ['状态检测', '水位', null, ['水量过低', '水量正常']],
    ['状态检测', '急停', null, ['未释放', '已释放']],
    ['状态检测', '故障检测', null, ['有故障', '无故障']],
    ['状态检测', '原点检测', null, ['不在原点', '在原点']]
]
//升级模块配置
const update_step_index = {
    Update_download:0,
    Update_md5:1,
    Update_unzip:2,
    Update_base:3,
    Update_move:4,
    Update_ui:5,
    Update_cnt:6
}
const update_status_index = {
    Update_status_idle:0,
    Update_status_checking:1,
    Update_status_pass:2,
    Update_status_ng:3
}
const update_list_index = {
    Update_title:0,
    Update_subtitle:1,
    Update_function:2,
    Update_result_status:3,
    Update_process:4
}
const Update_list_all = [
    ['下载升级包', '进度', null, update_status_index.Update_status_idle, 0],
    ['完整性校验', '状态', null, update_status_index.Update_status_idle, 0],
    ['解压升级包', '状态', null, update_status_index.Update_status_idle, 0],
    ['升级主控', '进度', null, update_status_index.Update_status_idle, 0],
    ['升级导航', '进度', null, update_status_index.Update_status_idle, 0],
    ['升级界面', '进度', null, update_status_index.Update_status_idle, 0],
]
// ui_manager
