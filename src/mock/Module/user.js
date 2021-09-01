// const tokens = {
//   admin: {
//     token: 'admin-token'
//   },
//   editor: {
//     token: 'editor-token'
//   }
// }

// const users = {
//   'admin-token': {
//     roles: ['admin'],
//     introduction: 'I am a super administrator',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Super Admin'
//   },
//   'editor-token': {
//     roles: ['editor'],
//     introduction: 'I am an editor',
//     avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     name: 'Normal Editor'
//   }
// }

export default [
  // user login
  {
    url: "/login",
    type: "post",
    response: (config) => {
      console.log(config);
      return {
        code: 0,
        message: null,
        data: {
          userName: "wfXI8DI=",
          userId:
            "C9C782A8119E760B4938CFA62105142ABED726C07DE807A8214415E995EFD1BC",
          token:
            "B0263DF7DD46C43763A0B80350AECF0FD38C900F91338B128961E3D52B8AD183214415E995EFD1BC",
        },
      };
    },
  },

  // get user info
  {
    url: "/api/user/info.*",
    type: "get",
    response: (config) => {
      console.log(config);
      return {
        code: 0,
        message: null,
        data: {
          userid: "5dc77db399622732a697cb9e",
          email: "1851054389@qq.com",
          idcard: "",
          phone: "13298765467",
          createtime: "2019-11-10T10:56:25.000+0000",
          updatetime: null,
          delstate: 0,
          avatar: "",
          ip: "",
          useragent: "",
          referer: "",
          sex: 1,
          entrydate: null,
          regulardate: null,
          remark: "",
          regular: 0,
          state: 1,
          userName: "刘瑞2",
          createUserid: "5dc77db399622732a697cb9e",
          leaveState: 0,
          leaveDate: null,
          createUserName: null,
          position: [
            {
              id: "5dc7ecdaf0d627370856fb68",
              userid: "5dc77db399622732a697cb9e",
              positionId: "teacher",
              positionDesc: "",
              createUserid: "5dc77db399622732a697cb9e",
              createTime: "2019-11-10T10:56:26.000+0000",
            },
          ],
          department: [
            {
              id: "5dc7ecdaf0d627370856fb67",
              userid: "5dc77db399622732a697cb9e",
              orgId: "5dc7ffa8bfe4e22b89df80f1",
              orgName: "武汉机构",
              departmentId: "5dc7b0efd112cc63e9c505f2",
              departmentName: "财务部",
              createBy: "5dc77db399622732a697cb9e",
              createTime: "2019-11-09T16:00:00.000+0000",
              updateTime: null,
              type: 2,
              userName: "刘瑞2",
            },
          ],
          operateCampuses: [
            {
              id: "5dc7ecdaf0d627370856fb69",
              userid: "5dc77db399622732a697cb9e",
              orgId: "5dc787fd09fef307cc874578",
              orgName: "武汉机构",
              campusId: "5dc7aede5cbc170e850040bb",
              campusName: "光谷校区",
              createUserid: "5dc77db399622732a697cb9e",
              createTime: "2019-11-10T10:56:26.000+0000",
            },
          ],
        },
      };
    },
  },

  // user logout
  {
    url: "/user/logout",
    type: "post",
    response: (config) => {
      console.log(config);
      return {
        code: 0,
        data: "success",
      };
    },
  },

  // 查询树结构
  {
    url: "/auth/role/orgmgt/view",
    type: "post",
    response: (config) => {
      console.log(config);
      return {
        code: 0,
        data: [
          {
            id: "5db8ef9e8f19df32f401a152",
            applicationCode: "sales",
            applicationName: "销售系统",
            applicationUrl: "/sales",
            delState: 0,
            childs: [
              {
                id: "5db972d7f527814506e6e5d1",
                menuNo: "channelmanager",
                applicationCode: "sales",
                menuParentNo: "",
                menuOrder: 2,
                menuName: "渠道管理",
                menuUrl: "/qudaoUrl",
                delState: 0,
                hasChild: 1,
                childs: [
                  {
                    id: "5db97bac7fd43a48bf336050",
                    menuNo: "channelList",
                    applicationCode: "sales",
                    menuParentNo: "channelmanager",
                    menuOrder: 1,
                    menuName: "渠道列表",
                    menuUrl: "/channelListUrl",
                    delState: 0,
                    hasChild: 0,
                    childs: [],
                    authButtonVoList: [
                      {
                        id: "5dba43df16c12974350fbfd0",
                        btnNo: "qudaobianji",
                        btnName: "编辑",
                        btnClass: "1",
                        menuNo: "channelList",
                        delState: 0,
                      },
                      {
                        id: "5dba435416c12974350fbfcf",
                        btnNo: "qudaochakan",
                        btnName: "查看",
                        btnClass: "0",
                        menuNo: "channelList",
                        delState: 0,
                      },
                    ],
                  },
                ],
              },
              {
                id: "5db97193f527814506e6e5d0",
                menuNo: "customermanager",
                applicationCode: "sales",
                menuParentNo: "",
                menuOrder: 1,
                menuName: "线索管理",
                menuUrl: "/menuUrl",
                delState: 0,
                hasChild: 1,
                childs: [
                  {
                    id: "5db97aa77fd43a48bf33604f",
                    menuNo: "customerList",
                    applicationCode: "sales",
                    menuParentNo: "customermanager",
                    menuOrder: 1,
                    menuName: "线索列表",
                    menuUrl: "/customerListUrl",
                    delState: 0,
                    hasChild: 0,
                    childs: [],
                    authButtonVoList: [
                      {
                        id: "5dba3f5816c12974350fbfce",
                        btnNo: "xiansuobianji",
                        btnName: "编辑",
                        btnClass: "1",
                        menuNo: "customerList",
                        delState: 0,
                      },
                      {
                        id: "5db98e706abe8b4cae7aef50",
                        btnNo: "xiansuochakan",
                        btnName: "查看",
                        btnClass: "0",
                        menuNo: "customerList",
                        delState: 0,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "5dba470016c12974350fbfd1",
            applicationCode: "teaching",
            applicationName: "教务系统",
            applicationUrl: "/teaching",
            delState: 0,
            childs: [
              {
                id: "5dba4a4516c12974350fbfd4",
                menuNo: "courseordermanager",
                applicationCode: "teaching",
                menuParentNo: "",
                menuOrder: 2,
                menuName: "排课管理",
                menuUrl: "/courseorderManageUrl",
                delState: 0,
                hasChild: 1,
                childs: [
                  {
                    id: "5dba4c6116c12974350fbfd7",
                    menuNo: "clazzList",
                    applicationCode: "teaching",
                    menuParentNo: "courseordermanager",
                    menuOrder: 1,
                    menuName: "班级列表",
                    menuUrl: "/clazzOrderListUrl",
                    delState: 0,
                    hasChild: 0,
                    childs: [],
                    authButtonVoList: [
                      {
                        id: "5dba4fa216c12974350fbfdb",
                        btnNo: "clazzbianji",
                        btnName: "编辑",
                        btnClass: "1",
                        menuNo: "clazzList",
                        delState: 0,
                      },
                      {
                        id: "5dba4f3616c12974350fbfda",
                        btnNo: "clazzchakan",
                        btnName: "查看",
                        btnClass: "0",
                        menuNo: "clazzList",
                        delState: 0,
                      },
                    ],
                  },
                ],
              },
              {
                id: "5dba496416c12974350fbfd2",
                menuNo: "studentmanager",
                applicationCode: "teaching",
                menuParentNo: "",
                menuOrder: 1,
                menuName: "学员管理",
                menuUrl: "/studentManageUrl",
                delState: 0,
                hasChild: 1,
                childs: [
                  {
                    id: "5dba4b7916c12974350fbfd5",
                    menuNo: "studentList",
                    applicationCode: "teaching",
                    menuParentNo: "studentmanager",
                    menuOrder: 1,
                    menuName: "学员列表",
                    menuUrl: "/studentListUrl",
                    delState: 0,
                    hasChild: 0,
                    childs: [],
                    authButtonVoList: [
                      {
                        id: "5dba4e9c16c12974350fbfd9",
                        btnNo: "xueyuanbianji",
                        btnName: "编辑",
                        btnClass: "1",
                        menuNo: "studentList",
                        delState: 0,
                      },
                      {
                        id: "5dba4d9716c12974350fbfd8",
                        btnNo: "xueyuanchakan",
                        btnName: "查看",
                        btnClass: "0",
                        menuNo: "studentList",
                        delState: 0,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        message: "success",
      };
    },
  },
];
