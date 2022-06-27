import { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loader/Loader';
export default function Login() {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success(`Welcome Back, ${auth?.currentUser?.displayName}`, {
                autoClose: 4000,
            });
        }
    }, [user, navigate, from]);

    if (loading || gLoading) {
        return <Loading></Loading>;
    }
    if (error || gError) {
        signInError = (
            <p className="text-red-500">
                <small>{error?.message || gError?.message}</small>
            </p>
        );
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    if (user || gUser) {
        navigate(from, { replace: true });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/fashion?w=400&h=225" alt="Shoes" /></figure>
                <h1 className="text-center font-semibold mt-3 uppercase">Welcome back...</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered w-full" placeholder="email" {...register("email", { required: true, min: 5 })} />
                            {errors.email?.type === "required" && (
                                <span className="text-error">Email is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full" placeholder="password" {...register("password", { required: true, min: 6 })} />
                            {errors.password?.type === "required" && (
                                <span className="text-error">Password is required</span>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <Link to="/register" className="label-text-alt link link-hover">New user?</Link>

                            </label>
                        </div>
                        {signInError}
                        <div className="form-control mt-6">
                            <button onSubmit={onSubmit} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <hr />
                    <p className="text-center">Or</p>
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
    )
}
