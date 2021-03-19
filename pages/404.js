import Link from "next/link";
const PageNotFound = () => {
  //
    return (
      <>
        <div className="d-flex h-100">
          <div className="not-found my-auto mx-auto">
            <h1 className="">Opsss... page not found</h1>
            <h2 className="">Page not found</h2>
            <p className="">
              Go back to the{" "}
              <Link href="/">
                <a>Homepage</a>
              </Link>
            </p>
          </div>
        </div>
      </>
    );
};
// export async function getServerSideProps(context) {
//   const UA = context.req.headers["user-agent"];
//   const isMobile = Boolean(
//     UA.match(
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     )
//   );
//
//   return {
//     props: {
//       deviceType: isMobile ? "mobile" : "desktop",
//     },
//   };
// }
export default PageNotFound;