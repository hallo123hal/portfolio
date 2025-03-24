import React from 'react';

const Gallery = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];

  return (
    <section id="gallery" className="p-5" data-aos="fade-left">
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <img src={require(`../assets/${image}`)} className="img-fluid rounded w-100" alt="Gallery item" style={{ height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
