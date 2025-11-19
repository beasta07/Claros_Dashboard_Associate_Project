import { useQuery } from '@tanstack/react-query';
import { fetchClients } from '../../api/clients';
import {type Client } from '../../types';
const Clients = () => {
  const { data: savingPlans, isLoading, isError } = useQuery<Client[]>({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  if (isLoading)
    return (
      <div className="bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4">
        <p>Loading plans...</p>
      </div>
    );

  if (isError)
    return (
      <div className="bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4">
        <p className="text-red-500">Error loading data.</p>
      </div>
    );

  return (
    <div className='bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4'>
      <div className='flex justify-between'>
        <h1 className='font-bold'>User Information</h1>
        <button className='text-[#4644a4] cursor-pointer'>See All</button>
      </div>
      <hr className='text-gray-300 my-5' />
      <ul className='flex flex-col gap-6'>
{savingPlans?.slice(-4)?.map((plan: Client, index: number) => (          <li key={index}>
           <div className='flex justify-between'>
            <div className='flex items-center gap-2 text-xs'>
              <img src={plan.image} className='rounded-full size-10' alt="" />
             <div>
              <h1 className='font-medium text-sm'>{plan.name}</h1>
              <p className='text-xs text-gray-700'>@{plan.username}</p>
              </div> 
            </div>
                  <div className={ `${plan.status === 'Active'? 'text-green-600':'text-red-600'} font-medium`}>
                    {plan.status}
                  </div>
           </div>
 
    
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
