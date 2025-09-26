interface Props {
	name: string;
	price: string;
	image?: string;
	rating: number;
}

const ProductCard = ({ name, price, image, rating }: Props) => {
	return (
		<div className="col">
			<a href="">
				<div
					className="card h-100 shadow-sm"
					style={{ minWidth: '200px', maxWidth: '200px' }}
				>
					<img
						src={image}
						className="card-img-top p-3"
						alt=""
						style={{ height: '150px', objectFit: 'contain' }}
					/>
					<div className="card-body">
						<h6 className="card-title">{name}</h6>
						<p className="text-danger fw-bold mb-1">{price}</p>
						<div className="text-warning small">
							{'★'.repeat(rating)}
							{'☆'.repeat(5 - rating)}
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ProductCard;
