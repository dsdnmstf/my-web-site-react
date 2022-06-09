import React from "react";
import FooterVertical from "../components/FooterVertical";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div>
      <div className="project-bgImg-container">
        <Navbar />
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>

      <main className="projects">
        <div className="projects__items">
          <div className="projects__item">
            <a href="https://hidden-gorge-57276.herokuapp.com/" target="_blank">
              <img src="img/django-blogapp.jpeg" alt="Django Blog App" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://my-reactblog-app.netlify.app/" target="_blank">
              <img src="img/react-blog.jpeg" alt="Movie App" />
            </a>
            <div className="project-over">
              <p>
                Hi ipsum dolor sit amet consectetur adipisicing elit. Sed earum
                odit voluptatem modi optio. Animi sit voluptas perspiciatis
                soluta beatae unde molestiae quia optio enim consequuntur
                pariatur, consectetur voluptatem vero at tempora quibusdam
                deleniti in ducimus illo! Commodi quis cum omnis iste aliquam
                minima autem praesentium, pariatur, reiciendis eum hic?
              </p>
            </div>
          </div>

          <div className="projects__item">
            <a href="https://my-react-movi-app.netlify.app/" target="_blank">
              <img src="img/movieapp.jpeg" alt="Movie App" />
            </a>
          </div>
          <div className="projects__item">
            <a
              href="https://blooming-wave-32056.herokuapp.com/login"
              target="_blank"
            >
              <img src="img/django-todo.jpeg" alt="Django Todo" />
            </a>
          </div>
          <div className="projects__item">
            <a
              href="https://enigmatic-coast-28265.herokuapp.com/"
              target="_blank"
            >
              <img src="img/python-django-weatherapp.jpeg" alt="Django Todo" />
            </a>
          </div>

          <div className="projects__item">
            <a
              href="https://my-javascript-calculatorr.netlify.app/"
              target="_blank"
            >
              <img src="img/calculator.jpeg" alt="Calculator" />
            </a>
          </div>

          <div className="projects__item">
            <a
              href="https://my-react-expence-tracker.netlify.app/"
              target="_blank"
            >
              <img src="img/expence-tracker.jpeg" alt="React Expence tracker" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://my-react-todoappp.netlify.app/" target="_blank">
              <img src="img/todo1.jpeg" alt="React Todo App" />
            </a>
          </div>
          <div className="projects__item">
            <a
              href="https://my-first-react-todoapp.netlify.app/"
              target="_blank"
            >
              <img src="img/todo2.jpeg" alt="React Todo App" />
            </a>
          </div>
          <div className="projects__item">
            <a href="https://my-react-tour-app.netlify.app/" target="_blank">
              <img src="img/react-tour.jpeg" alt="React Tour Project" />
            </a>
          </div>

          <div className="projects__item">
            <a href="https://my-html-css-webpage.netlify.app/" target="_blank">
              <img src="img/html-css-webpage.jpeg" alt="Django Blog App" />
            </a>
          </div>
          <div className="projects__item">
            <a
              href="https://my-javascript-freemealapp.netlify.app/"
              target="_blank"
            >
              <img src="img/js-freemeal.jpeg" alt="Django Blog App" />
            </a>
          </div>
        </div>
      </main>
      <FooterVertical />
    </div>
  );
};

export default Projects;
