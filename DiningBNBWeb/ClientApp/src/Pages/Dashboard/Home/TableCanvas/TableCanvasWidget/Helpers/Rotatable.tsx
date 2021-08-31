import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { TableWidgetProps } from './TableWidgetProps';
import { ReloadOutlined } from '@ant-design/icons';
import styles from './Rotatable.module.scss';
import { useEffect } from 'react';

const Rotatable = (Widget: React.ComponentType<TableWidgetProps>) => function C(props: TableWidgetProps) {
  const [rotatable, setRotatable] = useState(false);
  const [angle, setAngle] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rotatable) {
      const moveListener = (evt: MouseEvent) => {
        if (ref.current) {
          const rectangle = ref.current.getBoundingClientRect();
          const x = (rectangle.left + rectangle.right) / 2;
          const y = (rectangle.top + rectangle.bottom) / 2;

          const { x: x2, y: y2 } = evt;

          const xdiff = x2 - x;
          const ydiff = y2 - y;

          setAngle(Math.atan2(ydiff, xdiff) - Math.PI/4);
        }
      }
      window.addEventListener('mousemove', moveListener);

      const upListener = (evt: MouseEvent) => {
        setRotatable(false);
      }
      window.addEventListener('mouseup', upListener);
    
      return () => { 
        window.removeEventListener('mousemove', moveListener);
        window.removeEventListener('mouseup', upListener);
        
        //document.body.style.cursor = 'default';
      }
    }
    
  }, [rotatable])
  const onMouseDown: MouseEventHandler<HTMLSpanElement> = evt => {
    setRotatable(true);
    console.log(evt.target)
    evt.stopPropagation();
    evt.preventDefault();
  }

  return (
    <div className={styles.Rotatable} style={{ transform: `rotate(${angle}rad)` }} ref={ref}>
      <Widget {...props} />

      <ReloadOutlined className={styles.RotateButton} onMouseDown={onMouseDown} />
      {rotatable && <div className={styles.InvisibleFullScreen}></div> }
    </div>);
}

export default Rotatable;