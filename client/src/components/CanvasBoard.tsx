// components/CanvasEditor.jsx
import React, { useEffect, useRef } from 'react';
import  fabric  from 'fabric';

const CanvasEditor = () => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null); // Store fabric instance

  useEffect(() => {
    // Initialize Fabric canvas
    fabricRef.current = new fabric.Canvas(canvasRef.current, {
      height: 500,
      width: 800,
      backgroundColor: '#fff',
    });

    // Example: add a rectangle
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'blue',
      width: 150,
      height: 100,
    });

    fabricRef.current.add(rect);

    // Cleanup
    return () => {
      fabricRef.current.dispose();
    };
  }, []);

  const addText = () => {
    const textbox = new fabric.Textbox('Edit me!', {
      left: 200,
      top: 200,
      fontSize: 24,
      fill: 'black',
    });
    fabricRef.current.add(textbox);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fabric.js Canvas Editor</h2>
      <canvas ref={canvasRef} className="border shadow-lg" />
      <div className="mt-4 space-x-4">
        <button onClick={addText} className="bg-pink-600 text-white px-4 py-2 rounded">
          Add Text
        </button>
        {/* Add more buttons for shapes, images, export, etc. */}
      </div>
    </div>
  );
};

export default CanvasEditor;
