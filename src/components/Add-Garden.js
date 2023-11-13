import { useState } from 'react';
import Model from '../components/GardenPopup';

function AddGarden() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 flex justify-center w-full">
      <button
        className='border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white'
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      <Model open={open} onClose={() => setOpen(false)}>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl'>Model Title</h1>
          <p>bfygfgbdhjfyf gyqdyuqdqhjd gdyugqwdihbqd</p>
          <p>gdqwduqwgd tqwbdhdqn dqdojld hduiqhd</p>
          <hr className='border-t-solid border-1 border-grey' />
        </div>
      </Model>
    </div>
  );
}

export default AddGarden;
