// 1 API butuh 2 action - untuk trigger button dan untuk eksekusi api
// loading for only when hitting button
export const SET_LOADING = "SET_LOADING"; // FOR BUTTON TRIGGER
export const SET_LOADING_ = "SET_LOADING_"; // FOR AFTER RENDER TRIGGER
// loading for only when hitting button

// loading for only when hitting button
export const SET_DATA = "SET_DATA"; // FOR BUTTON TRIGGER
export const HIT_DATA = "HIT_DATA"; // FOR AFTER RENDER TRIGGER
export const SET_DATA2 = "SET_DATA2"; // FOR BUTTON TRIGGER
export const HIT_DATA2 = "HIT_DATA2"; // FOR AFTER RENDER TRIGGER
export const HIT_REORDER_LIST = "HIT_REORDER_LIST"; // FOR AFTER RENDER TRIGGER
export const SET_REORDER_TASK = "SET_REORDER_TASK"; // FOR AFTER RENDER TRIGGER
export const HIT_CARD_UPDATE = "HIT_CARD_UPDATE"; // FOR AFTER RENDER TRIGGER
export const SET_CARD_UPDATE = "SET_CARD_UPDATE"; // FOR AFTER RENDER TRIGGER
export const HIT_REORDER_CARD = "HIT_REORDER_CARD"; // FOR AFTER RENDER TRIGGER
export const SET_REORDER_CARD = "SET_REORDER_CARD"; // FOR AFTER RENDER TRIGGER
export const HIT_DELETECARD = "HIT_DELETECARD";
export const DEL_DELETECARD = "DEL_DELETECARD";
export const HIT_UPDATECARD = "HIT_UPDATECARD";
export const PUT_UPDATECARD = "PUT_UPDATECARD";
export const HIT_ATTACHFILE = "HIT_ATTACHFILE";
export const PUT_ATTACHFILE = "PUT_ATTACHFILE";

export const HIT_ASSIGNTASK = "HIT_ASSIGNTASK";
export const PUT_ASSIGNTASK = "PUT_ASSIGNTASK";
export const HIT_REVOKETASK = "HIT_REVOKETASK";
export const PUT_REVOKETASK = "PUT_REVOKETASK";

export const PUT_REORDER_CARD = "PUT_REORDER_CARD";
export const PUT_UPDATELIST = "PUT_UPDATELIST";
export const HIT_UPDATELIST = "HIT_UPDATELIST";
export const PUT_DELETELIST = "PUT_DELETELIST";
export const HIT_DELETELIST = "HIT_DELETELIST";
export const POST_ADDLIST = "POST_ADDLIST";
export const HIT_ADDLIST = "HIT_ADDLIST";
// loading for only when hitting button

// authentication
export const POST_SIGNIN = "POST_SIGNIN"; // untuk reducers, specific case
export const HIT_SIGNIN = "HIT_SIGNIN"; //trigger hit bisa berupa button atau ditaruh di useeffect
export const GET_VERIFY = "GET_VERIFY";
export const HIT_VERIFY = "HIT_VERIFY";
export const HIT_SIGNOUT = "HIT_SIGNOUT";
export const POST_SIGNOUT = "POST_SIGNOUT";
export const POST_SIGNUP = "POST_SIGNUP"; // hit ke api
export const HIT_SIGNUP = "HIT_SIGNUP"; // trigger button
export const HIT_GOOGLE = "HIT_GOOGLE";
// authentication

// project
export const HIT_GETUSER = "HIT_GETUSER";
export const GET_USER = "GET_USER";
export const HIT_UPDATEUSER = "HIT_UPDATEUSER";
export const PUT_UPDATEUSER = "PUT_UPDATEUSER";
export const HIT_CREATEPROJECT = "HIT_CREATEPROJECT";
export const POST_CREATEPROJECT = "POST_CREATEPROJECT";
export const HIT_EDITPROJECT = "HIT_EDITPROJECT";
export const POST_EDITPROJECT = "POST_EDITPROJECT";
export const HIT_GETPROJECT = "HIT_GETPROJECT";
export const GET_PROJECT = "GET_PROJECT";
export const HIT_DELETEPROJECT = "HIT_DELETEPROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const HIT_VIEWPROJECT = "HIT_VIEWPROJECT";
export const VIEW_PROJECT = "VIEW_PROJECT";
export const HIT_GETNEWSFEED = "HIT_GETNEWSFEED";
export const GET_NEWSFEED = "GET_NEWSFEED";
// project

//detail project atau task
export const HIT_DETAILPROJECT = "HIT_DETAILPROJECT";
export const HIT_DETAILPROJECT2 = "HIT_DETAILPROJECT2";
export const GET_DETAILPROJECT = "GET_DETAILPROJECT";
export const HIT_CREATETASK = "HIT_CREATETASK";
export const POST_CREATETASK = "POST_CREATETASK";
export const INVITE_MEMBER = "INVITE_MEMBER";
export const REMOVE_MEMBER = "REMOVE_MEMBER";
export const ATTACH_EMAIL = "ATTACH_EMAIL";
export const HIT_INVITEMEMBER = "HIT_INVITEMEMBER";
export const HIT_REMOVEMEMBER = "HIT_REMOVEMEMBER";
export const HIT_SHOWMEMBER = "HIT_SHOWMEMBER";
export const SHOW_MEMBER = "SHOW_MEMBER";
//detail project atau task

//websocket reducers
export const WEBSOCKET_ALLTASK = "WEBSOCKET_ALLTASK";
export const HIT_WEBSOCKET_ALLTASK = "HIT_WEBSOCKET_ALLTASK";
export const WEBSOCKET_PROJECT = "WEBSOCKET_PROJECT";
export const HIT_WEBSOCKET_PROJECT = "HIT_WEBSOCKET_PROJECT";
//websocket reducers

export const HIT_MIDTRANS = "HIT_MIDTRANS";
export const MIDTRANS = "MIDTRANS";
