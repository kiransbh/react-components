import React,{ useState, useEffect } from 'react';

function API() {

    const[ fetchAPI, setFetchAPI ] = useState([]);
    const[ error, setError ] = useState();

    // GET
    const fetchData = async () => {
        try {
            // setLoading(true);
            const response = await fetch('');

            if(!response.ok){
                throw new Error(
                    `HTTP error: ${ response.status }`
                )
            }

            const actualData = response.json();
            setFetchAPI(actualData);
            setError(null);

        }

        catch (error) {
            setError(error.message);
            setFetchAPI([]);
        } 

        // Add the below code, when your are using loading state
        // finally {
        //     setLoading(false);
        // }
    }

    // POST
    const postData = async () => {
        await fetch('',
        {
            // The values that want to get posted into the database
        });
    }

    useEffect(() => {
        fetchData();
        postData();
    }, []);

  return (<></>)
}

export default API