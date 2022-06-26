import axios from 'axios';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile ,useSendEmailVerification} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loader/Loader';

export default function Register() {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(
        auth
      );
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        axios.post(`http://localhost:5500/api/users`, {
            name: data.name,
            email: data.email,
            role: 'user'
        })
            .then(res => {
                if (res.status === 200) {
                    navigate(from, { replace: true });
                    sendEmailVerification();
                    toast.success(`Welcome ${data.name}! You are now registered. ${email} check your email/spambox to verify your account.`);
                }
            })
    };
    let signInError;
    if (error || error1 || error2) {
        signInError = (
            <p className="text-red-500">
                <small>
                    {error?.message || error1?.message || error2?.message}
                </small>
            </p>
        );
    }

    if (user || user1) {
        navigate("/", { replace: true });
    }
    if (loading || sending || loading1) {
        return <Loading></Loading>;
    }

    return (
        <>
            <div class="hero min-h-screen bg-base-200">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/fashion?w=400&h=225" alt="Shoes" /></figure>
                    <h1 class="text-center font-semibold mt-3 uppercase">Register Here...</h1>
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" className="input input-bordered w-full" placeholder="Name" {...register("name", { required: true, min: 3 })} />
                                {errors.name?.type === "required" && (
                                    <span className="text-error">Name is required</span>
                                )}
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" className="input input-bordered w-full" placeholder="email" {...register("email", { required: true, min: 5 })} />
                                {errors.email?.type === "required" && (
                                    <span className="text-error">Email is required</span>
                                )}
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" className="input input-bordered w-full" placeholder="password" {...register("password", { required: true, min: 6 })} />
                                {errors.password?.type === "required" && (
                                    <span className="text-error">Password is required</span>
                                )}
                                <label class="label">
                                    <Link to="/login" class="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            {signInError}
                            <div class="form-control mt-6">
                                <button onSubmit={onSubmit} class="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <hr />
                        <p class="text-center">Or</p>
                        <hr />
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline border-primary flex items-center content-center rounded-full hover:btn-primary"
                        >
                            <FcGoogle className="text-2xl mr-2"></FcGoogle>Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
