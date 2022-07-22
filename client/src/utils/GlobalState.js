import React, { createContext, useContext } from "react";
import { usePictureReducer } from './reducers.js'

const PicContext = createContext();
const { Provider } = PicContext;

const PicProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = usePictureReducer({
    likes: [],
    shares: [],
    comments: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePicContext = () => {
  return useContext(PicContext);
};

export { PicProvider, usePicContext };
