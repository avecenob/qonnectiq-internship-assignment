import CategoryCard from "../CategoryCard";

const BrowseCategories = () => {
	const categories = [
		'Sayur-sayuran',
		'Minuman dan Susu',
		'Minyak dan Bumbu',
		'Buah-buahan',
		'Protein Hewani',
		'Beras dan Bijian',
	];

	return (
		<>
			<div className="mt-4 mb-2">
				<h4>Browse by Category</h4>
				<div className="row row-cols-1 row-cols-md-6 g-2">
					{categories.map((category) => (
           <CategoryCard name={category} /> 
					))}
				</div>
			</div>
		</>
	);
};

export default BrowseCategories;
