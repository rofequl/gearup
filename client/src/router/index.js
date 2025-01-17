import {createRouter, createWebHistory} from 'vue-router'
import {useConfigStore} from "@/stores/config.js";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: () => import("@/layouts/default-layout/DefaultLayout.vue"),
        meta: {
            middleware: 'auth'
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    pageTitle: 'Dashboard',
                    breadcrumb: ['Dashboard']
                }
            }
        ]
    },
    {
        path: '/',
        component: () => import("@/layouts/PublicLayout.vue"),
        children: [
            {
                path: '/terms',
                name: 'terms',
                component: () => import('@/views/Crafted/Terms.vue'),
                meta: {
                    pageTitle: 'Terms & Conditions',
                }
            }
        ]
    },
    {
        path: "/",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [
            {
                path: "/sign-in",
                name: "sign-in",
                component: () => import("@/views/Auth/SignIn.vue"),
                meta: {
                    pageTitle: "Sign In",
                },
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: () => import("@/views/Auth/SignUp.vue"),
                meta: {
                    pageTitle: "Sign Up",
                },
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: () => import("@/views/Auth/PasswordReset.vue"),
                meta: {
                    pageTitle: "Password reset",
                },
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 80,
                behavior: "smooth",
            };
        } else {
            return {
                top: 0,
                left: 0,
                behavior: "smooth",
            };
        }
    }
})

router.beforeEach((to, from, next) => {
    const configStore = useConfigStore();

    // current page view title
    document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

    // reset config to initial state
    configStore.resetLayoutConfig();

    next();
})

export default router
