import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/fashion?w=400&h=225" alt="Shoes" /></figure>
                <h1 class="text-center font-semibold mt-3 uppercase">Welcome back...</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button onSubmit={onSubmit} class="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <hr />
                    <p class="text-center">Or</p>
                    <hr />
                    <button
                        // onClick={() => signInWithGoogle()}
                        className="btn btn-outline border-primary flex items-center content-center rounded-full hover:btn-primary"
                    >
                        <FcGoogle className="text-2xl mr-2"></FcGoogle>Continue with Google
                    </button>
                </div>
            </div>
        </div>
    )
}
