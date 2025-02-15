const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: false
    },
    redirect: '/',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    // component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Landing Page',
            path: '/',
            // component: () => import('@/views/pages/landingpage/index.vue')
            component: () => import('@/views/pages/front-pages/Landingpage.vue')
        },
        {
            name: 'FrontPage',
            path: '/home',
            component: () => import('@/views/pages/front-pages/Landingpage.vue')
        },
        {
            name: 'About Us',
            path: '/about-us',
            component: () => import('@/views/pages/front-pages/Aboutpage.vue')
        },
        {
            name: 'Contact',
            path: '/contact',
            component: () => import('@/views/pages/front-pages/Contactpage.vue')
        },
        {
            name: 'Review Us',
            path: '/review',
            component: () => import('@/views/pages/front-pages/PublicReview.vue')
        },
        {
            name: 'Pricing1',
            path: '/pricing',
            component: () => import('@/views/pages/front-pages/PackagePricing.vue')
        },
        {
            name: 'Portfolio',
            path: '/portfolio',
            component: () => import('@/views/pages/front-pages/Portfolio.vue')
        },
        {
            name: 'Blog',
            path: '/blog/posts',
            component: () => import('@/views/pages/front-pages/BlogPage.vue')
        },
        {
            name: 'Blog Details',
            path: '/blog/:id',
            component: () => import('@/views/pages/front-pages/BlogDetails.vue')
        },
        {
            name: 'Error',
            path: '/404',
            component: () => import('@/views/authentication/Error.vue')
        },
        {
            name: 'Maintenance',
            path: '/auth/maintenance',
            component: () => import('@/views/authentication/Maintenance.vue')
        }
    ]
};

export default MainRoutes;
