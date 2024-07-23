import React from "react";
import "./homeStyle.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <button>Option 1</button>
            </li>
            <li>
              <button>Option 2</button>
            </li>
            <li>
              <button>Option 3</button>
            </li>
            <li>
              <button>Option 4</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div className="dashboard">
          <div className="card large">Selecciona un grupo</div>
          <div className="card small">Selecciona un grupo</div>
          <div className="card small">Selecciona un grupo</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
