import Button from "../Button";

function Banner() {
	return (
		<div
			className="position-relative text-white bg-dark"
			style={{ height: '300px' }}
		>
			<img
				src="/images/banner.png"
				alt="Promo Banner"
				className="w-100 h-100 object-fit-cover"
			/>
			<div className="position-absolute top-50 start-0 translate-middle-y ms-5">
				<h2 className="display-6 fw-bold">Up to 10% off Voucher</h2>
				<Button>Shop Now →</Button>
			</div>
		</div>
	);
}

export default Banner;