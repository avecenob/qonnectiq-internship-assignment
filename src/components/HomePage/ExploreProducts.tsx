import Button from '../Button';
import ProductCard from '../ProductCard';

const ExploreProducts = () => {
	const items = [
		'Kiwi',
		'Markisa',
		'Pisang',
		'Naga',
		'Stroberi',
		'Pir',
		'Melon',
		'Nanas',
	];

  const shownItems = items.slice(0, 8);

	return (
		<>
			<div className='mt-4 mb-2'>
				<h4>Explore Our Products</h4>
				<div className="row row-cols-4 g-3 mb-4 mt-3">
					{shownItems.map((item) => (
						<ProductCard name={item} price="2000" rating={4} />
					))}
				</div>
				<div className='text-center'>
					<Button color="danger">View All Products</Button>
				</div>
			</div>
		</>
	);
};

export default ExploreProducts;
