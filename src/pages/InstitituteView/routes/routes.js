import React from 'react';

const Classes = React.lazy(() => import('../pages/Classes/Classes'))
const Sports = React.lazy(() => import('../pages/Sports/Sports'))
const Calendar = React.lazy(() => import('../pages/Calender/Calendar'))
const Media = React.lazy(() => import('../pages/Media/Media'))
const Library = React.lazy(() => import('../pages/Library/Library'))
const QuestionPapers = React.lazy(() => import('../pages/QuestionPapers/QuestionPapers'))
const Forms = React.lazy(() => import('../pages/Forms/Forms'))
const Users = React.lazy(() => import('../pages/Users/Users'))
const ExamPatterns = React.lazy(() => import('../pages/ExamPatterns/ExamPatterns'))
const Info = React.lazy(() => import('../pages/Info/Info'))
const Admissions = React.lazy(() => import('../pages/Admissions/Admissions'))
const Fees = React.lazy(() => import('../pages/Fees/Fees'))
const Slips = React.lazy(() => import('../pages/Slips/Slips'))

const routes = [
    // institiute routes
    {exact: true, name: 'classes', component: Classes,},
    {exact: true, name: 'sports', component: Sports,},
    {exact: true, name: 'calendar', component: Calendar,},
    { exact: true, name: 'media', component: Media,},
    { exact: true, name: 'library', component: Library,},
    { exact: true, name: 'Questionpapers', component: QuestionPapers,},
    { exact: true, name: 'forms', component: Forms,},
    { exact: true, name: 'users', component: Users,},
    { exact: true, name: 'exampatterns', component: ExamPatterns,},
    { exact: true, name: 'info', component: Info,},
    { exact: true, name: 'admissions', component: Admissions,},
    { exact: true, name: 'fees', component: Fees,},
    { exact: true, name: 'slips', component: Slips,},
]
export default routes;