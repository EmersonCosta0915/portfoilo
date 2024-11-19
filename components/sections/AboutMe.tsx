"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! I&apos;m Emerson Costa, a full stack developer with 10 years of experience.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              I am a passionate full stack developer with ASP.NET and PHP with over 5 years of experience in professional development.
              I have good experience with Angular, React, Vue.js, React Native and Node.js.
            </p>
            <p>
              My freelance work includes various technologies, including MS SQL database and front-end layers using JavaScript frameworks such as Angular, React or Vue.js.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
