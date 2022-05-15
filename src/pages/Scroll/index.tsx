import { useAnimation, useViewportScroll, motion } from "framer-motion";
import { useAnimatedState } from "framer-motion/types/animation/use-animated-state";
import { FC, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "./style";

export const ScrollPage: FC = () => {

  const boxVariant = {
    visible: { x: [0, 100, 0] },
    hidden: { x: 0 }
  }
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];


  /* EXAMPLE 02*/

  const controlsEx2 = useAnimation();

  useEffect(() => {

    controlsEx2.start(i => ({
      x: 100,
      opacity: 0,
      transition: { delay: i * 0.3 }
    }))
  }, [])
  /* EXAMPLE 03*/

  const controlsEx3 = useAnimation();
  const [state, setState] = useState(false);

  const pageColors = [
    { slug: "Página 02", color: "#92e1fc" },
    { slug: "Página 03", color: "#c1fc92" },
    { slug: "Página 04", color: "#fcd192" },
  ]

  useEffect(() => {

    if (state) {
      controlsEx3.start((i: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.3, duration: 1 }
      }))
    }
  }, [state])

  return (
    <S.Container>
      <p>Hello scroll page </p>

      <S.Testing
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 3, duration: 2 }} />

      <motion.ul variants={list} initial='hidden' animate='visible'>

        <h3>Lista de produtos</h3>
        {
          arr.map((itemA, index) => (
            <motion.li
              key={index}
              variants={item}
            >{itemA}</motion.li>))
        }
      </motion.ul>

      <S.Example2>
        {
          arr.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              initial={{ x: "-100%" }}
              animate={controlsEx2}>{item}</motion.li>))
        }
      </S.Example2>

      <S.Example03>
        Página 01
        <button onClick={() => setState((prev) => !prev)}>
          <AiOutlineClose />
        </button>
        {
          pageColors.map((page, index) => (
            <S.Pages
              bg={page.color}
              key={index}
              custom={index}
              initial={{ x: "100%", opacity: 1 }}
              animate={controlsEx3}
            >{page.slug}</S.Pages>
          ))
        }
      </S.Example03>
    </S.Container>
  )
}
