import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="footer bg-red-200/20 text-base p-10 ">
  <aside>
    <img src={logo} alt="" className="w-20 h-20"/>
   
  </aside>
  <nav>
    <h6 className="footer-title text-xl text-[#f54748]">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-xl text-[#f54748]">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-xl text-[#f54748]">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;