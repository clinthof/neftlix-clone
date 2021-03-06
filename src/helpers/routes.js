import { Route, Redirect } from 'react-router-dom';

const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) return children;
        if (user) return <Redirect to={{ pathname: loggedInPath }} />;
        return null;
      }}
    />
  );
};

const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) return children;
        if (!user) return <Redirect to={{
          pathname: 'signin', state: { from: location }
        }} />;
        return null;
      }}
    />
  );
};

export { IsUserRedirect, ProtectedRoute, };