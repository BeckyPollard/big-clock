import React from 'react';

type BigClockProps = {
  greeting: string;
};

export default function BigClock(props: BigClockProps) {
  console.log(
    '%cHELLO WORLD (helloWorld.js)',
    'background: #FF91AF; padding: 10px; color: #fff;'
  );
  console.log(
    '%c↑ Example code, you should remove',
    'background: #FF91AF; padding: 10px; color: #fff;'
  );

  return (
    <main>
      <h1>00:00:00</h1>
    </main>
  );
}
