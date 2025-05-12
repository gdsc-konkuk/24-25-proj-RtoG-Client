type CardContainerProps = {
  children: React.ReactNode;
  date: string;
};

const CardContainer = ({ children, date }: CardContainerProps) => {
  return (
    <div className='flex flex-col gap-4 p-4 justify-start w-full'>
      <div className='text-lg font-bold'>{date}</div>
      <div className='flex gap-8'>{children}</div>
    </div>
  );
};

export default CardContainer;
