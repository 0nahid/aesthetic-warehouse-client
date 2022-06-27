import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://api.lorem.space/image/fashion?w=1000&h=800)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-8xl">404!!!</h1>
                        <Link to="/" ><button className="btn btn-primary">Goto Home</button></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
