import WithAuth from "../../components/WithAuth";
import ChatApp from '../../components/WithAuth/Chat'

const index = WithAuth(ChatApp, 'token'); // withAuth is a function check if user is login

export default index;