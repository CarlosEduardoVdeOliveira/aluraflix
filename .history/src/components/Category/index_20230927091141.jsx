/* eslint-disable react/prop-types */
import { Button } from "../Button";

export const Category = ({id, children, color, description, bgColor}) => {

  return (
    <>
      <Button 
        id={id}
        color={'#FFF'}
        bgColor={bgColor}
        onClick={()=> (id)}
        title={description}
        borderColor={color}
      >
        {children}
      </Button>
    </>
  );
};
