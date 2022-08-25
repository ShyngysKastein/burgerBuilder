import React, { useEffect, useRef, useState } from "react";
import Modal from "../components/UI/Modal/Modal";

const withError = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    const isFirstRender = useRef(true);
    const ic = useRef(null);

    useEffect(() => {
      if(ic.current === null){
        ic.current = axios.interceptors.response.use(
            (res) => res,
            (err) => {
                setError(err);
                throw err;
            }
        )
      }

      return () => {
        if(isFirstRender.current){
            isFirstRender.current = false
        }else{
            axios.interceptors.response.eject(ic.current);
        }
      }
    }, []);

    const errorDismissed = () => {
      setError(null);
    };

    return (
          <>
            <Modal show={!!error} closed={errorDismissed}>
              {error?.message}
            </Modal>
            <WrappedComponent {...props} />
          </>
    );
  };
};

export default withError;
