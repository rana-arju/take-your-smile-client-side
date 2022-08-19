import React, { useEffect, useState } from "react";

const UsePackage = (pack) => {
  const [packag, setPackage] = useState([]);
  useEffect(() => {
    const url = `https://secure-escarpment-79738.herokuapp.com/package/${pack}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackage(data));
  }, [pack]);
  console.log(packag);
  return [packag];
};

export default UsePackage;