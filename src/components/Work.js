import React from 'react';

const Work = () => {
  return (
    <section id="work" className="p-5 bg-light">
      <div className="container">
        <h2>Work</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/AbQ1lQkIQao" title="YouTube video" allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/61554345651680/videos/978346590875716/" title="Facebook video" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;