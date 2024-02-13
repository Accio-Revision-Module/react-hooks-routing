import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import Login from "../pages/login";

export default function withAuthorization(WrappedComponent) {
    return (props) => {
        const {user} = useContext(UserContext);

        if(!user) {
            return <Login />
        }

        return (
            <WrappedComponent {...props} />
        )
    }
}