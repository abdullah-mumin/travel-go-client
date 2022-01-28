import { useEffect, useState } from "react";

const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://boiling-brushlands-56519.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setItems(data);

            });
    }, []);

    return [items, setItems];
}

export default useData;