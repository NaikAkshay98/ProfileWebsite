import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [isMoving, setIsMoving] = useState(Array(12).fill(false)); // State to track if a skill is moving

  // List of colors to apply to skill bubbles
  const colors = [
    'bg-blue-100', 'bg-green-100', 'bg-pink-100', 'bg-yellow-100', 'bg-purple-100'
  ];

  // Generate random coordinates within the container bounds
  const generateRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 300) - 150; // Range to keep within container
    const randomY = Math.floor(Math.random() * 300) - 150;
    return { x: randomX, y: randomY };
  };

  // Handle skill click to make it move continuously
  const handleSkillClick = (index) => {
    const newIsMoving = [...isMoving];
    newIsMoving[index] = !newIsMoving[index]; // Toggle moving state for the clicked skill
    setIsMoving(newIsMoving);
  };

  // Define unique motion variants for each bubble
  const getRandomMovement = () => ({
    move: {
      x: [generateRandomPosition().x, generateRandomPosition().x],
      y: [generateRandomPosition().y, generateRandomPosition().y],
      transition: {
        repeat: Infinity,
        duration: Math.random() * 4 + 2, // Random duration between 2s and 6s
        ease: "easeInOut",
      },
    },
  });

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-500">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          'React.js', 'Node.js', 'MongoDB', 'SQL', 'JavaScript',
          'Python', 'RESTful APIs', 'Power BI', 'Git & GitHub',
          'Figma', 'Heroku', 'Postman',
        ].map((skill, index) => (
          <motion.div
            key={index}
            className={`bubble ${colors[index % colors.length]}`} // Assign color based on index
            variants={getRandomMovement()} // Generate random movement for each bubble
            animate={isMoving[index] ? "move" : "initial"} // Start motion if clicked
            onClick={() => handleSkillClick(index)} // Toggle continuous movement on click
            whileHover={{ scale: 1.2 }} // Add hover effect
            whileTap={{ scale: 0.9 }} // Add tap effect
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
