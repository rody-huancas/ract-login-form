import React from "react";

export const Error = () => {
  return (
    <div className="w-full px-3 bg-red-500 my-3 text-white rounded-xl uppercase text-center py-3">
      <span className="font-bold">Error!</span>
      <p className="font-medium text-sm">Debe llenar todos los campos</p>
    </div>
  );
};
