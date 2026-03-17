import React, { useState, useEffect, useRef, useCallback } from "react";

const galleryData = {
  
images: [
"_AJH3090.webp",
"_AJH3102.webp",
"_AJH3113.webp",
"_AJH3117.webp",
"_AJH3118.webp",
"_AJH3130.webp",
"_AJH3174.webp",
"_AJH3182.webp",
"_AJH3189.webp",
"_AJH3207.webp",
"_AJH3213.webp",
"_AJH3234.webp",
"_AJH3252.webp",
"_AJH3271.webp",
"_AJH3279.webp",
"_AJH3286.webp",
"_AJH3294.webp",
"_AJH3319.webp",
"_AJH3326.webp",
"_AJH3328.webp",
"_AJH3348.webp",
"_AJH3359.webp",
"_AJH3367.webp",
"_AJH3384-2.webp",
"_AJH3389.webp",
"_AJH3392.webp",
"_AJH3403.webp",
"_AJH3405.webp",
"_AJH3407.webp",
"_AJH3411.webp",
"_AJH3415.webp",
"_AJH3417.webp",
"_AJH3423.webp",
"_AJH3425.webp",
"_AJH3429.webp",
"_AJH3434.webp",
"_AJH3436.webp",
"_AJH3445.webp",
"_AJH3454.webp",
"_AJH3457.webp",
"_AJH3465.webp",
"_AJH3466.webp",
"_AJH3479.webp",
"_AJH3480.webp",
"_AJH3490.webp",
"_AJH3493.webp",
"_AJH3509.webp",
"_AJH3523.webp",
"_AJH3055.webp",
"_AJH3061.webp",
"_AJH3079.webp",
"_AJH3083.webp"
],
  videos: [
    "IMG_7696.mp4", "IMG_7695.mp4", "IMG_7697.mp4", "IMG_7698.mp4",
    "IMG_7699.mp4", "IMG_7689.mp4", "IMG_7688.mp4", "IMG_7687.mp4",
    "IMG_7686.mp4", "IMG_7685.mp4", "IMG_7684.mp4", "IMG_7681.mp4",
    "IMG_7677.mp4", "IMG_7679.mp4", "IMG_7678.mp4", "IMG_7676.mp4",
    "IMG_7675.mp4", "IMG_7674.mp4", "IMG_7672.mp4", "IMG_7673.mp4",
    "IMG_7667.mp4", "IMG_7670.mp4", "IMG_7669.mp4", "IMG_7666.mp4",
    "IMG_7665.mp4", "IMG_7662.mp4", "IMG_7663.mp4", "IMG_7661.mp4",
    "IMG_7660.mp4", "IMG_7656.mp4", "IMG_7654.mp4", "IMG_7651.mp4",
    "IMG_7650.mp4", "IMG_7649.mp4", "IMG_7646.mp4", "IMG_7643.mp4"
  ]
};

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", borderRadius: "8px", aspectRatio: "1/1", backgroundColor: "#e5e7eb" }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, backgroundColor: "#e5e7eb" }} className="animate-pulse" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
        />
      )}
    </div>
  );
}

function VideoPlaceholder({ onPlay }) {
  return (
    <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16/9", backgroundColor: "#1f2937" }}>
      <button
        onClick={onPlay}
        style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", background: "none", border: "none", cursor: "pointer" }}
        aria-label="Play video"
      >
        <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg style={{ width: "28px", height: "28px", marginLeft: "4px" }} fill="white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span style={{ color: "#9ca3af", fontSize: "14px" }}>Tap to play</span>
      </button>
    </div>
  );
}

function VideoError({ src }) {
  return (
    <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16/9", backgroundColor: "#1f2937", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "16px", textAlign: "center" }}>
      <span style={{ fontSize: "40px" }}>⚠️</span>
      <p style={{ color: "#fff", fontWeight: "600", margin: 0 }}>Video could not be played</p>
      <p style={{ color: "#9ca3af", fontSize: "14px", margin: 0 }}>Check that the file exists in your assets folder.</p>
      <a href={"/assets/" + src} download style={{ marginTop: "8px", backgroundColor: "#ef4444", color: "#fff", fontSize: "14px", padding: "8px 16px", borderRadius: "999px", textDecoration: "none" }}>
        Download instead
      </a>
    </div>
  );
}

function VideoPlayer({ src, videoRef }) {
  return (
    <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16/9", backgroundColor: "#000" }}>
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <source src={"/assets/" + src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function LazyVideo({ src }) {
  const [status, setStatus] = useState("idle");
  const videoRef = useRef(null);

  const handlePlay = useCallback(() => {
    setStatus("playing");
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => setStatus("error"));
      }
    }, 100);
  }, []);

  if (status === "idle") return <VideoPlaceholder onPlay={handlePlay} />;
  if (status === "error") return <VideoError src={src} />;
  return <VideoPlayer src={src} videoRef={videoRef} />;
}

function Projects() {
  const [imagesToShow, setImagesToShow] = useState(9);
  const [videosToShow, setVideosToShow] = useState(6);

  const loadMoreImages = () => setImagesToShow((prev) => Math.min(prev + 9, galleryData.images.length));
  const loadMoreVideos = () => setVideosToShow((prev) => Math.min(prev + 6, galleryData.videos.length));

  return (
    <section id="projects" style={{ width: "100%", padding: "80px 24px", backgroundColor: "#ffffff", boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-full px-8 py-3 w-fit">
              Ita Faaji
            </h2>
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#ef4444", marginBottom: "12px" }}>
            Ita Faaji - Giving Back with Flavour
          </h3>
          <p style={{ maxWidth: "768px", margin: "0 auto", color: "#4b5563", lineHeight: "1.75" }}>
            Ita Faaji is our annual end-of-summer charity event designed to blend fun with purpose.
            It is a celebration of food, music, and community dedicated to supporting the Royal
            National Institute of Blind People (RNIB). The event features entertainment and fundraising
            initiatives aimed at creating opportunities and awareness for the visually impaired.
            Ita Faaji reflects our commitment to social impact and inclusivity.
          </p>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#ef4444", margin: 0 }}>📸 Photo Gallery</h3>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>{galleryData.images.length} photos</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryData.images.slice(0, imagesToShow).map((image, index) => (
              <LazyImage key={image} src={"/assets/" + image} alt={"Gallery photo " + (index + 1)} />
            ))}
          </div>
          {imagesToShow < galleryData.images.length && (
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button onClick={loadMoreImages} style={{ backgroundColor: "#ef4444", color: "#fff", padding: "12px 32px", borderRadius: "999px", fontWeight: "600", border: "none", cursor: "pointer" }}>
                Load More Photos    
              </button>
            </div>
          )}
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#ef4444", margin: 0 }}>🎥 Video Gallery</h3>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>{galleryData.videos.length} videos</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryData.videos.slice(0, videosToShow).map((video) => (
              <LazyVideo key={video} src={video} />
            ))}
          </div>
          {videosToShow < galleryData.videos.length && (
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button onClick={loadMoreVideos} style={{ backgroundColor: "#ef4444", color: "#fff", padding: "12px 32px", borderRadius: "999px", fontWeight: "600", border: "none", cursor: "pointer" }}>
                Load More Videos )
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Projects;
