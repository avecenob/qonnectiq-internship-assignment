function TopHeader() {
	return (
		<div className="bg-dark text-white py-2">
			<div className="container d-flex justify-content-between align-items-center">
				<span>
					Summer Sale For All Swim Suits And Free Express Delivery -
					OFF 50%!
				</span>

				<div className="d-flex align-items-center gap-3">
					<a href="#" className="text-white fw-bold">
						Shop Now
					</a>

					<select className="form-select form-select-sm bg-dark text-white border-0">
						<option>English</option>
						<option>Bahasa</option>
						<option>日本語</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default TopHeader;
