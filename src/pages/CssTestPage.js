import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../components/ui/ImageCard";

function CssTestPage() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://picsum.photos/v2/list?fbclid=IwAR25-9_Re00SRj6-NsveKgscdVCc3ZdrqgGT4xRMY1JeAhrfNgTfkr936dU"
        );
        setImages(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);
  console.log(images);
  return (
    <div className="container">
      <div className="gallery-container">
        {images.length > 0
          ? images.map((item) => <ImageCard key={item.id} image={item} />)
          : ""}
      </div>
    </div>
  );
}

export default CssTestPage;
