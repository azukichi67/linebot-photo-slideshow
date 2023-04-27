import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, memo, useEffect, useState } from "react";
import { useImage } from "../../hooks/useImages";

type Props = {
    delay: number;
};

export const FallImage: FC<Props> = memo((props) => {
    const { delay } = props;
    const { image, getNextImage } = useImage();
    const [count, setCount] = useState(0);

    const createXPotision = (): number => {
        return Math.floor(Math.random() * 1500);
    };

    const createRotate = (): number => {
        return Math.floor(Math.random() * 61) - 30;
    };

    const handleAnimationComplete = () => {
        getNextImage();
        setCount(count + 1);
    };

    useEffect(() => {
        getNextImage();
    }, []);

    return (
        <motion.div
            key={count}
            style={{
                position: "absolute",
                top: -1000, // 画面外上部に配置
                x: createXPotision(),
                rotate: createRotate(),
            }}
            animate={{
                top: "120vh", // 画面外下部まで移動
            }}
            transition={{
                duration: 20, // アニメーションの時間
                easings: "linear",
                delay: delay,
            }}
            onAnimationComplete={handleAnimationComplete}
        >
            {image ? (
                <Image
                    src={`data:image/jpg;base64,${image}`}
                    alt="画像"
                    maxW="30%"
                    w="100%"
                    border="8px solid white"
                    borderRadius="lg"
                    shadow="lg"
                />
            ) : (
                <div></div>
            )}
        </motion.div>
    );
});
