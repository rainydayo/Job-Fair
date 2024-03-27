import InteractiveCard from './InteractiveCard';
import Image from 'next/image'
import Link from 'next/link';
import { CompanyItem } from '../../interfaces';

export default function ReservationCard( {rsvDate,user,restaurant,createdAt,rsvID} : 
    {rsvDate : string, user: string, restaurant: CompanyItem, createdAt: string,rsvID:string} ) { 
    
    return (
        <main>
            <div className='w-[330px] h-[300px] rounded-lg bg-slate-50 shadow-lg'>
                    <div>
                        <div className='w-full h-[9%] pt-5 font-bold '>{restaurant.name}</div>
                        <div className='w-full h-[9%] p-[5px] font-bold px-2'>{restaurant.tel}</div>
                        <div className='w-full h-[6%] p-[3px] px-5'>Date :{rsvDate}</div>
                        <div className='w-full h-[6%] p-[0px] px-5'>User ID :{user}</div>
                        <div className='w-full h-[6%] p-[0px] px-5'>createdAt :{createdAt}</div>
                    </div>
                    <div className='flex flex-row items-center px-[80px] pt-10'>
                        <div className='flex items-center h-full px-2 text-sm'>
                        <Link href={`/updatebooking/${rsvID}`}>
                            <button className="block rounded-md bg-sky-700 hover:bg-cyan-950 px-3 py-2 text-white p-5 ">
                                Edit
                            </button>
                        </Link>
                        </div>
                        <div className='flex items-center h-full px-2 text-sm'>
                            <Link href={`/delbooking/${rsvID}`}>
                                <button className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white p-5">
                                    DELETE
                                </button>
                            </Link>
                            
                        </div>
                        
                    
                    </div>                 
            </div>
        </main>
       
    );
}

