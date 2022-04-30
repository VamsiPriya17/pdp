import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
function TickSvg({ start }) {
  const [tickPath, setTickPath] = useState(0)
  useEffect(() => {
    setTickPath(start)
  }, [start])
  const svgVarients = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  }
  const pathVarients = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: tickPath,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <div className="">
      <motion.svg
        variants={svgVarients}
        className="relative h-[50px]"
        viewBox="0 0 50 50"
      >
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke="white"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ translateX: 5, translateY: 5 }}
        />
        <motion.path
          fill="none"
          transition={{ ease: 'easeInOut', duration: 2 }}
          strokeWidth="2"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
        />
      </motion.svg>
    </div>
  )
}

export default TickSvg
