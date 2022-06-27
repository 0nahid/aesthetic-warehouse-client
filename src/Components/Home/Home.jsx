import Banner from '../Banner/Banner'
import About from '../Pages/About'
import HomeProducts from '../Products/HomeProducts'
import Footer from '../Shared/Footer/Footer'

export default function Home() {
    return (
        <div>
            <Banner />
            <HomeProducts />
            <About />
            <Footer />
        </div>
    )
}
