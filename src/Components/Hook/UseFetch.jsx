import { useState, useEffect } from 'react'

function UseFetch(url) {

    const[ data, setData ] = useState([]);
    const[ loading, setLoading ] = useState(false);
    const[ error, setError ] = useState(null);

    const DEFAULT_OPTIONS = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {
        try {
            setLoading(true);
            fetch(url, DEFAULT_OPTIONS)
            .then(response => {
                if(!response.ok){
                    throw new Error(`Error status: ${ response.status }`);
                }
                return response.json();
            })
            .then(data => setData(data));
            setError(null);

        } catch (error) {
            setError(error);
            setData(null);
        }

        finally{
            setLoading(false)
        }
    }, [url]);

  return { data, error, loading };
  
}

export default UseFetch