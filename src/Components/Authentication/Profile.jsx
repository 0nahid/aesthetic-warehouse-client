import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


export default function Profile() {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="card w-96 mx-auto glass">
                <figure><img src={user?.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt={user.displayName} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name:{user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <p>Last Login: {user.metadata.lastSignInTime}</p>
                </div>
            </div>
        </div>
    )
}