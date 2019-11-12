import React, { createElement } from 'react';

import { schema } from "./schema";
import renderSchema from "./renderSchema";

function App() {
  return (
    <div className="App">
      {renderSchema(schema)}
    </div>
  );
}

export default App;
