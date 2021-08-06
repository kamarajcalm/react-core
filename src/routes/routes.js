import React from 'react';
import { FaSchool ,FaBook,FaNewspaper,FaCrown,FaGraduationCap,FaUser,FaReceipt,FaDashcube} from 'react-icons/fa';
import InstituteView from '../pages/InstitituteView/InstituteView';


const DashboardPage =React.lazy(()=>import('../pages/DashBoard'))
const InstitutePage =React.lazy(()=>import('../pages/InstitutionPage/InstitutePage'))
const Subjects =React.lazy(()=>import('../pages/SubJects'))
const QuestionPapers = React.lazy(() => import('../pages/QuestionPapers'))
const Ranks = React.lazy(() => import('../pages/Ranks'))
const Degree = React.lazy(() => import('../pages/Degeree'))
const Users = React.lazy(() => import('../pages/Users'))
const ExamPatterns = React.lazy(() => import('../pages/ExamPatterns'))
const routes =[
    { path: '/institute', exact: true, name: 'Institutes', component: InstitutePage, icon: <FaSchool size={30} /> },
   
    { path: '/subjects', exact: true, name: 'subjects', component: Subjects, icon: <FaBook size={30} /> },
    { path: '/QuestionPapers', exact: true, name: 'QuestionPapers', component: QuestionPapers, icon: <FaNewspaper size={30} /> },
    { path: '/Ranks', exact: true, name: 'Ranks', component: Ranks, icon: <FaCrown size={30} /> },
    { path: '/Degree', exact: true, name: 'Degree', component: Degree, icon: <FaGraduationCap size={30} /> },
    { path: '/users', exact: true, name: 'users', component: Users, icon: <FaUser size={30} />},
    { path: '/ExamPatterns', exact: true, name: 'ExamPatterns', component: ExamPatterns, icon: <FaReceipt size={30} />},
    { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardPage, icon: < FaDashcube size = { 30} />},
  
]

export default routes;