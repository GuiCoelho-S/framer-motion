import { FC, useState } from "react";
import * as S from './style'
import Framer from '../../assets/img/framer.png';
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import { LinkNavigation } from "../LinkNaviagation";
import Routes from "../../routes.json"
import { v4 as id } from "uuid";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

export const Dropdown:FC = () => {

  const [ dropdownState, setDropdownState ] = useState(false);

  console.log(Routes.content)
  return (

    <motion.div

    variants={dropdownAnimate}
    animate={ dropdownState ? "open" : "closed"}
    transition={{ duration: 0.8 }}

    style={{position: "absolute", right:0, top:0 }}
    >
      
    <S.DropdwonContainer >
           <S.Header>
        <img src={Framer} alt='framer logo' />
        <h1>Framer examples</h1>
        <button onClick={() => setDropdownState(!dropdownState)}>
        { dropdownState ? <AiOutlineClose/> : <AiFillCaretDown/>}
        </button>
      </S.Header>
      <AnimatePresence>
        {
          dropdownState && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: [0,0,1,1] }}
              exit={{ display:"none" }}
              transition={{ duration:1, type: "tween" }}
            >
              <S.ListComponents>
              {
                Routes.content.map((route: { name: string, path: string}) => (
                  <LinkNavigation path={route.path} children={route.name} key={id()}/>))
              }
            </S.ListComponents>
            </motion.section>
            
          )
      }
      </AnimatePresence>
      
    </S.DropdwonContainer>
 
    </motion.div>
 
  );
}

const dropdownAnimate = {
  "open": {
    height:  `var(--dropdown-height-open)`,
    transition: {
      when: "beforeChildren",
      staggerChildren: 9.3,
    }
  },
  "closed": {
    height: `var(--dropdown-height-closed)`,
  }
}