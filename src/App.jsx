import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <h1>Hola Carlos, ya estás autenticado</h1>
    </div>
  );
}

export default withAuthenticator(App);
