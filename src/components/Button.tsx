
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant?:string;
};

const Button = ({ type, title ,variant}: ButtonProps) => {
  return (
    <button
      className={`${variant} flex text-center bg-[#0f172a] my-4  w-40  lg:w-56 lg:text-lg  p-2 lg:p-4 `}
      type={type}>
      <label className="text-white">{title}</label>
    </button>
  );
};
export default Button;
