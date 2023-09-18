import * as React from 'react'
const Home = React.lazy(() => import('../pages/Home/index'))
const Mentors = React.lazy(() => import("../pages/Mentors/index"))
const LaedsApp = React.lazy(() => import("../pages/Lid/index"))
const Students = React.lazy(() => import("../pages/Students/index"))
const Group = React.lazy(() => import("../pages/Group/index"))
const Moliya = React.lazy(() => import("../pages/Finance/index"))
const Setting = React.lazy(() => import("../pages/Setting/Setting"))
// childRouter
const Tolovlar = React.lazy(() => import("../components/Moliya/Tolovlar/index"))
const Xarajatlar = React.lazy(() => import("../components/Moliya/Xarajatlar/index"))
const TableQarzdarlar = React.lazy(() => import("../components/Moliya/Qarzdorlar/index"))
const Ishhaqi = React.lazy(() => import("../components/Moliya/IshHaqi/index"))
const Login = React.lazy(() => import("../pages/Login/index"))
const Umumiy = React.lazy(() => import("../components/Setting/Common/index"))
const Staff = React.lazy(() => import("../components/Setting/Xodimlar/CreateStaff"));
const Kurslar = React.lazy(() => import("../components/Setting/Courses/index"));
const Xonalar = React.lazy(() => import("../components/Setting/Xonalar/index"));
// components/studentAboutInfo/studentAboutEdit
const studentPage = React.lazy(() => import("../components/studentAboutInfo"))
const paymentEntry = React.lazy(() => import("../components/ChildMoliya/tolovkiritish"))

export const routes = [
    {
        path: '/',
        name: 'Home',
        element: Home,
        meta: { IsLogin: true },
        id: 1,
        child: []
    },
    {
        path: '/mentors',
        name: 'Mentors',
        element: Mentors,
        meta: { IsLogin: true },
        id: 2,
        child: []
    },
    {
        path: '/lid',
        name: 'LaedsApp',
        element: LaedsApp,
        meta: { IsLogin: true },
        id: 3
    },
    {
        path: '/talabalar',
        name: 'Students',
        element: Students,
        meta: { IsLogin: true },
        child: [],
        id: 4
    }
    ,
    {
        path: '/guruhlar',
        name: 'Group',
        element: Group,
        meta: { IsLogin: true },
        id: 5
    },
    {
        path: '/moliya',
        name: 'Moliya',
        element: Moliya,
        meta: { IsLogin: true },
        child: [
            {
                path: '/moliya/tolovlar',
                name: 'Tolovlar',
                element: Tolovlar,
                id: 1
            },
            {
                path: '/moliya/xarajatlar',
                name: 'Xarajatlar',
                element: Xarajatlar,
                id: 2
            },
            {
                path: '/moliya/qarzdorlar',
                name: 'TableQarzdarlar',
                element: TableQarzdarlar,
                id: 3
            },
            {
                path: '/moliya/ishhaqi',
                name: 'Ishhaqi',
                element: Ishhaqi,
                id: 4
            },
            {
                path: "/moliya/to'lov-kiritish",
                element: paymentEntry,
                id: 5
            },
        ],
        id: 6
    },
    {
        path: '/sozlamalar',
        name: 'Setting',
        element: Setting,
        meta: { IsLogin: true },
        child: [
            {
                path: '/sozlamalar/kurslar',
                name: 'Kurslar',
                element: Kurslar,
                id: 1
            },
            {
                path: '/sozlamalar/umumiy',
                name: 'Umumiy',
                element: Umumiy,
                id: 2
            },
            {
                path: '/sozlamalar/xodimlar',
                name: 'Xodimlar',
                element: Staff,
                id: 3
            },
            {
                path: '/sozlamalar/xonalar',
                name: 'Xonalar',
                element: Xonalar,
                id: 4
            },
        ],
        id: 7
    },
    {
        path: '/login',
        name: 'Login',
        element: Login,
        meta: { IsLogin: false },
        id: 8
    },
    {
        path: '/talabalar/talaba-haqida/:id',
        element: studentPage,
        id: 9
    },
    // {
    //     path: "/talabalar/talaba-qo'shish",
    //     element: Talabaqoshish,
    //     id: 10
    // },
]