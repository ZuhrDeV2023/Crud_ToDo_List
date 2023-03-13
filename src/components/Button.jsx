const Button = ({ children, onClick }) => {
  return (
    <button 
      className="flex-auto bg-outline-600 text-red-500 mx-auto w-100 outline outline-2 outline-offset-2 py-2 px-2 mt-4 mb-5 rounded hover:bg-green-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;