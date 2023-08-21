import React, {useEffect} from 'react';
import {useFetch} from "../components/hooks/useFetch";
import {useLocation} from "react-router-dom";
import Filter from "../components/filter/Filter.jsx";
import {apis} from "../utils/apis";
import {ListElements} from "../components/listElements/ListElements.jsx";

function EpisodePage() {
    const {pathname} = useLocation();
    const {isLoading, data, error, lastNodeRef} = useFetch(apis.episode);



    return (
        <div>
            <h1>Episodes</h1>
            <Filter/>
            {isLoading && 'Загрузка...'}
            {error && error}
            <ListElements data={data} lastNodeRef={lastNodeRef} pathname={pathname} isLoading={isLoading}/>
        </div>
    );
}

export default EpisodePage;