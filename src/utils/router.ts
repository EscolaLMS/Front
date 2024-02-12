type IRouter = () => "HashRouter" | "BrowserRouter";

declare global {
  interface Window {
    VITE_APP_ROUTING_TYPE: "HashRouter" | "BrowserRouter";
  }
}

export const routerType: IRouter = () => {
  const isHashRouter =
    import.meta.env.VITE_APP_ROUTING_TYPE === "HashRouter" ||
    window.VITE_APP_ROUTING_TYPE === "HashRouter";

  return isHashRouter ? "HashRouter" : "BrowserRouter";
};
