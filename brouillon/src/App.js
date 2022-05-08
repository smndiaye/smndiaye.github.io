import './App.css';
import DakkantalV2 from "./component/dakkantal.v2";

import * as AWS from 'aws-sdk'

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA6HQ3MCTYGDT5ZIWT',
    secretAccessKey: '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',
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            A non-exhaustive list of Senegalese family names
        </p>
      </header>
        <DakkantalV2/>
    </div>
  );
}

export default App;
