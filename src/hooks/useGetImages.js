import axios from "axios";
import { useEffect, useState } from "react";

export const useGetGIFs = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const get10GIFs = () => {
      const url = `https://api.catboys.com/img`;

      // const options = { timeout: 3000 };

      axios
        .all([
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
          axios.get(url),
        ])
        .then(
          axios.spread(
            (gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10) => {
              // console.log(
              //   gif1,
              //   gif2,
              //   gif3,
              //   gif4,
              //   gif5,
              //   gif6,
              //   gif7,
              //   gif8,
              //   gif9,
              //   gif10
              // );

              setGifs([
                gif1.data.url,
                gif2.data.url,
                gif3.data.url,
                gif4.data.url,
                gif5.data.url,
                gif6.data.url,
                gif7.data.url,
                gif8.data.url,
                gif9.data.url,
                gif10.data.url,
              ]);
            }
          )
        );
    };
    get10GIFs();
  }, []);

  return { gifs };
};
