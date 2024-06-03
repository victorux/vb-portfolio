import React, { Children } from "react";
// import { Link } from 'react-scroll'
import styles from "../../styles/project.module.scss";
function AboutProject(props) {
  const roles = props.roles;
  return (
    <div>
      <div className={styles.aboutSection}>
        <div className={styles.leftBlock}>
          <span className={styles.sTitle}>About the project</span>
          <h1 className={styles.title}>{props.title}</h1>
          {props.children}
          <div className={styles.space30}></div>
          {props.showbtn && (
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Visit Website <span>→</span>
            </a>
          )}
        </div>
        <div className={styles.rightBlock}>
          <div>
            <span className={styles.sTitle}>My Role</span>
            <ul>
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <span className={styles.sTitle}>Client</span>
              <ul>
                <li>{props.client}</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <span className={styles.sTitle}>Date</span>
              <ul>
                <li>{props.date}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
