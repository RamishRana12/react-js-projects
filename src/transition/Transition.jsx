import { motion } from 'framer-motion';
import logo from '../navigation/images/mainlog.png'
const Transition = (Ogcomponent) => {
    return () => (
        <>
            <Ogcomponent />
            {/* <motion.div
                className="slide-in"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0}}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                </motion.div> */}
            <motion.div
                className="slide-out"
                initial={{ opacity:1,scaleX:1}}
                animate={{ opacity:0,scaleX: 0}}
                transition={{ duration: 3,delay:2 }}
                viewport={{once:true}}
            > < motion.img initial={{y:-200}}
            animate={{y:0 }}

            transition={{duration:2}}
            src={logo} alt="" style={{height:"150px",width:'150px'}}/></motion.div>
        </>
    );
};
export default Transition;
