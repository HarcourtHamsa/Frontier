import { currentUser } from "../lib/auth";

export function WithAuth(gssp) {
  // gssp is shorthand for getServerSideProps
  return async (context) => {
    const token = context.req.cookies.frontier__jwt;
    const user = currentUser(token) || null;

    if (!user) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    }

    const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data

    // Pass page-specific props along with user data from `withAuth` to component
    return {
      props: {
        ...gsspData.props,
        user,
      },
    };
  };
}
