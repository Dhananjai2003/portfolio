import React from 'react'

const SkillBadge = (props) => {

  const styleAtt = 'hover:bg-cyan-500 layers border-2 pr-2 pl-2 rounded-lg text-xl font-extrabold m-1 ' + props.flick
  return (
    <div className={styleAtt}>
      {props.skill}
    </div>
  )
}

export default SkillBadge
