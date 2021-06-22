import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log('The value of timelineData is', timelineData);
  console.log('We should use timelineData in our project somehow...');
  
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Social Media Feed</h1>
      </header>
      <section className="App-main">
        <Timeline data={timelineData}/>
      </section>
    </div>
  );
}

export default App;