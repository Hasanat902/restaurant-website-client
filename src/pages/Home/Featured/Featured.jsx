import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 10, 2026</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit impedit, harum aperiam magni inventore commodi deserunt perferendis sit accusamus dolores ratione debitis, dicta vitae possimus earum obcaecati libero ipsa natus, enim maxime deleniti molestias! Omnis reprehenderit recusandae earum atque consequatur, veniam excepturi saepe vitae nemo facere, dolor adipisci dolore?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;