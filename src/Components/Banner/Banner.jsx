import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: `url(https://api.lorem.space/image/fashion?w=1000&h=800)` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome to Aesthetic Outfits</h1>
                        <p class="mb-5 text-xl font-bold">Here you'l find all the Aesthetic Collection for male & female both.</p>
                        <Link to="/shop"><button class="btn btn-md">Explore!!!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
