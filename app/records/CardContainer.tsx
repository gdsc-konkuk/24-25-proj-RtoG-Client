type CardContainerProps = {
  children: React.ReactNode;
  date: string;
};

const CardContainer = ({ children, date }: CardContainerProps) => {
  return (
    <div className='flex flex-col gap-4 p-4 justify-start w-full'>
      <div className='text-lg font-bold'>{date}</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-fit justify-items-start'>
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
