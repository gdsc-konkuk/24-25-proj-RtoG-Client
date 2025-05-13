import { SocketResponse } from "@/hooks/socket";

interface SummaryProps {
  response: SocketResponse | null;
}

const Summary = ({ response }: SummaryProps) => {
  return (
    <div className='w-full max-w-4xl flex flex-col gap-4  border-1 border-gray-700 rounded-lg p-4'>
      <div className='text-xl font-bold'>{response?.status || "Unknown"}</div>
      <div className='text-sm'>
        {response?.description || "Default description about this event."}
      </div>
    </div>
  );
};

export default Summary;
