import { Carousel } from "react-bootstrap";

export default function BannerCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                    src="https://images.samsung.com/br/smartphones/galaxy-s21-5g/images/galaxy-s21-5g-share-image.jpg"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                    src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop"
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>
    );
}