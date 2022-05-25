type IRouter = () => "HashRouter" | "BrowserRouter";

declare global {
  interface Window {
    REACT_APP_ROUTING_TYPE: "HashRouter" | "BrowserRouter";
  }
}

export const routerType: IRouter = () => {
  const isHashRouter =
    (process &&
      process.env &&
      process.env.REACT_APP_ROUTING_TYPE === "HashRouter") ||
    window.REACT_APP_ROUTING_TYPE === "HashRouter";
  return isHashRouter ? "HashRouter" : "BrowserRouter";
};
