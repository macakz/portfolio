import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Feed from './Feed'
import '../../CSS/InstagramFeed.css'

const InstagramFeed = ({ token, ...props }) => {

    const [feeds, setFeedsData] = useState([])
    

    useEffect(() => {
        const abortController = new AbortController()

        async function fetchInstagramPost () {
            try {
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
                    .then((resp) => {
                        setFeedsData(resp.data.data)
                    })
            } catch (err) {
                console.log('error', err)
            }
        }
        fetchInstagramPost()
        return () => {
            abortController.abort()
        }
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstagramFeed;