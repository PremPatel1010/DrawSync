import React, { useRef } from 'react'
import { Layer, Stage , Circle, Line} from 'react-konva';
import {useState} from 'react';

const Canvas = () => {
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);


  const handleMouseDown = (e) => {
    console.log('Mouse Down', e);
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition(); // fixed typo
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  }

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    if (lines.length === 0) return; // prevent error if no lines

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastline = lines[lines.length - 1];

    // Defensive copy to avoid mutating state directly
    const newLines = lines.slice();
    newLines[newLines.length - 1] = {
      ...lastline,
      points: lastline.points.concat([point.x, point.y]),
    };
    setLines(newLines);
  }

  const handleMouseUp = () => {
    isDrawing.current = false;
  }

  return (
    <div>
      DrawSync Canvas
       <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <Stage width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}>
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default Canvas
