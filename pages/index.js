import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects, certifications, educations, languages } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/andy-cruz-profile.jpg" alt="img-profile" className="img-size" />
            </div>
            <div className="col-md-8">
              <h1>Andy Cruz</h1>
              <h3>Egresado Ingeniería de sistemas | Data Analyst | BI | Data Science | Data Engineering</h3>
              <p>
              Egresado en la carrera de Ingeniería de Sistemas en la Universidad Nacional de Ingeniería, con experiencia en análisis de datos, base de datos y programación, con mucho interés en el mundo de los datos: Data Science, Data Analytics y Data Engineering.
              </p>
              <Link href="/github">
                <a className="btn btn-outline-light" >Contactame</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <section className="row text-light">
      <div className="col-md-4 py-2">
        <div className="card bg-dark animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Habilidades</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage, level }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <h6>{level}</h6>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
      <div className=" card bg-light text-dark animate__animated animate__fadeInRight">
        {/* Experience */}
          <div className="card-body">
            <h1>Experiencia</h1>
            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title,from,task1,task2,task3,task4, to  }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {task1}
                  </p>
                  <p>
                    {task2}
                  </p>
                  <p>
                    {task3}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        {/* Certifications */}
        <div className=" card bg-light text-dark animate__animated animate__fadeInRight">
        <div className="card-body">
            <h1>Certificaciones y cursos</h1>
            <ul>
              {/* List Item Certifications */}
              {certifications.map(({title,description, from, to  }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
            </div>
            </div>

         {/* Education */}
         <div className=" card bg-light text-dark animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Educacion Universitaria</h1>
            <ul>
              {/* List Item Educations */}
              {educations.map(({title,description, from, to  }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          </div>

          {/* Languages */}
          <div className=" card bg-light text-dark animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Idiomas</h1>
            <ul>
              {/* List Item Educations */}
              {languages.map(({language,level}, index) => (
                <li key={index}>
                  <h3>{language}</h3>
                  <h6>{level}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
      
    </section>  

    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Proyectos</h1>
              </div>
              {projects.map(({ name, description, link,image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <a href={`${link}`}>
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                      </a>
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      
                      <a href={`${link}`}>Conoce mas</a>

                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="https://github.com/andycruz47?tab=repositories">
                    <a className="btn btn-outline-light">Mas proyectos</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </Layout>
);
export default Index;
