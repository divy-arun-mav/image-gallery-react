import React , {useState} from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import rightImg from './right-arrow.png';
import leftImg from './left-arrow.png';

const images = [
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/1500/1500",
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/1500/1500",
]

const Gallery = () => {

    const [data,setData] = useState({img: '',i:0})

    const viewImage = (img, i) => {
        setData({ img, i });
    }

    const imgAction = (action) => {
        let i = data.i;
        const totalImages = images.length;

        if (action === "next-img") {
            setData({ img: images[(i + 1) % totalImages], i: (i + 1) % totalImages });
        } else if (action === "prev-img") {
            setData({ img: images[(i - 1 + totalImages) % totalImages], i: (i - 1 + totalImages) % totalImages });
        } else {
            setData({ img: "", i: 0 });
        }
    };

    console.log("Data:",data)


    return (
        <>
                {
                    data.img &&
                    <div className='gallery-container'>
                            <button className='close-gallery-btn' onClick={() => imgAction("close")}>+</button>
                            <button className='prev-img-btn' onClick={() => imgAction("prev-img")}><img src={leftImg} style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.5)",
                            padding: "10px"
                        }} />
                            </button>
                        <img
                            className='image'
                            src={data.img}
                        />
                        <button className='next-img-btn' onClick={() => imgAction("next-img")}><img src={rightImg} style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.5)",
                            padding: "10px"
                        }}/></button>
                    </div>
                }
            <div style={{ padding: "10px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="10px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
      </>
  )
}

export default Gallery