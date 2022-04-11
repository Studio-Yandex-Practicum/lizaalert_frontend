/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef } from 'react';
import defaultVideo from '../../../assets/video/Clean Swell Hits Canggu.mp4';

import { Icon } from '../../atoms';
import styles from './video-player.module.scss';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const videoRef = useRef(null);

  const playHandler = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
      setVideoTime(videoRef.current.duration);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const updateProgressHandler = () => {
    setVideoCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div className={styles.playerContainer}>
      <video
        className={styles.video}
        ref={videoRef}
        id="video"
        onTimeUpdate={updateProgressHandler}
      >
        <source src={defaultVideo} type="video/mp4" />
      </video>
      <div className={styles.videoControls}>
        <button
          className={styles.playpause}
          type="button"
          onClick={playHandler}
        >
          {isPlaying ? (
            <Icon type="dragHandle" maxWidth={18} maxHeight={18} />
          ) : (
            <Icon type="play" maxWidth={18} maxHeight={17} />
          )}
        </button>
        <div className={styles.progressContainer}>
          <span
            className={styles.progressBar}
            style={{ width: `${(videoCurrentTime / videoTime) * 100}%` }}
          />
          <Icon
            type="dragCircle"
            maxWidth={20}
            maxHeight={20}
            className={styles.progressDot}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
