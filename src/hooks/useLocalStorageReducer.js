import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultValue = [], reducer){
    const [value, dispatch] = useReducer(reducer, defaultValue, defaultValue => {
            let val;
            try{
                val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
            }catch(e){
                val = defaultValue;
            }
            return val;
        });
        useEffect(()=>{
            window.localStorage.setItem(key, JSON.stringify(value))
        }, [key, value])
        return [value, dispatch];
    }

export default useLocalStorageReducer;