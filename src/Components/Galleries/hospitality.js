import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { HospitalityPhotos } from "./hospitalityPhotos";
import Carousel, { Modal, ModalGateway } from "react-images";

function Hospitality() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div style={{
      backgroundImage: "url(/daniPBackground.jpg)",
      minWidth: "100%",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
       }}>
      <Gallery photos={HospitalityPhotos} onClick={openLightbox} direction={"column"} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={HospitalityPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Hospitality;