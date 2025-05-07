"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SlideCard from "./SlideCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const projects = [
  {
    projectName: "Secureframe",
    projectDescription:
      "A tool that combines computer vision and AES encryption, allowing users to selectively encrypt specific objects. Unlike other software that encrypts entire videos, Secureframe encrypts only the relevant pixels — enabling safer distribution while maintaining maximum security.",
    video: "./SecureframeDemo.mp4",
    tags: ["React", "Flask", "Ultralytics", "Python"],
  },
  {
    projectName: "Councillor 13 Website",
    projectDescription:
      "Redesigned the website for London’s 13th Ward Councillor, David Ferreira. Ensured the site was fully responsive across all screen sizes. Collaborated with a team of five developers as part of the Western Developer Society.",
    video: "./RedesignDemo.mp4",
    tags: ["NextJS", "HTML", "JavaScript", "CSS", "Figma"],
  },
  {
    projectName: "SolarMap",
    projectDescription:
      "Developed an interactive tool to visualize solar panel potential across geographic regions. Utilized Flask and React for a dynamic frontend-backend interface, integrating external APIs for real-time data.",
    image: "DemoMap.png",
    tags: ["Flask", "React", "Axios", "Requests", "API", "Python"],
  },
  {
    projectName: "Pet Simulator",
    projectDescription:
      "Created a Tamagotchi-style pet simulation game as part of CS 2212: Introduction to Software Engineering. Collaborated in a team of six, adhering to strict functional and non-functional requirements. Followed a full software engineering lifecycle with documentation at every stage.",
    image: "./PetDen.png",
    tags: ["Java", "SwingFX", "GitLab", "Agile"],
  },
  {
    projectName: "FoodNimbus",
    projectDescription:
      "Created the user interface for FoodNimbus, an app designed designed to help people with allergies navigate the food world. Completed during a 24 hour Designathon.",
    image: "./foodNimbus.png",
    tags: ["Figma"],
  }
];


export default function Projects({ styles }) {
  return (
    <div className={styles.projectContainer}>
      <h3 style={{ marginTop: "30px" }} className={styles.h3}>Projects</h3>
      <div className={styles.swiperContainer}>
        <Swiper
            className={styles.swiper}
            slidesPerView={1}
            loop = {true}
            navigation={true}
            pagination = {true}
            modules={[Navigation, Pagination]}
            spaceBetween="10px"
            breakpoints={{
              1100: {
                slidesPerView: 2,
                spaceBetween: 20,
              }
            }}
        >
        {
          projects.map((project, index) => {
            return (
              <SwiperSlide className={styles.slide}>
                  <SlideCard styles = {styles} 
                    projectName = {project.projectName } 
                    projectDescription = {project.projectDescription}
                    video = {project.video}
                    tags = {project.tags}
                    image = {project.image}
                    id = {index}
                  />

                  
              
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>
    </div>
  );
}