import React from 'react'
import MaxWidthWrapper from '../ui/max-width'
import FrontendSkills from '../FrontendSkills'
import BackendSkills from '../BackendSkills'
import DevTools from '../Tools'
import SoftSkills from '../SoftSkills'
const Skills = () => {
  return (
    <MaxWidthWrapper>
        <div className="p-2 py-10">
          <div className=''>
            <FrontendSkills />
            <BackendSkills />
            <DevTools />
            <SoftSkills />
          </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Skills