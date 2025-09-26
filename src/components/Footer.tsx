function Footer() {
	return (
		<footer
			className="bg-dark text-white text-center mt-auto"
			style={{ height: '440px' }}
		>
			<div className="container">
				<div className="row row-cols-5 justify-content-center text-start gx-9 p-3 mt-5">
					<div className="col-2 text-start">
						<h5>Exclusive</h5>
						<div className="row">
							<h6>Subscribe</h6>
						</div>
						<div className="row">
							<form action="">
								<label htmlFor="subscribe">
									Get 10% off your first order
								</label>
								<input
									type="text"
									name="subscribe"
									placeholder="Enter your email"
                  size={15}
								/>
								<button>Submit</button>
							</form>
						</div>
					</div>
					<div className="col-2">
						<h5>Support</h5>
						<div className="row">Madison Park, Kiosk E-06, Jakarta Barat, Indonesia</div>
						<div className="row">admin@groupisa.com</div>
						<div className="row">+6281380804008</div>
					</div>
					<div className="col-2">
						<h5>Account</h5>
						<div className="row">My Account</div>
						<div className="row">Login / Register</div>
						<div className="row">Cart</div>
						<div className="row">Wishlist</div>
						<div className="row">Shop</div>
					</div>
					<div className="col-2">
						<h5>Quick Link</h5>
						<div className="row">Privacy Policy</div>
						<div className="row">Terms of Use</div>
						<div className="row">FAQ</div>
						<div className="row">Contact</div>
					</div>
					<div className="col-2">
						<h5>Connect with us</h5>
						<div className="row">Facebook</div>
						<div className="row">Twitter</div>
						<div className="row">Instagram</div>
						<div className="row">LinkedIn</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
