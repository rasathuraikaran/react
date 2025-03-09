function Car(propsd) {
 const { carprop } = propsd;
 const { brand1, brand2 } = carprop;
 const text = `It is a ${brand1} and   ${brand2} car`;
 return <h2>{text}</h2>;
}

export default Car;
