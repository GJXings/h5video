h5视频播放器详情

此demo没有借助框架，插件。基于H5和原生JS开发。 由于早期写的h5视频播放器，代码规范不是特别严格，显得有点low，后期请关注00思想版本的demo 动态加载播放列表 载入视频信息 改变片名 list_title.innerHTML = movie.name;

 改变片名路径
    player.src = movie.src;
}
功能模块、

播放,暂停，重播视频 上一 个 下一个 静音 最大音 视频消失当前文档，弹出小视频。 弹幕 通过滑块控制音量大小 通过滑块控制音乐进度 显示隐藏播放列表等功能

初始化

  载入播放列表
loadPlayList();
播放序号
var play_index=0;
初始音量
player.volume=0;
初始化显示播放列表
当flag为1的时候,表示列表显示(当前状态)
当flag为0的时候,表示列表隐藏(当前状态)
var flag=1;
