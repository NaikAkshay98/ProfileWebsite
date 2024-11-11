// Experience.js
import React from 'react';


const experiences = [
  {
    role: "Operations Analyst",
    company: "Zenan Glass – Toronto, Canada",
    date: "Dec 2022 - Present",
    techStack: "Excel (advanced functions, VBA, Power Query), Power BI for dashboards, and data cleaning, transforming, and combining.",
    responsibilities: [
      "Increased decision-making speed by 75% for management through Excel dashboards, focusing on inventory management and operational processes, leading to a 30% reduction in errors and improving stock control for over 10,000 units of inventory.",
      "Automated data workflows using Excel, reducing processing time from 5 hours to 3 hours daily, saving over 40 hours per month, and implemented data quality checks that resulted in a 25% decrease in data errors, ensuring 99% accuracy in inventory tracking.",
      "Led a project to automate key inventory processes using Excel, tracking metrics such as stock levels and reorder points, reducing order delays from 4 days to 2 days, and enhancing stock optimization, resulting in more order completion for 100+ orders per month."
    ]
  },
  {
    role: "Junior Software Developer",
    company: "Tata Consultancy Services Ltd – Mumbai, India",
    date: "Nov 2020 - June 2022",
    techStack: "React.js, Node.js, MongoDB, SQL, Python, RESTful APIs, real-time data processing, Server Side, scalable data management.",
    responsibilities: [
      "Integrated React.js with SQL databases to develop dynamic user interfaces, achieving a 40% improvement in application responsiveness and supporting robust transaction handling for applications processing over 1 million transactions monthly.",
      "Designed and implemented robust API services in Node.js, connecting React-based frontends with MongoDB, enhancing data retrieval speeds by 40% and effectively managing data for over 500,000 users, with the infrastructure scalable to support a 200% user base growth.",
      "Led the development of real-time data processing systems using React and Python, optimizing communication between the frontend and SQL backends, which increased customer satisfaction by 25% across three core products by enabling faster and more accurate data updates.",
      "Evaluated and tested new tools, leading to the integration of software that improved project outcomes by 70% and reduced resource allocation time from 8 hours to 5 hours per week, freeing up resources for $100K worth of additional projects annually."
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-role">{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-date">{experience.date}</p>
            <p className="experience-techStack">Tech Stack: {experience.techStack}</p>
            <ul className="experience-responsibilities">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx} className="responsibility-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
