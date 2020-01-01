import { useState } from 'react';

const Seconds = () => {
  /*
  state = { seconds: 0 };

  componentDidMount() {
    this.intervalId = setInterval(() => {
        this.setState(state => ({ seconds: state.seconds + 1 }));
       }, 1000)  
  }

  componentWillMount() {
    clearInterval(this.intervalId);
  }*/

  //useEffect: componentDidMount, did update, will unmount
  const [seconds, setSeconds] = useState(0);
  return seconds;
}

export default Seconds;