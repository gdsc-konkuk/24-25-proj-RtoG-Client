import Skeleton from "react-loading-skeleton";

interface SummaryProps {
  description: string | undefined;
  event_type: string | undefined;
}

const Summary = ({ description, event_type }: SummaryProps) => {
  return (
    <div className='w-full max-w-4xl flex flex-col gap-4  border-1 border-gray-700 rounded-lg p-4'>
      <div className='text-xl font-bold'>
        {event_type ? event_type : <Skeleton width={100} height={20} />}
      </div>
      <div className='text-sm'>
        {description ? description : <Skeleton width={100} height={20} />}
      </div>
    </div>
  );
};

export default Summary;
