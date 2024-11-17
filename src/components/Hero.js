import React, { useState, useEffect, useRef } from 'react';
import astronautImg from './ANimg.png'; // Static image
import astronautGif from './ANmp4.gif'; // GIF image

function Hero() {
  const heroRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSkillPlaying, setIsSkillPlaying] = useState(false);
  const [isConnectPlaying, setIsConnectPlaying] = useState(false);
  const [animatedText, setAnimatedText] = useState([]);
  const [poppedWord, setPoppedWord] = useState('');
  const [wordPosition, setWordPosition] = useState({ top: '50%', left: '50%' });

  const aboutMeParagraph =
    "I'm a developer who loves bringing web interfaces to life—making them so interactive and engaging that even your grandma might want to code. With a solid background in React, I enjoy turning complex code into simple, intuitive applications (because who needs extra drama?). Whether it’s perfecting front-end details or tackling back-end architecture, I'm all about collaboration, innovation, and getting things done right. Every line of code is a chance to solve a problem or, at the very least, make the Internet a slightly better place. And yes, I’m pretty serious about writing code, but not so serious that I’d skip a good coffee pun.";

  const skillsParagraph =
    "As a developer, I bring a toolkit packed with essentials. React.js and Node.js are my go-tos for building web apps that don’t just work—they shine. MongoDB and SQL keep my data game strong, balancing the NoSQL and SQL worlds.\n\n" +
    "JavaScript ? Fluent. Python ? My trusty backup for when things get serious (or I need to impress my CS friends). I create RESTful APIs with care, and Power BI is my canvas for data stories.\n\n" +
    "Version control? Git & GitHub are my time machines. Figma fuels my design insights, ensuring my work is not just functional but also user-friendly. With Heroku, my apps go live effortlessly, and Postman keeps my APIs in check.\n\n" +
    "If you’re looking for someone who brings a blend of skills, humor, and reliability, let's connect!";

    const connectParagraph =
    "Absolutely, I'd love to connect! Whether you're here to brainstorm the next big idea, get a fresh perspective on a project, or simply say hello, I’m all ears. And hey, don’t be shy—I'm just one email or call away from diving into something exciting together! \n\n "+

"You can reach me through: \n\n"+

"📧 akshay.h.naik@gmail.com  \n\n"+
"📞 +1 (647) 898-8160 \n\n"+

