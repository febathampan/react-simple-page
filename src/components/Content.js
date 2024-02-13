import React from "react";
import Banner from "./Banner";
import Section from "./Section";
import "../App.css";

/**The Content component accomodates all the main information in the web page */
class Content extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/** The Content component further utilises other components - Banner & Section. The
          Section component is reused with different data and parameters. */}
          <Banner />
          <Section
            title="Professional Summary"
            data="I am a Software Developer with 5 years of experience in Java and other backend technologies. I have worked in various business domains such as B2B e-commerce, freight logistics, wealth management, and offshore. I have expertise in Java with SpringBoot and Spring and in Databases(relational such as MySQL, SQL Server, PostgreSQL, Oracle, and Non-relational such as MongoDB). Apart from this, I have a good understanding of Agile practices and DevOps technologies (CI/CD with Jenkins, Docker, and Kubernetes).
I have been awarded performance awards from my previous organizations based on my consistency in exceptional delivery. I have a knack for research and development, and I would like to take up challenging projects and provide good solutions. I am collaborative, but I also can work independently. I have mentored small groups of people(3-5) in my organizations. I have associated with organizations of various sizes - start-ups, mid-sized and MNCs."
            bg="bg-baby-blue"
          />
          <Section
            title="Top Skills"
            subhead=" Java | SpringBoot | MySQL | MongoDB | Kubernetes | Docker | Liquibase | Agile"
            data="Specializing in back-end development, I excel in frameworks like SpringBoot and Spring MVC, with expertise in databases such as MySQL, PostgreSQL, and MongoDB. My experience includes CI/CD integrations and microservices, demonstrating a strong grasp of the software development life cycle. Recognized for standout contributions in previous roles, I actively support teammates through mentoring and collaborative problem-solving. Emphasizing effective communication, I consistently collaborate across teams to deliver high-quality solutions."
            bg="bg-cream"
          />
          <Section
            title="How do you hire me?"
            subhead="Email : thampan.feba@gmail.com | Phone : (123) 456-7890"
            data="I am available to start immediately. I hope I would be a good fit to your organization."
            bg="bg-baby-blue"
          />
        </div>
      </div>
    );
  }
}
export default Content;
