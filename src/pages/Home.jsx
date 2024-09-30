
import Header from '../components/Header';
import NewBooks from '../components/NewBooks';
import RecommendedBook from '../components/RecommendedBook';
import Service from '../components/Service';
import Service_two from '../components/Service_two';
import Special from '../components/Special';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <RecommendedBook></RecommendedBook>
            <Service></Service>
            <NewBooks></NewBooks>
            <Service_two></Service_two>
            <Special></Special>
        </div>
    );
};

export default Home;