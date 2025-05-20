import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Get the current path
    const path = window.location.pathname;

    // Check if the path matches our redirect rule
    if (path === "/store/resoles" || path === "/store/resoles/") {
      // Redirect to the new URL
      window.location.replace("https://thegearroom.com/pages/resoles");
    } else {
      // For any other path, redirect to the main domain
      window.location.replace("https://thegearroom.com");
    }
  }, []);

  // This return statement won't be visible as the redirect happens immediately
  return (
    <div className="App">
      <header className="App-header">
        <p>Redirecting you to The Gear Room...</p>
      </header>
    </div>
  );
}

export default App;
