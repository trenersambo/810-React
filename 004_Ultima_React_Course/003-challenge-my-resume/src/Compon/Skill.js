function Skill({ skillsProp }) {
  return (
    <div className="skill-item" style={{ backgroundColor: skillsProp.color }}>
      <span>{skillsProp.skill}</span>

      <span>
        {skillsProp.level === "beginner" && "👶"}
        {skillsProp.level === "intermediate" && "👍"}
        {skillsProp.level === "advanced" && "💪"}
      </span>
    </div>
  )
}

export default Skill
