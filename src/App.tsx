import { useState } from 'react';

import PeriodicTable from '@app/components/PeriodicTable';
import data from '@app/periodic-table-data.json';
import { getInvertedPeriodicTable } from '@app/utils';
import '@app/App.css';

export default function App() {
  const [isInverted, setIsInverted] = useState(false);

  const invertTableBidirectionallyHandler = () => {
    setIsInverted((prevState) => !prevState);
  };

  const periodicTableData = isInverted ? getInvertedPeriodicTable(data) : data;

  return (
    <div className='app'>
      <button onClick={invertTableBidirectionallyHandler}>Click me</button>
      <PeriodicTable periodicTableData={periodicTableData} />
    </div>
  );
}
