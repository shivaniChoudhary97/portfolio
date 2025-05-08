import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ProjectSlider1 from '../../Assets/Images/project-slider-1.png';
import ProjectSlider2 from '../../Assets/Images/project-slider-2.png';
import RightArrowImage from '../../Assets/Images/RightArrowImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './Projectslider.css';

const projects = [
    {
        title: "Bal Raksha Bharat",
        type: "Branding",
        description: "Rebranding Bal Raksha Bharat to reposition it as an optimistic, future-forward child rights NGO.",
        image: ProjectSlider1,
    },
    {
        title: "Trekkit",
        type: "UI/UX",
        description: "Rebranding Bal Raksha Bharat to reposition it as an optimistic, future-forward child rights NGO.",
        image: ProjectSlider2,
    },
    {
        title: "Mindshare",
        type: "Branding",
        description: "Designing an identity that reflects collaboration, connection, and possibility.",
        image: ProjectSlider1,
    },
    {
        title: "Trekkit",
        type: "UI/UX",
        description: "Rebranding Bal Raksha Bharat to reposition it as an optimistic, future-forward child rights NGO.",
        image: ProjectSlider2,
    },
    {
        title: "Mindshare",
        type: "Branding",
        description: "Designing an identity that reflects collaboration, connection, and possibility.",
        image: ProjectSlider1,
    },
];

const ProjectSlider = () => {
    const swiperRef = useRef(null);

    return (
        <div className="position-relative px-8 py-10 bg-black">
            <h4 className="color-purple">See more work:</h4>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={1} // default
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#1a1a1a] p-4 rounded-xl text-white h-full">
                            <div className="rounded-lg overflow-hidden mb-4 h-60">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    width="100%"
                                />
                            </div>
                            <h3 className="slider-heading">
                                <span className="subtitle"></span> {project.title}{' '}
                                <span className="grey-text">({project.type})</span>
                            </h3>
                            <p className="color-grey">{project.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Right Arrow Button */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className=""
            >
                <img src={RightArrowImage} alt="Next" className="custom-icon" />
            </button>
        </div>
    );
};

export default ProjectSlider;
