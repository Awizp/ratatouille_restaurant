import React, { useState, useRef } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'

import { meal } from '../../constants'
import './Video.scss'

const Video = () => {

    const [videoPlay, setVideoPlay] = useState(false)

    const videoRef = useRef()

    const handleVideoPlay = () => {
        setVideoPlay((prev) => (!prev))

        if (videoPlay) {
            videoRef.current.pause()
        }
        else {
            videoRef.current.play()
        }
    }

    return (
        <div className='video_container'>
            <video
                src={meal}
                ref={videoRef}
                type='video/mp4'
                controls={false}
                loop
                muted
            />

            <div className="video_overlay flex_center">
                <div
                    className="video_overlay_circle flex_center"
                    onClick={handleVideoPlay}
                >
                    {videoPlay ?
                        <BsFillPauseFill fontSize={30} color='#fff' /> :
                        <BsFillPlayFill fontSize={30} color='#fff' />
                    }
                </div>
            </div>
        </div>
    )
}

export default Video
