import React from "react";
import Button from "@mui/material/Button";

const ErrorPage = () => {
  return (
    <main className="w-1/2 flex mx-auto h-[800px] items-center">
      <div className="w-1/2 text-center text-6xl">
        <h1>404</h1>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-medium mb-10">Page Not Found</h1>
        <p className="text-secondary500 font-light">
          We're sorry. This Page is unknown or does not exist the page you are
          looking for
        </p>
        <Button color="secondary" variant="contained">
          Back To Home
        </Button>
      </div>
    </main>
  );
};

export default ErrorPage;
