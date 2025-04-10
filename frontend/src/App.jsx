import clientService from "./services/clientService" 
 
function App() {

  const loadClients = async () => {
    console.log("???");
    const { success, data, message } = await clientService.getClients(10, 0);
    console.log("---");
    if (!success) {
     // Swal.fire("Error", message, "error");
     alert(message);
      return;
    }
  
    // Usar data.clients o lo que venga de la API
    console.log("Clientes:", data.clients);
  };

  return (
    <>
      <div>
        <h1>Hola mundo</h1>
        <button onClick={(e)=> loadClients()}>hi</button>
       </div>
    </>
  )
}

export default App
