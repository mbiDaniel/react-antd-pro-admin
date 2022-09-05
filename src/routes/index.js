import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";

export const routes = {
    Login: {
        component: Login,
        path: "/login",
    },
    Dashboard: {
        component: Dashboard,
        path: "/",
    },
}