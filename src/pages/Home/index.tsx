import { motion, useMotionValue, useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import * as S from './style';

export const HomePage: FC = () => {

  const [state, setState] = useState(false);


  const x = useMotionValue(0);
  const background = useTransform(x, [-100, 0, 100], ["#ff008c", "#7700ff", "rgb(230, 255, 0)"])

  return (
    <S.Container>
      <S.Content>
        <h2>Handle state </h2>

        <button onClick={() => setState(!state)}>change</button>
        <motion.div
          animate={state ? "open" : "closed"}
          variants={variants}
        >
          <S.Cube />
        </motion.div>
      </S.Content>

      <S.Content>
        <h2>Motion value</h2>
        <motion.div style={{ background, width: "200px", display: "grid", placeItems: "center" }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
          >
            <S.Cube format="circle" />
          </motion.div>
        </motion.div>
      </S.Content>
    </S.Container>
  )
}

const variants = {
  open: {
    display: "block"
  },
  closed: {
    display: "none"
  }
}
/* 
___________________________________________
1º
initial={{x:0, y:0}} 
animate={{x: direction.x, y:direction.y}}

onHoverStart={() => setDirections({
  x: direction.x + 60,
  y: direction.y + 60,
  })}
___________________________________________


*/
