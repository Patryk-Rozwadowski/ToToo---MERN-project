import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import spinnerStyles from './styles/Spinner-material';

const SpinnerBuffer = () => {
  const classes = spinnerStyles();

  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const tick = () => {
      progress.current();
    };
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='spinner__container'>
      <div className={classes.root}>
        <LinearProgress
          variant='buffer'
          value={completed}
          valueBuffer={buffer}
        />
        <LinearProgress
          variant='buffer'
          value={completed}
          valueBuffer={buffer}
          color='secondary'
        />
      </div>
    </div>
  );
};

export default SpinnerBuffer;
