import { FC, memo } from "react";
import { FallImage } from "../atoms/FallImage";
import { motion } from "framer-motion";

export const SlideShow: FC = memo(() => {
    return (
        <motion.div
            style={{
                position: "relative", // 親要素を相対位置に設定
                width: "100vw", // 親要素の幅を画面いっぱいに設定
                height: "100vh", // 親要素の高さを画面いっぱいに設定
                overflow: "hidden", // 画面外に出た部分を非表示にする
            }}
        >
            <FallImage delay={0} />
            <FallImage delay={3} />
            <FallImage delay={6} />
            <FallImage delay={9} />
            <FallImage delay={12} />
        </motion.div>
    );
});
