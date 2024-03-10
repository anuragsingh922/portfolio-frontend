import React from 'react'
import css from './Skills.module.css';
import React_img from '../../Assets/image/skills/react.png';
import Express_img from '../../Assets/image/skills/express.png';
import MongoDB_img from '../../Assets/image/skills/mongodb.png';
import Node_img from '../../Assets/image/skills/node.png';
import Sql_img from '../../Assets/image/skills/sql.png';
import Vonage_img from '../../Assets/image/skills/Vonage.png';

function Skills() {
  return (
    <section id='skills'>
      <h3 className={css.heading}>Skills</h3>

      <ul className={css.ul}>
        <li className={css.li}>
            <a href="https://react.dev" target='_blank' rel="noreferrer"><img src={React_img} alt="" /></a>
            <h3>React.js</h3>
            </li>
        <li className={css.li}>
        <a href="https://nodejs.org/docs/latest/api/" target='_blank' rel="noreferrer"><img src={Node_img} alt="" /></a>
            <h3>Node.js</h3>
        </li>
        <li className={css.li}>
        <a href="https://expressjs.com/en/5x/api.html" target='_blank' rel="noreferrer"><img src={Express_img} alt="" /></a>
            <h3>Express.js</h3>
        </li>
        <li className={css.li}>
        <a href="https://www.mongodb.com/docs/" target='_blank' rel="noreferrer"><img src={MongoDB_img} alt="" /></a>
            <h3>MongoDB</h3>
        </li>
        <li className={css.li}>
        <a href="https://dev.mysql.com/doc/" target='_blank' rel="noreferrer"><img src={Sql_img} alt="" /></a>
            <h3>SQL</h3>
        </li>
        <li className={css.li}>
        <a href="https://developer.vonage.com/en/getting-started/overview?source=voice" target='_blank' rel="noreferrer"><img src={Vonage_img} alt="" /></a>
            <h3>Vonage</h3>
        </li>
    </ul>
    </section>
  )
}

export default Skills
