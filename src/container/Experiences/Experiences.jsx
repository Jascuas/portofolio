import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Experiences.scss';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences" && !(_id in path("drafts.**"))]';
    const queryEducations = '*[_type == "educations" && !(_id in path("drafts.**"))]';
    
    client.fetch(queryEducations).then((data) => {
      data.sort((a, b) => b.year - a.year);
      setEducations(data);
    });

    client.fetch(query).then((data) => {
      data.sort((a, b) => b.year - a.year);
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experiences & Education</h2>
      <div className="row">
        <div className="app__experiences-container" >
          {experiences?.map((experience) => (
            <motion.div
              className="app__experiences-item"
              key={experience._id}
            >
              <div className="app__experiences-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__experiences-works" key={experience.year}>
                {experience.works.map((work) => (
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__experiences-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      {work.desc.split("-").map((desc, i) => (
                        <p className="p-text work-description" key={i}>{desc}</p>
                      ))
                      }
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="app__experiences-container" >
          {educations?.map((education) => (
            <motion.div
              className="app__experiences-item"
              key={education._id}
            >
              <div className="app__experiences-year">
                <p className="bold-text">{education.year}</p>
              </div>
              <motion.div className="app__experiences-works" key={education._rev}>
                {education.works.map((work, i) => (
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__experiences-work"
                      data-tip
                      data-for={work.name}
                      key={work._key}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experiences, 'app__experiences'),
  'experiences',
  'app__whitebg',
);
