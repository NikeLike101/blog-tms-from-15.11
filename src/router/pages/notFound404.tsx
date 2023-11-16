import {useNavigate} from "react-router-dom";
import PageContentWrapper from "../../components/page";
import {useAppSelector} from "../../store/store";
import {routeLocationsEnum} from "../Router";

const NotFound404 = () => {
    const navigation = useNavigate()
    const user = useAppSelector(state => state.userReducer.user)
    const handleNavigateToLogin = () => {
        navigation(user !== null ? routeLocationsEnum.blogPage : routeLocationsEnum.signIn)
    }

    return <PageContentWrapper>not found <button onClick={handleNavigateToLogin} >login</button></PageContentWrapper>
}
export default NotFound404