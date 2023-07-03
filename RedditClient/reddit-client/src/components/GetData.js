import {useState, useEffect} from 'react';

export const GetData = () => {

    const [articles, setArticles] = useState([])
    const [subreddit, setSubreddit] = useState('Art')

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
            if (res.status !== 200) {
                console.log("errorororerrr");
                return;
            }

            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children)
                }
            })
        })
        console.log(articles)
    }, 
    [subreddit]
    )

    return <h1>{articles}</h1>;
}