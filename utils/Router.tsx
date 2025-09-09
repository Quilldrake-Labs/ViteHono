import { createBrowserRouter } from "react-router";

const lazy = (path: string) => {
    return async () => {
        //resolve tsconfig paths
        const finalPath = path.replace(/^\.@/, "../");
        const { default: Component } = await import(/* @vite-ignore */finalPath);
        return { Component };
    };
};

const Router  = createBrowserRouter([
    {
        path: "/",
        lazy: lazy("../pages/Home"),
    },
]);

export default Router;