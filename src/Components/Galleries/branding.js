import React, { useState, useCallback } from "react";
import { BrandingPhotos } from "./brandingPhotos";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


function Branding() {
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
      <div>
        <Gallery photos={BrandingPhotos} onClick={openLightbox} direction={"column"} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={BrandingPhotos.map(x => ({
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

  export default Branding;