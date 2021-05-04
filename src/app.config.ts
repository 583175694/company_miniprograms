export default {
  pages: [
    "pages/index/index",
    "pages/template/index",
    "pages/my/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
  },
  tabBar: {
    custom: true,
    color: "rgba(68, 68, 68, 1)",
    selectedColor: "rgba(68, 68, 68, 1)",
    backgroundColor: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tab_home_select.png",
        selectedIconPath: "./assets/tab_home_select.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./assets/tab_me_normal.png",
        selectedIconPath: "./assets/tab_me_normal.png",
      },
    ],
  },
};
