import skills from "./data"
import Skill from "./Skill"

function Skills() {
  return (
    <div className="skills">
      {skills.map((el, idx) => {
        return <Skill skillsProp={el} key={idx} />
      })}
    </div>
  )
}

export default Skills
