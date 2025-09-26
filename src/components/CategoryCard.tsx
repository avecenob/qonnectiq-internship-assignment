interface Props {
	name: string;
}

function CategoryCard({ name }: Props) {
	return (
		<div className="col">
			<a href="">
				<div
					className="border rounded d-flex flex-column align-items-center p-3 h-100"
					style={{ maxWidth: '150px', minHeight: '100px' }}
				>
					<p>{name}</p>
				</div>
			</a>
		</div>
	);
}

export default CategoryCard;
