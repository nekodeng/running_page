// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoieWlob25nMDYxOCIsImEiOiJja2J3M28xbG4wYzl0MzJxZm0ya2Fua2p2In0.PNKfkeQwYuyGOTT_x9BJ4Q';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
  '成都市'
];

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) =>
  `我用 Keep App 记录自己跑步 ${yearLength} 年了，下面列表展示的是 ${year} 的数据。至于为什么数据这么少，因为自己经常用的是 Keep 的健身记录功能，有时候跑步会忘记记录...一起运动啊，当然也欢迎大家关注我的 Keep 账号：番茄鱼啊`;
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `Running Journey with ${yearLength} Years, the table shows year ${year} data`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST = "跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多";
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = "总归要跑起来，不要停下奔跑的脚步，那便是极好的...";

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '清晨跑步' : 'Morning Run';
const LUNCH_RUN_TITLE = IS_CHINESE ? '上午跑步' : 'Lunch Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '午后跑步' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '傍晚跑步' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '夜晚跑步' : 'Night Run';

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  LUNCH_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  IS_CHINESE,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
};

export const AVATAR =
  'https://nekodeng.gitee.io/medias/avatar.jpg'; // Temp avatar
export const NAVS = [
  { text: '我的博客', link: 'https://nekodeng.gitee.io' },
  { text: '在Keep关注我', link: 'https://show.gotokeep.com/users/59b68beae666867ee0141708?utm_source=wechat&utm_medium=web&utm_campaign=client_share&utm_term=59b68beae666867ee0141708&utm_content=users&_uid=59b68beae666867ee0141708' },
];

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
