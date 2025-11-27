"use client";

function Button({ children, variant, onClick, type = "button" }) {
  const getClassNames = () => {
    let classNames = "font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ";
    if (variant === "primary") {
      classNames +=
        "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
    } else if (variant === "yellow") {
      classNames +=
        "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900";
    } else {
      classNames +=
        "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
    }
    return classNames;
  };

  return (
    <>
      <button className={getClassNames()} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
