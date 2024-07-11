interface PlayerBoxProps {
  Name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const PlayerBox: React.FC<PlayerBoxProps> = ({
  Name,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex justify-center">
      <div>
        <label className="block mb-2 text-lg font-medium text-gray-900 ">
          {Name}
        </label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};
