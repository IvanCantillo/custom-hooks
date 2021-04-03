import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({data: null, loading: true, error: null});

        fetch( url )
            .then( res => res.json() )
            .then( data => {
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( () => {
                setState({
                    loading: false,
                    error: 'Error al cargar la info',
                    data: null
                });
            })
    }, [url]);

    return state;
}
// const url = 'https://www.breakingbadapi.com/api/quotes/100'
