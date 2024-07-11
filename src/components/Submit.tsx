interface SubmitProps {
  onClick: () => void;
}

export const Submit: React.FC<SubmitProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center p-4">
      <button
        type="button"
        className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 "
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
};
