"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            <span className="hero-highlight">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Rubi", 1000, "Web Developer", 1000, "Teacher", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="type-animation-text"  // Add class here

            />
          </h1>

          <p className="hero-description">
            A passionate full-stack web developer currently exploring
            new technologies and creating engaging digital experiences.
          </p>

          <div className="hero-links">
            <Link
              href="/#contact"
              className="hero-hire-me"
            >
              Hire Me
            </Link>

            <Link
              href="/CV.pdf"
              download="Rubi_Abid_CV.pdf"
              className="hero-download-cv"
            >
              <span className="hero-download-cv-text">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <Image
              src="/profile.jpg"
              alt="hero image"
              className="hero-image"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
