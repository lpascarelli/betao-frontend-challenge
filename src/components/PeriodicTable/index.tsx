import { useState } from 'react';

import { Element } from '@app/interfaces';
import '@app/components/PeriodicTable/PeriodicTable.css';

interface PeriodicTableProps {
  periodicTableData: Element[];
}

export default function PeriodicTable({
  periodicTableData,
}: PeriodicTableProps) {
  const [selectedBlock, setSelectedBlock] = useState('');

  const addBackgroundHandler = (block: string) => {
    setSelectedBlock(block);
  };

  const element = periodicTableData.map((element) => {
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