"Looking forward to some brilliant conversations, creative sparks, and maybe even a few laughs along the way! Let's make something amazing happen!";

  const targetWords = [
    'developer', 'React', 'collaboration', 'innovation', 'problem', 'complex code',
    'React.js', 'Node.js', 'MongoDB', 'SQL', 'NoSQL', 'JavaScript',
    'Python', 'RESTful APIs', 'Power BI', 'Git & GitHub',
    'Figma', 'Heroku', 'Postman', 'connect', 'collaborate', 'akshay.h.naik@gmail.com'
  ];

  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = heroRef.current;
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const togglePlay = (type) => {
    if (type === 'aboutMe') {
      setIsPlaying((prev) => !prev);
      setIsSkillPlaying(false);
      setIsConnectPlaying(false);
    } else if (type === 'aboutSkills') {
      setIsSkillPlaying((prev) => !prev);
      setIsPlaying(false);
      setIsConnectPlaying(false);
    } else if (type === 'connect') {
      setIsConnectPlaying((prev) => !prev);
      setIsPlaying(false);
      setIsSkillPlaying(false);
    }

    clearInterval(intervalRef.current);
    setAnimatedText([]);
    setPoppedWord('');
    animateText(type);
  };

  const animateText = (type) => {
    const text = type === 'aboutMe' ? aboutMeParagraph : type === 'aboutSkills' ? skillsParagraph : connectParagraph;
    const words = text.split(' ');
    let currentIndex = 0;
    setAnimatedText([]);
    clearInterval(intervalRef.current);

    const playNextWord = () => {
      if (currentIndex < words.length) {
        const currentWord = words[currentIndex];
        setAnimatedText((prev) => [...prev, currentWord]);
        setPoppedWord(currentWord);

        setWordPosition({
          top: `${15 + Math.random() * 20}%`,
          left: `${55 + Math.random() * 20}%`,
        });

        const duration = targetWords.includes(currentWord) ? 1000 : 200;

        intervalRef.current = setTimeout(playNextWord, duration);
        currentIndex++;
      } else {
        clearInterval(intervalRef.current);
      }
    };

    playNextWord();
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div className={`hero-text-container ${isPlaying || isSkillPlaying || isConnectPlaying ? 'fade-out' : 'fade-in'}`}>
          <h1 className="hero-title">Akshay Naik</h1>
          <p className="hero-description">
            Full Stack Developer with React Expertise | UI/UX Designer & Developer | Bridging the Gap Between Frontend and Backend Technologies
          </p>
        </div>

        <div className="button-container">
          <div className="button-row">
            <button
              className="play-pause-button"
              onClick={() => togglePlay('aboutMe')}
            >
              {isPlaying ? 'About me ⏸️' : 'About me ▶️'}
            </button>
            <button
              className="play-pause-button"
              onClick={() => togglePlay('aboutSkills')}
            >
              {isSkillPlaying ? 'About my skills ⏸️' : 'About my skills ▶️'}
            </button>
          </div>
          <button
            className="play-pause-button connect-button"
            onClick={() => togglePlay('connect')}
          >
            {isConnectPlaying ? "Let's Connect ⏸️" : "Let's Connect ▶️"}
          </button>
        </div>

        {(isPlaying || isSkillPlaying || isConnectPlaying) && (
          <p className="animated-paragraph">
            {animatedText.map((word, index) => (
              <span
                key={index}
                className={targetWords.includes(word) ? 'highlighted-word' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        )}
        {(isPlaying || isSkillPlaying || isConnectPlaying) && (
          <div
            className={`popped-word ${targetWords.includes(poppedWord) ? 'highlighted-word' : ''}`}
            key={poppedWord}
            style={{
              top: wordPosition.top,
              left: wordPosition.left,
              animation: 'popOut 1s forwards',
              animationDuration: targetWords.includes(poppedWord) ? '2s' : '1s',
            }}
          >
            {poppedWord}
          </div>
        )}
      </div>
      <div className="hero-image">
        <img
          src={isPlaying || isSkillPlaying || isConnectPlaying ? astronautGif : astronautImg}
          alt="Astronaut"
          className={`hero-image-img ${isPlaying || isSkillPlaying || isConnectPlaying ? 'playing' : 'paused'}`}
        />
      </div>
      <style>{`
        .hero-text-container {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-out {
          opacity: 0;
          transform: translateY(-20px);
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem; /* Spacing between rows */
          margin-top: 2rem;
        }

        .button-row {
          display: flex;
          gap: 1rem; /* Spacing between buttons */
          justify-content: center;
        }

        /* Special styling for the connect button */
        .connect-button {
          background-color: #ffcc00;
          color: #000;
          font-size: 1rem;
        }

        .connect-button:hover {
          background-color: #ffaa00;
          color: #fff;
          border-color: #ffaa00;
        }

        .play-pause-button {
          padding: 8px 16px;
          cursor: pointer;
        }

        .popped-word {
          position: absolute;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
          opacity: 0;
        }

        .highlighted-word {
          font-weight: bold;
          color: #FFD700; /* Gold color for highlights */
          animation: highlightPulse 2s infinite;
        }

        @keyframes popOut {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -150%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes highlightPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        /* Add spacing for mobile responsiveness */
        @media (max-width: 768px) {
          .button-container {
            margin-top: 1.5rem;
          }
          .play-pause-button {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }

      `}</style>
    </section>
  );
}

export default Hero;
