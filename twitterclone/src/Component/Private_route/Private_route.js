const { Route, redirect } = require("react-router-dom");

function PrivateRoute({ Component, authenticated }) {

    return (
        <Route render={() => authenticated === true ? <Component /> : <redirect to="/" />} />
    )

}
export default PrivateRoute;