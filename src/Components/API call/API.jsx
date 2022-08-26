import useFetch from '../Hook/UseFetch';

function API() {

    const [ data, loading, error ] = useFetch('API END POINTS HERE');

    if(error) console.table(error);
    if(loading) <p> Loading ... </p>

  return (
    <div>
        {
            data.map((element, index) => {
                return (
                    // component here
                    <p key={index}>{ element }</p>
                )
            })
        }
    </div>
  )
}

export default API