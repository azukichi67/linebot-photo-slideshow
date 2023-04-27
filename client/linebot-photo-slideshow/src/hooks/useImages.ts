import axios from "axios";
import { useCallback, useState } from "react";

export const useImage = () => {
    const [image, setImage] = useState<string>("");

    const getNextImage = useCallback(() => {
        axios
            .get<string>("/api/images/next-image")
            .then((result) => {
                const image = result.data;
                if (image) {
                    setImage(image);
                } else {
                    setImage("");
                }
            })
            .catch(() => {
                console.log("accsess error");
                setImage("");
            });
    }, []);

    return { image, getNextImage };
};
