import { SocketResponse } from "@/hooks/socket";
import Skeleton from "react-loading-skeleton";

interface SummaryProps {
  response: SocketResponse | null;
}

const Summary = ({ response }: SummaryProps) => {
  return (
    <div className='w-full max-w-4xl flex flex-col gap-4  border-1 border-gray-700 rounded-lg p-4'>
      <div className='text-xl font-bold'>
        {response?.status ? (
          response.status
        ) : (
          <Skeleton width={100} height={20} />
        )}
      </div>
      <div className='text-sm'>
        {response?.description ? (
          response.description
        ) : (
          <Skeleton width={100} height={20} />
        )}
      </div>
    </div>
  );
};

export default Summary;
