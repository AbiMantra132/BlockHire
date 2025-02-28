import P from "./P";

interface InputTextProps {
  title: string;
  placeholder: string;
  value: string;
  onchange: (e: any) => void;
}

export default function InputText({
  title,
  placeholder,
  value,
  onchange,
}: InputTextProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <P>{title}</P>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
        className="w-full bg-white rounded-md px-4 outline-none py-3"
      />
    </div>
  );
}
