/**
 * Copyright(C) 2022 freelancer.com/AfterHoursTech
 * ALL RIGHTS RESERVED. NOT OPEN SOURCE.
 */
 import { useEffect, useState } from 'react';

const API_SEARCH = 'http://stg-cth-1.us-west-1.elasticbeanstalk.com/listings/search-x.api';

function useSearchService(filterState) {

    const [data, setData] = useState();

    function reset() {
        setData(null);
    }

    useEffect(() => {
        if (filterState.keywords === '') return;
        // console.log(filterState);

        reset();
        fetch(API_SEARCH, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            filterState
          )
        })
          .then(response => response.json())
          .then(data => { setData(data); })
          .catch(error => console.log(error))
      }, [filterState]);

    return data;
}

export { API_SEARCH, useSearchService };