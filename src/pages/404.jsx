import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="w-1/2 flex mx-auto h-[800px] items-center">
      <div className="w-1/2 h-56 flex justify-center items-center text-6xl border-r-[1px] mr-9">
        <h1>404</h1>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-medium">Page Not Found</h1>
        <p className="text-secondary500 font-light my-5">
          We're sorry. This Page is unknown or does not exist the page you are
          looking for
        </p>
        <Link href="../">
          <Button className="bg-blue-600 " variant="contained">
            Back To Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
