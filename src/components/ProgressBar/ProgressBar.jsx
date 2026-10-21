import {useEffect} from 'react'
import './progressBar.css'

function ProgressBar() {
    useEffect(() => {
    const handleScroll = () => {
      const s = document.documentElement.scrollTop;
      const h =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = document.getElementById('progress');

      if (progress && h > 0) {
        progress.style.width = `${(s / h) * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="progress-bar" id="progress"></div>
  )
}

export default ProgressBar