import './App.css';
import ItemCard from '../src/components/card'


function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="item">
            <a 
              href="https://www.figma.com/file/TGvnlKPqnUjTmgmHYfO5YE/bike-shop?node-id=0%3A1"
              style={{ textDecoration: "none", color: "inherit"}}
              target="__blank"
            >
            <h3 style={{textAlign: 'center', paddingBottom: '20px'}}>Link to Figma Design File</h3></a>
            <ItemCard />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default App;
