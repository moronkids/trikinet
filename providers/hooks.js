import React, { useContext, createContext } from "react";

//Context
export const Hooksx = createContext();

//Provider
export const Hooks = ({ children, isMobileView }) => {
  const [device, setDevice] = React.useState(isMobileView);

  //ComponentDidMouunt
  React.useEffect(() => {}, []);

  //
  const values = { device, setDevice };

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <Hooksx.Provider value={values}>{children}</Hooksx.Provider>;
};

//
export function useAppContext({isMobileView}) {
  const context = useContext(Hooksx);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }
  return context
}
// useAppContext.getInitialProps = async ({ ctx }) => {
//   let isMobileView = (ctx.req
//     ? ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };

export default useAppContext
