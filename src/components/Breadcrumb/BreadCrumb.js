import { Breadcrumb } from 'antd';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


// const route = [
//     {
//       path: 'index',
//       breadcrumbName: 'home',
//     },
//     {
//       path: 'first',
//       breadcrumbName: 'first',
//       children: [
//         {
//           path: '/general',
//           breadcrumbName: 'General',
//         },
//         {
//           path: '/layout',
//           breadcrumbName: 'Layout',
//         },
//         {
//           path: '/navigation',
//           breadcrumbName: 'Navigation',
//         },
//       ],
//     },
//     {
//       path: 'second',
//       breadcrumbName: 'second',
//     },
//   ];
// const routes = [
//     {
//       path: 'index',
//       breadcrumbName: 'home'},
//        {
//             path: 'first',
//       breadcrumbName: 'Dashboard',
//         },{
//             path: 'second',
//       breadcrumbName: 'Chat',
//         },{
//             path: 'third',
//       breadcrumbName: 'Email',
//         },{
//             path: 'fourth',
//       breadcrumbName: 'Calendar',
//         },{
//             path: 'fifth',
//       breadcrumbName: 'Task',
//         },{
//             path: 'sixth',
//       breadcrumbName: 'Tickets',
//         },{
//             path: 'seventh',
//       breadcrumbName: 'File',
//         },{
//             path: 'eighth',
//       breadcrumbName: 'Companies',
//         },{
//             path: 'nineth',
//       breadcrumbName: 'Authentification',
//         },{
//             path: 'tenth',
//       breadcrumbName: 'Settings',
//         }


// ]
//   function itemRender(route, params, routes, paths) {
//     const last = routes.indexOf(route) === routes.length - 1;
//     return last ? (
//       <span>{route.breadcrumbName}</span>
//     ) : (
//       <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
//     );
//   }
  
//   const BreadCrumb=()=>
//     <Breadcrumb itemRender={itemRender} routes={routes} />;




const breadcrumbNameMap = {
    '/dashboard': 'Dashboard',
    '/chat': 'Chat',
    '/email': 'Email',
    '/calendar': 'Calendar',
    '/task': 'Task',
    '/tickets': 'Tickets',
    '/file': 'File',
    '/companies': 'Companies',
    '/auth': 'Authentification',
    '/settings': 'Settings',
    
  };
  
  const BreadCrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb separator=">" style={{margin:'20px 0'}}>{breadcrumbItems}</Breadcrumb>
    );
  };

  export default BreadCrumb