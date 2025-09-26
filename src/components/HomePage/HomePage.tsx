import Banner from "./Banner";
import BrowseCategories from "./BrowseCategories";
import ExploreProducts from "./ExploreProducts";
import HotSales from "./HotSales";

function HomePage() {
	return (
		<main className="container flex-grow-1">
			<Banner />
			<HotSales />
			<BrowseCategories />
			<ExploreProducts />
		</main>
	);
}

export default HomePage;
