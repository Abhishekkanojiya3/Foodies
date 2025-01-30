const Error = ({ children }) => {
    try {
      return <>{children}</>; 
    } catch (error) {
      console.error("Caught an error:", error);
      return (
        <div className="error">
          <h1>Erorrrrrrrrrrrr</h1>
        </div>
      );
    }
  };
  
  export default Error;
  