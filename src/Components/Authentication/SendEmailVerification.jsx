import { useState } from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import Loading from '../Shared/Loader/Loader';

export default function SendEmailVerification() {
    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const sendVerification = async () => {
        await sendEmailVerification();
        toast.success(`Verification email sent to ${email}`);
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <Loading />
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Verify your email</h2>
                    <p>If you don't verify email you can't access most of the content of this site</p>
                    <div className="card-actions justify-end">
                        <button onClick={sendVerification} className="btn">Send Verification</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
