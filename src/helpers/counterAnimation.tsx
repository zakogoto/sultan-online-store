import { FC, useState, useEffect } from "react";

export const PriceAni: FC<{val: number, time: number}> = ({val, time}) => {
    const [ currVal, setCurrVal ] = useState(val);
  
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal ]);
  
    return <>{val}</>;
}