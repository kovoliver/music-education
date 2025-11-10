import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const YouTubeCarousel = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    if (!videos || videos.length === 0) {
        return null;
    }

    const { id, title } = videos[currentIndex];

    return (
        <div className="flex jc-space-between ai-center yt-video-holder d-none-mobile">
            <FontAwesomeIcon
                icon="fa-solid fa-square-caret-left"
                className="cursor-pointer color-primary font-26 p-md"
                onClick={handlePrev}
            />
            <div className="flex f-dir-column ai-center m-auto">
                <p className="mt-md font-lg bold-text text-center color-primary">{title}</p>

                <div className="position-relative yt-video">
                    <iframe
                        className="position-absolute top-0 left-0 wp-100 hp-100"
                        src={`https://www.youtube.com/embed/${id}`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <h4>{currentIndex+1}/{videos.length}</h4>
            </div>
            <FontAwesomeIcon
                icon="fa-solid fa-square-caret-right"
                className="cursor-pointer color-primary font-26 p-md"
                onClick={handleNext}
            />
        </div>
    );
};

export default YouTubeCarousel;