import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://api.lorem.space/image/fashion?w=1000&h=800)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Aesthetic Outfits</h1>
                        <p className="mb-5 text-xl font-bold">Here you'l find all the Aesthetic Collection for male & female both.</p>
                        <Link to="/shop"><button className="btn btn-md">Explore!!!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
