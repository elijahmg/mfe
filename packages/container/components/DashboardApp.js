import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';


export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log({ mount })
    mount(ref.current)
  }, []);

  return <div ref={ref}/>;
};
