import gifImage from './ANmp4.gif';

function About() {
  return (
    <section id="about">
      
      {/* Using the imported GIF */}
      <div className="gif-container">
        <img 
          src={gifImage} 
          alt="Animated GIF" 
        />
      </div>
      
      <p className="about-description">
      I'm a software developer with a fervor for crafting interactive and responsive web interfaces that captivate and engage. With a solid foundation in React development, I relish the challenge of transforming complex code into user-friendly applications. Whether it's enhancing user interfaces with React.js or architecting robust backend solutions. Known for my meticulous attention to detail and innovative approach, I enjoy collaborating with teams to pioneer solutions that drive business success. I believe every line of code is an opportunity to solve a problem, and I'm passionate about using my skills to make a significant impact on both user experience and organizational goals.
      </p>
    </section>
  );
}

export default About;
