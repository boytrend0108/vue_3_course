import Main from "@/pages/Main"
import PostPage from '@/pages/PostPage'
import AboutPage from '@/pages/AboutPage'
import PostPageId from '@/pages/PostPageId'
import PostPageWithStore from '@/pages/PostPageWithStore'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/', // on this addres open...
        component: Main // this page...
    },
    {
        path: '/posts',// on this addres open...
        component: PostPage// this page...
    },
    {
        path: '/about',// on this addres open...
        component: AboutPage// this page...
    },
    {
        path: '/posts/:id',// on this addres open...
        component: PostPageId// this page...
    },
    {
        path: '/store',// on this addres open...
        component: PostPageWithStore// this page...
    },
]



const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;