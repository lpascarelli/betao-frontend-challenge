import { useState } from 'react';

import data from '@app/periodic-table-data.json';
import '@app/components/PeriodicTable/PeriodicTable.css';

export default function PeriodicTable() {
  const [selectedBlock, setSelectedBlock] = useState('');

  const addBackgroundHandler = (block: string) => {
    setSelectedBlock(block);
  };

  const element = data.map((element) => {
    const blockStyle = ['element'];

    if (selectedBlock === element.block) {
      blockStyle.push(`bg-${selectedBlock}`);
    }

    return (
      <div
        className={blockStyle.join(' ')}
        key={element.name}
        onClick={() => addBackgroundHandler(element.block)}
        style={{
          gridRow: element.row,
          gridColumn: element.column,
        }}
      >
        <small className='number'>{element.atomicNumber}</small>
        <strong className='symbol'>{element.symbol}</strong>
        <small className='name'>{element.name}</small>
      </div>
    );
  });

  return <div className='periodic-table'>{element}</div>;
}
