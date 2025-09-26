import ProductCard from '../ProductCard';

function HotSales() {
	const items = [
		'Apel',
		'Jeruk',
		'Mangga',
		'Pepaya',
		'Anggur',
		'Mobil',
	];

	return (
		<>
			<div className='mt-4 mb-2'>
				<h4>Hot Sales</h4>
				<div
					className="d-flex flex-row overflow-auto gap-2 p-2"
					style={{ whiteSpace: 'nowrap' }}
				>
					{items.map((item) => (
						<ProductCard name={item} price="2000" rating={4} />
					))}
				</div>
			</div>
		</>
	);
}

export default HotSales;
