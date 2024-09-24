import { Route, Routes, Navigate } from 'react-router-dom';
import Lab1 from './Lab1';
import Lab2 from './Lab2/index';
import Lab3 from './Lab3/index';
import TOC from './TOC'; 

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>Zay Yar Min</p> {/* Zay Yar Min, I have no idea where I'm supposed to add this thing */}
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
      <TOC />
    </div>
  );
}
