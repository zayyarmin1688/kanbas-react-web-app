import { Link } from 'react-router-dom';

export default function TOC() {
  return (
    <div>
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
      </ul>
      {/* Zay Yar Min */}
      <a 
        href="https://github.com/zayyarmin1688/kanbas-react-web-app" 
        id="wd-github"
        target="_blank" 
        rel="noopener noreferrer"
      >
        View GitHub Repository
      </a>
    </div>
  );}


export {}
