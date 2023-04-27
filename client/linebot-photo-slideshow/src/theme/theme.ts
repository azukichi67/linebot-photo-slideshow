import { extendTheme } from "@chakra-ui/react";
import backGroundImage from "../assets/images/back-ground.png";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundImage: `url(${backGroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            },
        },
    },
});

export default theme;
