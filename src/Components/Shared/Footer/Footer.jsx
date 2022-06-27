import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../Header/Logo";

export default function Footer() {
  return (
    <div><footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Services</span>
        <Link to="#" className="link link-hover">Branding</Link>
        <Link to="#" className="link link-hover">Design</Link>
        <Link to="#" className="link link-hover">Marketing</Link>
        <Link to="#" className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="#" className="link link-hover">About us</Link>
        <Link to="#" className="link link-hover">Contact</Link>
        <Link to="#" className="link link-hover">Jobs</Link>
        <Link to="#" className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="#" className="link link-hover">Terms of use</Link>
        <Link to="#" className="link link-hover">Privacy policy</Link>
        <Link to="#" className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <Logo />
          <p>Aesthetic Outfit <br />Providing aesthetic stufs since 2022</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <BsFacebook className="w-8 h-8" />
            <BsTwitter className="w-8 h-8" />
            <BsInstagram className="w-8 h-8" />
          </div>
        </div>

      </footer>
      <div className="text-center bg-base-200 p-5">
        <p>Designed By <span><a href="https://github.com/0nahid">Nahid</a></span> </p>
      </div>
    </div>
  )
}
